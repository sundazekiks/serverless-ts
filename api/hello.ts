export default {
  async fetch(request: Request) {
    const body = await request.json()
    return new Response(`Hello from Vercel! ${request.method} ${JSON.stringify(body)}`);
  },
};