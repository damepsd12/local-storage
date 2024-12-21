// // types.ts
// interface User {
//     id: string;
//     name: string;
//     email: string;
//     role: string;
//   }
  
//   interface AuthResponse {
//     user: User;
//     token: string;
//   }
  
//   // authService.ts
//   const AUTH_TOKEN_KEY = 'auth_token';
//   const USER_KEY = 'user';
  
//   export const authService = {
//     setAuth(response: AuthResponse) {
//       localStorage.setItem(AUTH_TOKEN_KEY, response.token);
//       localStorage.setItem(USER_KEY, JSON.stringify(response.user));
//     },
  
//     clearAuth() {
//       localStorage.removeItem(AUTH_TOKEN_KEY);
//       localStorage.removeItem(USER_KEY);
//       localStorage.removeItem('loggedin');
//     },
  
//     getToken() {
//       return localStorage.getItem(AUTH_TOKEN_KEY);
//     },
  
//     getUser(): User | null {
//       const userStr = localStorage.getItem(USER_KEY);
//       return userStr ? JSON.parse(userStr) : null;
//     },
  
//     isAuthenticated() {
//       return !!this.getToken();
//     }
//   };

