"use client";
import React from 'react';
import Header from "./components/header";
import LandingPage from './Page/LandingPage';
import Footer from './components/footer';

export default function Home() {
    return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Header />
        <LandingPage />
        <Footer />
    </div>
        
    );  
}

