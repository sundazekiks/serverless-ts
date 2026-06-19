export default {
  async fetch(request: Request) {
    return new Response(`Hello from Vercel! ${request.method} ${await request.json()}`);
  },
};