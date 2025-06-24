'use client'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Newslatter from "./components/Newslatter";
import CarrosselCoisas from "./components/CarrosselCoisas";
import Comments from "./components/Comments";
import Insta from "./components/Insta";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

const MapSidebar = dynamic(() => import('./components/Map&Sidebar'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <Newslatter />
      <CarrosselCoisas />
      <MapSidebar />
      <Comments />
      <Insta />
      <Footer />
    </div>
  );
}
