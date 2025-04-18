const BASE_URL = 'https://reqres.in/api';

export interface UserLogin {
  email: string;
  password?: string;
}

export const loginUser = async (user: UserLogin): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('Login failed:', data.error || data);
    } else {
      console.log('Login successful:', data);
    }
  } catch (error) {
    console.error('Login Error:', error);
  }
};

export const fetchUsers = async (page: number, per_page: number): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/users?page=${page}&per_page=${per_page}`);
    const data = await response.json();
    console.log('Users:', data);
  } catch (error) {
    console.error('Fetch Users Error:', error);
  }
};

export const fetchUserById = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`);
      const data = await response.json();
  
      if (!response.ok) {
        console.warn('User not found:', data.error || data);
      } else {
        console.log('User retrieved:', data);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  
  // services/api.ts
export const createUser = async (user: { name: string; email: string; password: string; job: string }): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.warn('User creation failed:', data.error || data);
      } else {
        console.log('User created successfully:', data);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  // services/api.ts
export const updateUser = async (user: { id: number; name: string; email: string; password: string; job: string }): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.warn('User update failed:', data.error || data);
      } else {
        console.log('User updated successfully:', data);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  // services/api.ts
export const updateUserFields = async (id: number, fields: { email?: string; name?: string; job?: string }): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.warn('User fields update failed:', data.error || data);
      } else {
        console.log('User fields updated successfully:', data);
      }
    } catch (error) {
      console.error('Error updating user fields:', error);
    }
  };
  
  // services/api.ts
export const deleteUser = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const data = await response.json();
        console.warn('User delete failed:', data.error || data);
      } else {
        console.log('User deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  