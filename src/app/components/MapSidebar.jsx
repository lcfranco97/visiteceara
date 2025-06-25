'use client'
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ pontos, onFilterChange, onSelectPonto, selectedPonto, onClose }) => {
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
    <div className="h-full overflow-y-auto bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700">Locais Turísticos</h2>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        )}
      </div>

      <div className="space-y-3">
        {categorias.map(cat => (
          <div key={cat}>
            <button
              onClick={() => handleCategoryClick(cat)}
              className={`w-full text-left px-4 py-3 rounded transition ${
                activeCategory === cat 
                  ? 'bg-green-600 text-white' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {cat} {activeCategory === cat ? '-' : '+'}
            </button>

            {activeCategory === cat && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="pl-4 mt-2 space-y-1"
              >
                {pontos
                  .filter(p => p.categoria === cat)
                  .map(ponto => (
                    <li
                      key={ponto.nome}
                      onClick={() => onSelectPonto(ponto)}
                      className={`px-3 py-2 rounded cursor-pointer transition ${
                        selectedPonto?.nome === ponto.nome
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {ponto.nome}
                    </li>
                  ))}
              </motion.ul>
            )}
          </div>
        ))}
      </div>

      {selectedPonto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold text-gray-800">{selectedPonto.nome}</h3>
          <img 
            src={selectedPonto.imagem} 
            alt={selectedPonto.nome} 
            className="w-full h-48 object-cover rounded mt-2 mb-3"
          />
          <p className="text-gray-600">{selectedPonto.descricao}</p>
          <div className="mt-3 text-sm text-gray-500">
            <p>📍 {selectedPonto.endereco}</p>
            {selectedPonto.horario && <p>⏰ {selectedPonto.horario}</p>}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;