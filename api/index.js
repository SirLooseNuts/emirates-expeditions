import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach(v => headers.append(key, v));
      else if (value) headers.append(key, value);
    });

    const init = {
      method: req.method,
      headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = new ReadableStream({
        start(controller) {
          req.on('data', chunk => controller.enqueue(chunk));
          req.on('end', () => controller.close());
          req.on('error', err => controller.error(err));
        }
      });
      init.duplex = 'half';
    }

    const request = new Request(url.href, init);
    const response = await server.fetch(request);

    res.statusCode = response.statusCode || response.status || 200;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      if (typeof response.body.getReader === 'function') {
        const reader = response.body.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
        res.end();
      } else {
        res.end(await response.text());
      }
    } else {
      res.end();
    }
  } catch (err) {
    console.error('API Handler Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error: ' + err.message);
  }
}
