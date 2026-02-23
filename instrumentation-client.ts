import { initBotId } from 'botid/client/core';

// This runs on the client to perform challenges for BotID protection.
initBotId({
    protect: [
        {
            // We protect the server action that handles contact form submissions.
            // Next.js server actions are regular POST requests under the hood
            // targeting the page they are invoked from or an api route.
            // Since server actions can be invoked from multiple pages in app router,
            // and we want to protect all POST requests that might be a server action,
            // we'll protect all POST requests in the application.
            path: '/*',
            method: 'POST',
        },
    ],
});
