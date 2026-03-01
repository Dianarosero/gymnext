"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  { name: "Dashboard", path: "/" },
  { name: "Salas", path: "/salas" },
  { name: "Incidencias", path: "/incidencias" },
  { name: "Órdenes", path: "/ordenes" },
  { name: "Planes", path: "/planes" },
  { name: "Usuarios", path: "/usuarios" },
];

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const currentPath = usePathname();

  const handleLinkClick = () => {
    // Cerrar el sidebar en móvil cuando se hace clic en un enlace
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop para móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 bg-white border-r border-gray-100 flex-col shadow-sm z-50
          fixed md:static inset-y-0 left-0 transition-transform duration-300 ease-in-out
          md:flex
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header del sidebar */}
        <div className="h-16 flex items-center px-6 border-b border-gray-50">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Gym<span className="text-purple-600">Admin</span>
          </h1>
        </div>

        {/* Navegación principal */}
        <nav className="flex-1 py-6 px-4 space-y-1.5">
          {navigationItems.map((item) => {
            const isCurrentPage = currentPath === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isCurrentPage
                    ? "bg-purple-50 text-purple-700 shadow-sm shadow-purple-100/50 border border-purple-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 text-xs text-gray-400 border-t border-gray-100">
          v1.0.0 - &copy; 2026 Diana Rosero
        </div>
      </aside>
    </>
  );
}
