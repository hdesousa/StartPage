"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      alert('Login successful');
      router.push('/');
    } else {
      const errorData = await res.json();
      alert(errorData.error);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-gray-700">Username</span>
              <input 
                type="text" 
                className="mt-1 block w-full rounded-md text-gray-900 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                placeholder=""
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <input 
                type="password" 
                className="mt-1 block w-full rounded-md text-gray-900 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                placeholder=""
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </label>
            <input 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              value="Login" 
            />
          </form>
        </div>
      </main>
    </>
  );
}