
"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import '../components/css/homepage.css'

import MainHome from "./Main";
const Homepage = () => {
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
            <MainHome/>
            <Footer/>
        </>
      )
      }
    </>
    
  )
}

export default Homepage
