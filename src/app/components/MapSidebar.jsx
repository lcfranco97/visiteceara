'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Sidebar = ({ pontos, onFilterChange, onSelectPonto, selectedPonto }) => {
  const categorias = [...new Set(pontos.map(p => p.categoria))];
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (cat) => {
    if (activeCategory === cat) {
      setActiveCategory(null);
      onFilterChange('all');
    } else {
      setActiveCategory(cat);
      onFilterChange(cat);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-100 p-4 border-l rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Locais Turísticos</h2>

      {categorias.map(cat => (
        <div key={cat} className="mb-3">
          <button
            onClick={() => handleCategoryClick(cat)}
            className="w-full text-left bg-blue-500 text-white px-3 py-2 rounded transition hover:bg-green-600 cursor-pointer"
          >
            {activeCategory === cat ? `- ${cat}` : `+ ${cat}`}
          </button>

          <AnimatePresence>
            {activeCategory === cat && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 overflow-hidden"
              >
                {pontos.filter(p => p.categoria === cat).map(ponto => (
                  <li
                    key={ponto.nome}
                    onClick={() => onSelectPonto(ponto)}
                    className="cursor-pointer text-blue-700 hover:underline mb-1 transition hover:text-blue-900"
                  >
                    {ponto.nome}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="mt-6 transition duration-300">
        {selectedPonto ? (
          <motion.div
            key={selectedPonto.nome}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-blue-700">{selectedPonto.nome}</h3>
            <img src={selectedPonto.imagem} alt={selectedPonto.nome} className="w-full rounded mt-2 mb-2" />
            <p>{selectedPonto.descricao}</p>
          </motion.div>
        ) : (
          <p>Selecione um local no mapa ou na lista.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;