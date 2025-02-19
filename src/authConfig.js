// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "17f8ac69-5d4c-4ea2-a177-3e89ac1a897d",
        authority:
            "https://login.microsoftonline.com/508a712a-b960-48e6-b1e4-72d961e2aa4e",
        redirectUri: "/",
        postLogoutRedirectUri: "/",
    },
    system: {
        allowPlatformBroker: false, // Disables WAM Broker
    },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
