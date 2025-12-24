// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminRoute from './pages/AdminRoute';

import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleBanner from './components/VehicleBanner';
import Services from './components/Services';
import Vehicules from './components/Vehicules';
import Avis from './components/Avis';
import Contact from './components/Contact';
import Apropos from './components/Apropos';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Header />
      <Hero />
      <VehicleBanner />
      <Services />
      <Vehicules />
      <Avis />
      <Contact />
      {/* <Apropos /> */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
