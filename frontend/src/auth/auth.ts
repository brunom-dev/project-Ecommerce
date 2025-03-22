export const auth = (username: string, password: string): boolean => {

    const storedUsername = 'admin';
    const storedPassword = 'admin';

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        return true;
    }

    return false;
};

export const isAuthenticated = (): boolean => {
    return localStorage.getItem('isLoggedIn') === 'true';
};
  
export const logout = (): void => {
    localStorage.removeItem('isLoggedIn');
};
  