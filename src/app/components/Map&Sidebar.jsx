'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./MapSidebar";
import { motion } from "framer-motion";




const MapComponent = dynamic(() => import('../components/Map'), { ssr: false });

export default function MapSidebar() {
  const [pontos, setPontos] = useState([]);
  const [categoria, setCategoria] = useState('all');
  const [selectedPonto, setSelectedPonto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCoords, setSelectedCoords] = useState(null);
  

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

  const handleFilterChange = (cat) => {
    setCategoria(cat);
    setSelectedPonto(null);
  };

  const handleSelectPonto = (ponto) => {
    setSelectedPonto(ponto);
    setSelectedCoords(ponto.coords);
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
        className="flex flex-col md:flex-row h-[calc(100vh-64px)] mt-20 z-0">

      <div className="flex-1 h-[400px] md:h-full">
        <MapComponent
          pontos={pontos}
          categoriaSelecionada={categoria}
          onSelectPonto={handleSelectPonto}
          selectedCoords={selectedCoords}
        />
      </div>
      <div className="w-full md:w-1/3 h-[300px] md:h-full overflow-y-auto bg-white shadow-md">
        <Sidebar
          pontos={pontos}
          onFilterChange={handleFilterChange}
          onSelectPonto={handleSelectPonto}
          selectedPonto={selectedPonto}
        />
      </div>
    </motion.div>
  );
}