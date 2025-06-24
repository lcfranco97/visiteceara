'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { motion } from 'framer-motion';

import beachpark from './imgcarrossel/beach-park2.jpg';
import praias from './imgcarrossel/praias.jpg';
import cultura from './imgcarrossel/cultura.jpg';
import gastronomia from './imgcarrossel/gastronomia.jpg';
import castelao from './imgcarrossel/castelao.jpg';
import esporte from './imgcarrossel/natacao.jpg';
import lugaresmagicos from './imgcarrossel/lugares-magicos.jpg';
import lazer from './imgcarrossel/lazer.jpg';
import artesanato from './imgcarrossel/artesanato.jpeg';


export default function CarrosselCoisas() {

    const coisas = [
        {
            id: 1,
            image: beachpark ,
            description: 'Foto Beach Park',
            content: 'Aventura',

        },

        {
            id: 2,
            image: praias ,
            description: 'Praias do Ceará',
            content: 'Praias',

        },

        {
            id: 3,
            image: cultura ,
            description: 'Cultura do Ceará',
            content: 'Cultura',

        },

        {
            id: 4,
            image: gastronomia ,
            description: 'Culinária do Ceará',
            content: 'Culinária',

        },

        {
            id: 5,
            image: castelao,
            description: 'Esportes',
            content: 'Esportes'
        },

        {
            id: 6,
            image: esporte,
            description: 'Esportes ao ar livre',
            content: 'Ar livre'
        },

        {
            id: 7,
            image: lugaresmagicos,
            description: 'Lugares mágicos',
            content: 'Lugares mágicos'
        },

        {
            id: 8,
            image: lazer,
            description: 'Lazer no Ceará',
            content: 'Lazer'
        },

        {
            id: 9,
            image: artesanato,
            description: 'Artesanato cearense',
            content: 'Artesanato'
        },

    ];


    return (

        <section id='coisas' className='w-full h-[540px] sm:h-[700px] md:h-[800px] lg:h-[800px] bg-white'>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-center px-2 py-8 mb-10'>

                <h1 className="font-semibold text-4xl sm:text-[50px] md:text-[60px] lg:text-[60px] mb-4 text-green-700 mt-20">Coisas pra se fazer no Ceará</h1>
                <p className="text-black text-xl">Experiencie o <strong>melhor</strong> estado Nordestino</p>

            </motion.div>
            
            <Swiper className='w-auto md:w-[800px] lg:w-[1024px]' modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
                640: { slidesPerView: 3 },
                800: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
            }}
        >
            {coisas.map((coisa) => (
                <SwiperSlide key={coisa.id}>

                    <motion.div className="group rounded overflow-hidden shadow-mg px-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }} 
                        whileHover={{
                        scale: 1.,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <div className="relative rounded-lg overflow-hidden group">
                            <Image src={coisa.image}
                                alt={coisa.description}
                                width={300}
                                height={500}
                                priority
                                
                                className='w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-lg group-hover:opacity-80 transition duration-300'
                            />

                             <div className="absolute inset-0 bg-black/50" />

                            <p className="text-2xl absolute bottom-2 left-4 text-white font-semibold underline">
                                {coisa.content}
                            </p>

                        </div>
                    </motion.div>

                </SwiperSlide>

            ))}
        </Swiper>

        </section>    
    );
}