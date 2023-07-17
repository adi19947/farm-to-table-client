import JwtDecode from "jwt-decode";

const TOKEN = "token";

export const setTokenInLocalStorage = (encryptedToken: string): void => {
    localStorage.setItem(TOKEN, encryptedToken);
};

export const getUser = (): any => {
    try {
        const user = localStorage.getItem(TOKEN);
        if (user) {
            return JwtDecode(user);
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const removeTokenFromLocalStorage = (): void => {
    localStorage.removeItem(TOKEN);
};

export const getTokenFromLocalStorage = (): string | null => {
    return localStorage.getItem(TOKEN);
};
