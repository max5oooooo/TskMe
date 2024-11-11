export const config = {
    API_BASE_URL: "http://localhost:3030/api",
    AUTH_BASE_URL: "http://localhost:3030/auth"
}

export const formatApiUrl = (path = "/") => {
    return `${config.API_BASE_URL}${path}`;
}

export const formatAuthUrl = (path = "/") => {
    return `${config.AUTH_BASE_URL}${path}`;
}