export default function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);

    return res.status(200).json({
      path: url.pathname,
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
