"use client";

import { useState, FormEvent } from 'react';
import Search from '../components/search';
import Logout from '../components/logout';

export default function Home() {
  return (
    <>
      <div className="absolute right-0 top-0">
        <Logout />
      </div>
      <main className="min-h-screen p-8 grid grid-cols-3 gap-4">
        <div>
          <Search />
        </div>
        <div>
        </div>
        <div>
        </div>
      </main>
    </>
  );
}
