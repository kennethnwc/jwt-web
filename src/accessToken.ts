export let accessToken: string;

export const setAccessToken = (s: string) => {
    accessToken = s
}

export const getAccessToken = () => {
    return accessToken
}