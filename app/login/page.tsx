"use client";
import React from "react";
import LoginSignupPage from "../login/LoginSignup"
import "../components/css/login.css"
import Header from "../components/header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
    <Header/>
    <LoginSignupPage />
    <Footer/>
    </>
    
  );
}