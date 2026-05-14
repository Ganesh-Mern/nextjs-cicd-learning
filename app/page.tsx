"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
       {/* CI/CD Working Successfully 🚀 */}
       CI/CD + Environment Variables 🚀
      </h1>
      <h2>{process.env.NEXT_PUBLIC_APP_NAME}</h2>
      <p className="mt-5 text-2xl">
        {message}
      </p>
    </div>
  );
}