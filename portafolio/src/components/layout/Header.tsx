import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };
    handleScroll();
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Mapeo de rutas (Inglés) y Nombres (Español)
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Contacto", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* --- HEADER PRINCIPAL --- */}
      <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo y Branding */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/logo.webp"
                alt="Logo"
                className="w-15 h-12 rounded-lg shadow-lg"
              />
            </a>
            <div className="hidden sm:block border-l border-gray-700 pl-4">
              <h1 className="text-white font-bold text-lg leading-none">
                Javier<span className="text-blue-500">SG</span>
              </h1>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-semibold">
                Backend Developer
              </p>
            </div>
          </div>

          {/* Desktop Nav (lg+) */}
          <nav className="hidden lg:flex gap-8 items-center font-medium">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-3">
            {/* CV Button (Adaptable) */}
            <a
              href="/cv.pdf"
              download
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M12 11v6m0 0l-3-3m3 3l3-3" />
              </svg>
              <span className="hidden md:inline">Descargar CV</span>
              <span className="md:hidden text-xs">CV</span>
            </a>

            {/* Hamburger Button (lg:hidden) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
              aria-label="Abrir menú"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* --- MENÚ MÓVIL FULLSCREEN (Fuera del header para evitar bugs de fixed) --- */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 z-[9999] ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Botón Cerrar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-gray-400 hover:text-white p-4 transition-transform hover:rotate-90"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-12">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-4xl font-black italic uppercase tracking-tighter text-gray-500 hover:text-blue-500 transition-all active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-600 px-14 py-4 rounded-full text-white font-bold text-2xl uppercase italic tracking-widest shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-colors"
          >
            Contacto
          </a>
        </nav>
      </div>
    </>
  );
};
