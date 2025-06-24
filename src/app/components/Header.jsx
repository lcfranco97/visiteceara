'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = useSmoothScroll();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => setMenuOpen(false);


    return (
       <>
             <header className={`fixed w-full top-0 left-0 z-[100] px-6 py-4 flex items-center justify-between md:justify-around transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-mg backdrop-blur-md' : 'bg-transparent text-white'}`}>

            <Link href={'/'} className="text-2xl font-bold" onClick={closeMenu}>
                VISITE CEARÁ
            </Link>

            <nav className="hidden md:flex space-x-6">

                <Link href={'/'} className="font-semibold text-md hover:text-green-600 transition-colors duration-400">
                    INÍCIO
                </Link>

                <button onClick={() => scrollTo('sobre')} className="font-semibold text-md cursor-pointer  hover:text-green-600 transition-colors duration-400">
                    SOBRE
                </button>

                <button onClick={() => scrollTo('coisas')} className="font-semibold text-md cursor-pointer  hover:text-green-600 transition-colors duration-400">
                    COISAS A FAZER
                </button>

                <button onClick={() => scrollTo('galeria')} className="font-semibold text-md cursor-pointer  hover:text-green-600 transition-colors duration-400">
                    GALERIA
                </button>

               

            </nav>

            {/* BOTAO MENU MOBILE */}
            <button className="md:hidden text-black z-[60]" onClick={toggleMenu}
            aria-label="Abrir menu">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

        </header>


        {/* Overlay escuro ao fundo quando o menu mobile é aberto */}
        <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`} onClick={closeMenu} />

        {/* Drawer menu (menu lateral que desliza para direita) */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 p-6 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            <button className="absolute top-4 right-4 text-white" onClick={closeMenu} aria-label="Fechar menu">
                <X size={28} />
            </button>

            <nav className="flex flex-col items-start space-y-4 mt-16 text-lg font-medium">

                <Link href={'/'} onClick={closeMenu}>INÍCIO</Link>

                <button onClick={() => scrollTo('sobre')} className="">
                    SOBRE
                </button>

                <button onClick={() => scrollTo('coisas')} className="">
                    COISAS A FAZER
                </button>

                <button onClick={() => scrollTo('galeria')} className="">
                    GALERIA
                </button>

                
            </nav>

        </div>



       </>
    );





}