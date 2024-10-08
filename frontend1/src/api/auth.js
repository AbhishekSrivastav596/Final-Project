
export const login = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token); 
    localStorage.setItem('role', data.role);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('email', email);
  }
  return data;
};



export const signup = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Signup failed');
    }
    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('userId');
  localStorage.removeItem('email');
};

export const getToken = () => {
  return localStorage.getItem('token');
};