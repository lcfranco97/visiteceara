'use client'
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import { useState, useEffect } from "react";

const MapComponent = ({ pontos, categoriaSelecionada, onSelectPonto, selectedCoords }) => {
  const [scrollZoom, setScrollZoom] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      setScrollZoom(!isMobile);
    }
  }, []);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    });
  }, []);

  function MapFlyTo({ coords }) {
    const map = useMap();
    useEffect(() => {
      if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
      }
    }, [coords]);
    return null;
  }

  function MarkerCluster({ pontos }) {
    const map = useMap();
    useEffect(() => {
      const markers = L.markerClusterGroup();
      const filtered = categoriaSelecionada === 'all' 
        ? pontos 
        : pontos.filter(p => p.categoria === categoriaSelecionada);

      filtered.forEach(ponto => {
        const marker = L.marker(ponto.coords);
        marker.on('click', () => {
          onSelectPonto(ponto);
        });
        markers.addLayer(marker);
      });

      map.addLayer(markers);

      if (filtered.length > 0) {
        const bounds = L.latLngBounds(filtered.map(p => p.coords));
        map.flyToBounds(bounds, { padding: [50, 50], duration: 1.5 });
      }

      return () => map.removeLayer(markers);
    }, [pontos, categoriaSelecionada]);

    return null;
  }

  return (
    <MapContainer
      center={[-4.0, -39.0]}
      zoom={7}
      className="h-full w-full z-0"
      zoomControl={false}
      scrollWheelZoom={scrollZoom}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <MarkerCluster pontos={pontos} />
      <MapFlyTo coords={selectedCoords} />
    </MapContainer>
  );
};

export default MapComponent;