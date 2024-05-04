"use client";
import React, { useEffect, useState } from "react";
import Leftscreen from "./components/leftscreen";
import Rightscreen from "./components/rightscreen";
import Header from "./components/header";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="flex justify-center p-4">
            <Leftscreen />
            <Rightscreen />
          </main>
        </>
      )
      }
    </>
  );
}
