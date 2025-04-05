exports.httpHandler = {
  endpoints: [
    {
      method: 'GET',
      path: 'debug',
      handle: function handle(ctx) {
        // See https://www.jetbrains.com/help/youtrack/devportal-apps/apps-reference-http-handlers.html#request
        const requestParam = ctx.request.getParameter('test');
        // See https://www.jetbrains.com/help/youtrack/devportal-apps/apps-reference-http-handlers.html#response
        ctx.response.json({test: requestParam});
      }
    },

    {
      method: 'GET',
      path: 'flag',
      handle: function handle(ctx) {
        const { globalFlag } = ctx.globalStorage.extensionProperties; // Retrieve flag from storage
        ctx.response.json({ flag: globalFlag || false }); // Default to false if not set
      }
    },

    {
      method: 'POST',
      path: 'flag',
      handle: function handle(ctx) {
        const body = ctx.request.json();
        ctx.globalStorage.extensionProperties.globalFlag = body.flag; // Save flag in storage
        ctx.response.json({ flag: body.flag });
      }
    }

  ]
};
