export const config = {
  runtime: 'edge', // Edge runtime is required to process Web Request/Response objects natively in Vercel
};

import server from '../dist/server/server.js';

export default function handler(request) {
  return server.fetch(request);
}
