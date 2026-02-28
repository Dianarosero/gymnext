"use client";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const metadata = {
  title: "GymAdmin - Sistema de Gestión",
  description: "Admin Dashboard para gestión de gimnasio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex h-screen bg-gray-50 text-gray-900 font-sans antialiased">
        {/* Botón hamburguesa para móviles */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-gray-200 md:hidden hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center space-y-1">
            <span
              className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                isSidebarOpen
                  ? "rotate-45 translate-y-1.5"
                  : "rotate-0 translate-y-0"
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                isSidebarOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                isSidebarOpen
                  ? "-rotate-45 -translate-y-1.5"
                  : "rotate-0 translate-y-0"
              }`}
            />
          </div>
        </button>

        {/* Sidebar de navegación */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto p-8 md:p-8 pt-16 md:pt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
