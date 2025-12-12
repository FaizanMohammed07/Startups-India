import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignatureIntro from "./components/SignatureIntro";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WritingPage from "./pages/WritingPage";
import JourneyPage from "./pages/JourneyPage";
import SpeakerPage from "./pages/SpeakerPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const introDuration = 7000; // 7 seconds

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), introDuration + 400); // allow small fade
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro ? (
        <SignatureIntro />
      ) : (
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-8 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/writing" element={<WritingPage />} />
                <Route path="/journey" element={<JourneyPage />} />
                <Route path="/speaker" element={<SpeakerPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
