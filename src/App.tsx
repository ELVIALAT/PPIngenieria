/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar, Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Experience } from "./components/Experience";
import { Sectors, Profile } from "./components/Sectors";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { translations } from "./data";

export default function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = translations[lang];

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  return (
    <div className="bg-white text-brand selection:bg-brand selection:text-white min-h-screen font-sans antialiased scroll-smooth">
      <Navbar t={t.nav} toggleLang={toggleLang} />
      <main>
        <Hero t={t.hero} />
        <Expertise t={t.expertise} />
        <Sectors t={t.sectors} />
        <Experience t={t.experience} />
        <Profile t={t.profile} />
        <Contact t={t.contact} />
      </main>
      <Footer t={{...t.footer, nav: t.nav}} />
      <WhatsAppButton />
    </div>
  );
}


