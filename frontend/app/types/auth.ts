interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    role: 'admin' | 'user';
  }
  
  interface AuthResponse {
    token: string;
    user: User;
  }