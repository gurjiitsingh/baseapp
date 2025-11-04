"use client";

import { Lato } from "next/font/google";
import { Users, Percent } from "lucide-react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export default function DiscountSection() {
  return (
    <section className="w-full bg-[#fff8f4] ">
    <div className="w-6xl mx-auto py-10 px-4 flex flex-col md:flex-row justify-center gap-5">
      {/* Shoprabatt Card */}
      <div className="flex-1 bg-[#7a1512] rounded-2xl text-white p-6 relative overflow-hidden flex flex-col justify-between shadow-md">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/pattern.svg')] bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2
            className={`${lato.className} text-[56px] md:text-[64px] font-extrabold leading-none`}
          >
            5<span className="align-super text-[32px]">%</span>
          </h2>
          <h3
            className={`${lato.className} text-xl md:text-2xl font-bold mt-2`}
          >
            Shoprabatt
          </h3>
          <p className="text-sm mt-2 leading-snug opacity-90">
            5% Rabatt – Auf ausgewählte Gerichte.  
            Das Angebot ist nicht mit anderen Gerichte-Rabatten kombinierbar.
          </p>
        </div>

        <button className="relative z-10 mt-5 bg-white text-[#7a1512] font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition w-fit self-start">
          Zur Aktion
        </button>
      </div>

      {/* Gruppenfunktion Card */}
      <div className="flex-1 bg-[#7a1512] rounded-2xl text-white p-6 relative overflow-hidden flex flex-col justify-between shadow-md border border-[#a94440]">
        {/* Decorative shape */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/pattern.svg')] bg-cover bg-center pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <Percent size={50} className="text-white opacity-80" />
            <h2
              className={`${lato.className} text-[48px] md:text-[64px] font-extrabold leading-none`}
            >
              +5<span className="align-super text-[28px]">%</span>
            </h2>
          </div>
          <h3
            className={`${lato.className} text-xl md:text-2xl font-bold mt-2`}
          >
            extra Rabatt mit Gruppenfunktion
          </h3>
          <p className="text-sm mt-2 leading-snug opacity-90">
            5% Rabatt – Ab 100€ Bestellwert.  
            Das Angebot ist nicht mit anderen Rabatten kombinierbar.
          </p>
        </div>

        <div className="relative z-10 flex flex-col mt-5">
          <button className="bg-white text-[#7a1512] font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition w-fit self-start">
            Gruppe starten
          </button>
          <p className="text-[13px] mt-2 text-[#fff5f5] opacity-90">
            Schneller & einfacher bestellen schon ab 2 Personen
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
