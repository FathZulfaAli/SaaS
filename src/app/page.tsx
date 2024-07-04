'use client';
import Image from 'next/image';
import { ChangeEvent, FormEvent, SetStateAction, useState } from 'react';
import { Tweet } from 'react-tweet';

export default function Home() {
  const [id, setId] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      id: { value: string };
    };
    setId(target.id.value);
  };

  const handleReset = () => {
    setId('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center mt-20">
      <div>
        <div>
          <span>https://x.com/ELDENRING/status/</span>
          <span className="text-blue-500">1808775732899745981</span>
        </div>

        <span className="mt-2">copy the id</span>
      </div>
      <div className="flex flex-col mt-9 place-items-center ">
        {id ? (
          <>
            <Tweet id={id} />
            <button
              type="button"
              onClick={handleReset}
              className="relative z-10 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <input type="text" name="id" placeholder="Enter tweet ID" />
            <button
              type="submit"
              className="relative ml-5 z-10 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
