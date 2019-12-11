// not a goood practice since the react page may rerender 
// use some state management library to solve this
let accessToken: string;

export const setAccessToken = (s: string) => {
    accessToken = s
}

export const getAccessToken = () => {
    return accessToken
}