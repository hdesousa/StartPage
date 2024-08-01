"use client";

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const Logout: React.FC = () => {
  const router = useRouter();
  const logout = () => async (event: FormEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    const res = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: "{}",
      });
  
      if (res.ok) {
        router.push('/');
      } else {
        const errorData = await res.json();
        alert(errorData.error);
      }
  };

  return (
    <>
      <button 
        className="items-center justify-center my-2 mx-2 px-2 h-5 text-sm border bg-black text-white rounded-md w-18 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800" 
        onClick={logout()}
      >
        Exit
      </button>
    </>
  );
};

export default Logout;