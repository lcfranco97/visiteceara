'use client'
import Image from "next/image";
import './mural.css';
import { motion } from "framer-motion";
    
import crato from './assets/cascata-crato.jpg';
import catedral from './assets/catedral-metropolitana.jpg';
import dragao from './assets/dragao-mar.jpg';
import morro from './assets/morro-branco.jpg';
import jeri from './assets/praia-jericoacoara.jpg';
import teatro from './assets/teatro-jose-alencar.jpg';
import bg from './assets/bg-sobre2.png';

import { FaUmbrellaBeach } from "react-icons/fa";
import { GiDesert } from "react-icons/gi";
import { LuMountainSnow } from "react-icons/lu";
import { RiMusicAiFill } from "react-icons/ri";
import { FaMasksTheater } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";

    
    
    
    
    
export default function Sobre() {


    return (

        <section id="sobre" className="relative w-full min-h-screen mt-[-10] lg:mt-[-20] bg-white overflow-hidden">

            {/* Imagem de fundo com Tailwind */}
            <div className="inset-0 z-20">
                <Image 
                    src={bg} 
                    alt="Objetos de viagem decorativos"
                    fill
                    className="object-contain object-top top-0 opacity-100 w-full"
                    priority
                />
            </div>



            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay:  0.2 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mt-30 px-2">

                <h2 className="font-semibold text-4xl sm:text-[50px] md:text-[60px] lg:text-[60px] mb-4 text-green-700">O Sol que aquece o Brasil</h2>
                <p>Conheça um pouco sobre o nosso <strong>Ceará</strong></p>

            </motion.div>

            <motion.div
             initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay:  0.2 }}
                viewport={{ once: true }} 
            className="relative z-20 text-black flex flex-col md:flex-col lg:flex-row max-w-7xl mx-auto  gap-10  px-4 sm:px-8 md:px-10 mb-20 mt-30">
                
                <div className="w-full md:w-2/2 lg:w-1/2">
                    <p className="font-medium text-lg md:text-xl lg:text-xl mb-10">O Ceará é um estado que respira luz, cultura e alegria. Localizado no Nordeste brasileiro, nosso território é banhado por mais de 570 km de litoral, onde praias de areias douradas e águas cristalinas se encontram com falésias impressionantes e coqueirais infinitos. Aqui, o sol brilha intensamente o ano todo, convidando você a descobrir paisagens que vão desde as dunas móveis de Jericoacoara até os cânions esculpidos pelo tempo no Sertão Central.</p>

                    <div className="mt-4 mb-4">
                        <strong className="text-2xl">Terra da diversidade</strong>
                        <p className="text-lg font-medium">No Ceará, cada região conta uma história diferente:</p>
                         <div className="flex gap-4 items-center">
                            <FaUmbrellaBeach className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-2 mt-6 font-medium"><strong>Litoral:</strong> Praias como Canoa Quebrada e Porto das Dunas oferecem aventura e descanso.</p>
                        </div>
                       
                        <div className="flex gap-4 items-center">
                            <LuMountainSnow className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-2 mt-6 font-medium"><strong>Serra:</strong> A frescura da Serra da Ibiapaba contrasta com o clima litorâneo.</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <GiDesert  className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-2 mt-6 font-medium"><strong>Sertão:</strong> A cultura vibrante e a resiliência do povo transformam o semiárido em poesia.</p>
                        </div>


                    </div>

                    <div className="mt-4 mb-4">
                        <strong className="text-2xl">Cultura que encanta</strong>
                        <p className="text-lg font-medium">Nossa identidade é marcada pelo:</p>

                        <div className="flex gap-4 items-center">
                            <RiMusicAiFill  className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-2 mt-6 font-medium"><strong>Forró pé-de-serra</strong> que ecoa nas noites de festa junina.</p>
                        </div>

                       <div className="flex gap-4 items-center">
                            <FaMasksTheater  className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-2 mt-6 font-medium"><strong>Teatro de humor</strong> com o talento dos cearenses.</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <TbMeat  className="size-14 sm:size-10 md:size-10 lg:size-10 bg-green-600 rounded-full" /> 
                            <p className="mb-4 mt-6 font-medium"><strong>Culinária</strong> que vai da carne de sol ao cajuíno.</p>
                        </div>

                    </div>

                      <div className="mt-6 mb-4">
                        <strong className="text-2xl">Venha Viver Essa Experiência</strong>
                        <p className="text-lg font-medium">O Ceará não é apenas um destino - é um estado de espírito. Deixe-se levar pela hospitalidade do nosso povo, pela riqueza da nossa natureza e pela energia contagiante que só quem nasce sob este sol sabe transmitir.</p>
                        <p className="mb-2 mt-4 font-medium italic">"Aqui, cada pôr do sol é um espetáculo, e cada amanhecer, um convite para novas aventuras."</p>
                       
                    </div>

                </div>

                <div className="mural mb-10 w-full md:w-2/2 lg:w-1/2 h-[610px]">
                    <div className="img-wrapper" style={{ gridArea: "a" }}>
                        <Image src={jeri} className="paisagem" alt="Foto de Jericoacoara"/>
                        <span className="caption font-medium">Jericoacoara</span>

                    </div>

                    <div className="img-wrapper" style={{ gridArea: "b" }}>
                        <Image src={morro} className="quadrada" alt="Morro Branco"/>
                        <span className="caption">Morro Branco</span>

                    </div>

                    <div className="img-wrapper" style={{ gridArea: "c" }}>
                        <Image src={teatro} className="quadrada" alt="Theatro Jose de Alencar"/>
                        <span className="caption">Theatro José de Alencar</span>

                    </div>

                    <div className="img-wrapper" style={{ gridArea: "d" }}>
                        <Image src={catedral} className="paisagem" alt="Catedral Metropolitana"/>
                        <span className="caption font-medium">Catedral Metropolitana</span>

                    </div>

                    <div className="img-wrapper" style={{ gridArea: "e" }}>
                        <Image src={dragao} className="quadrada" alt="Dragão do Mar"/>
                        <span className="caption">Dragão do Mar</span>

                    </div>

                    <div className="img-wrapper" style={{ gridArea: "f" }}>
                        <Image src={crato} className="quadrada" alt="Cascata do Crato"/>
                        <span className="caption">Cascata do Crato</span>

                    </div>

                </div>
               


            </motion.div>

        </section>
    )
}   
    
    