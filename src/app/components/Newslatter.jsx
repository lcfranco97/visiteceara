

import Image from "next/image";

import fortal from './assets/bg-fortal.jpg';


export default function Newslatter() {

    return (
        <section className="relative w-full h-[480px]">

            <div className="relative w-full h-full">
                <Image src={fortal}
                    alt="Fortaleza"
                    fill
                    className="object-cover"
                    priority
                />   

                <div className="absolute inset-0 bg-black/50" />

            </div>

            <div className="absolute inset-0 z-10 text-white flex flex-col items-center justify-center text-center px-4">

                <div className="max-w-[70%]">

                    <h2 className="text-7xl sm:text-9xl md:text-9xl lg:text-[200px] test-font mb-8">CEARÁ</h2>
                    <p className="text-xl font-medium">Receba novas notícias do Ceará direto no e-mail.</p>

                    <form className="grid grid-cols-1 md:flex items-center justify-center gap-2 mt-6">
                        <input type="email" placeholder="email@email.com" className="rounded-3xl px-8 py-2 bg-white text-black border-gray-400" />
                        <button className="rounded-3xl py-2 px-6 bg-blue-600 text-white text-lg cursor-pointer hover:bg-green-600">Assinar</button>
                    </form>

                </div>

            </div>


        </section>
    );
}