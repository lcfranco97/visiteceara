'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./MapSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const MapComponent = dynamic(() => import('../components/Map'), { ssr: false });

export default function MapSidebar() {
  const [pontos, setPontos] = useState([]);
  const [categoria, setCategoria] = useState('all');
  const [selectedPonto, setSelectedPonto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    async function fetchPontos() {
      try {
        const res = await fetch('/api/pontos');
        const data = await res.json();
        setPontos(data);
      } catch (error) {
        console.error('Erro ao carregar pontos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPontos();
  }, []);

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  const handleFilterChange = (cat) => {
    setCategoria(cat);
    setSelectedPonto(null);
  };

  const handleSelectPonto = (ponto) => {
    setSelectedPonto(ponto);
    setSelectedCoords(ponto.coords);
    if (isMobile) setSidebarExpanded(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando mapa...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }} 
      className="relative flex flex-col h-[calc(100vh-64px)] mt-20 z-0"
    >
      {/* Botão de toggle para mobile */}
      {isMobile && (
        <button 
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2"
        >
          {sidebarExpanded ? (
            <>
              <ChevronDown size={20} /> Ver Mapa
            </>
          ) : (
            <>
              <ChevronUp size={20} /> Ver Detalhes
            </>
          )}
        </button>
      )}

      {/* Container principal */}
      <div className="flex-1 flex flex-col md:flex-row h-full">
        {/* Mapa - Sempre visível no desktop, condicional no mobile */}
        <div className={`${isMobile && sidebarExpanded ? 'hidden' : 'flex'} flex-1 h-full`}>
          <MapComponent
            pontos={pontos}
            categoriaSelecionada={categoria}
            onSelectPonto={handleSelectPonto}
            selectedCoords={selectedCoords}
          />
        </div>

        {/* Sidebar - Comportamento diferente para mobile */}
        <AnimatePresence>
          {(!isMobile || sidebarExpanded) && (
            <motion.div
              initial={isMobile ? { y: '100%' } : {}}
              animate={isMobile ? { y: 0 } : {}}
              exit={isMobile ? { y: '100%' } : {}}
              transition={{ duration: 0.3 }}
              className={`${isMobile ? 
                'fixed inset-0 z-10 bg-white pt-4 pb-20' : 
                'w-full md:w-1/3'} h-full overflow-y-auto shadow-md`}
            >
              <Sidebar
                pontos={pontos}
                onFilterChange={handleFilterChange}
                onSelectPonto={handleSelectPonto}
                selectedPonto={selectedPonto}
                onClose={() => isMobile && setSidebarExpanded(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}