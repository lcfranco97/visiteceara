'use client'

import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import 'swiper/css'; 
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Hero() {

    const scrollTo = useSmoothScroll();

    const slides = [
        {id: 1, image: 'https://aem-all.accor.com/content/dam/brands/ibh/hubs/americas/latam/2024/2024-02/magazine-ibis/melhores-praias-de-fortaleza-2024-1.jpg', content: 'Fortaleza'},
        {id: 2, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ab/43/3d/praia-de-canoa-quebrada.jpg?w=1200&h=700&s=1', content: 'Canoa Quebrada'},
        {id: 3, image: 'https://www.umviajante.com.br/wp-content/uploads/2018/11/insano-beach-park-brinquedo.jpg', content: 'Beach Park'},
        {id: 4, image: 'https://deltarioparnaiba.com.br/wp-content/uploads/2023/10/3704180118_2bfb6685b3_c.jpg', content: 'Pedra Furada'},
    ];

    return (
        <div className="relative w-full h-[85vh]">
            <Swiper modules={[Autoplay]}
                autoplay={{ delay: 5000 }}
                loop
                slidesPerView={1}
                className="w-full h-full absolute inset-0 z-0"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full ">
                            <Image src={slide.image}
                                alt={slide.content}
                                fill
                                className="object-cover"
                                priority={slide.id === 1}
                            />

                            {/* Overlay escuro */}
                            <div className="absolute inset-0 bg-black/50" />
   


                        </div>
                    </SwiperSlide>
                ))}    
            </Swiper> 


            {/* Texto sobreposto */}
            <div className="absolute inset-0 text-white z-10 flex flex-col items-center justify-center text-center px-4">

                <div className="max-w-[70%]">
                    <h2 className="text-7xl sm:text-9xl md:text-9xl lg:text-[200px] test-font mb-8">CEARÁ</h2>
                    <h1 className="text-xl md:text-2xl mb-4 line-clamp-3">
                        <Typewriter options={{
                            strings: ["Visite o Ceará", "Viva o Ceará", "Descubra o Ceará", "Sinta o Ceará"],
                            autoStart: true,
                            loop: true,  
                            }}
                        />
                    </h1>

                    <button onClick={() => scrollTo('coisas')} className="mt-8 bg-blue-600 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-3xl transition-colors duration-400 cursor-pointer">
                        Explore Ceará
                    </button>    
                </div>        

            </div>     








        </div>
    );
        
    
}