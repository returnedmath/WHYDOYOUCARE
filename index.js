export default {
  async fetch(request, env, ctx) {
    const originResponse = await fetch(request);
    const headers = new Headers(originResponse.headers);

    // Replace the Server header
    headers.delete("Server");
    headers.set("Server", "whydoyoucare?");

    return new Response(originResponse.body, {
      status: originResponse.status,
      headers
    });
  }
};
