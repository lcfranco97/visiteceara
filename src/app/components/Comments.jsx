
import Image from "next/image";


import comentario1 from './assets/comentario1.png';
import cmt2 from './assets/cmt-atualizado.png';
import cmt3 from './assets/cmt3.png';
import cmt4 from './assets/cmt4.png';
import cmt5 from './assets/cmt5.png';
import cmt6 from './assets/cmt6.png';



import { motion } from "framer-motion";

export default function Comments() {

    return (
        <section className="w-full  flex flex-col justify-center items-center bg-gray-50 gap-8 mt-8">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} 
                className="">

                <h1 className="font-semibold text-4xl sm:text-[50px] md:text-[60px] lg:text-[60px] mb-4 text-green-700 mt-20">Reviews</h1>
                <p className="text-black text-xl"><strong>Ceará</strong> na boca do povo...</p>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} 
                className="w-auto md:w-[800px] lg:w-[1024px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-green-800 rounded-xl py-2 px-2">

                <Image src={comentario1}
                    alt="Comentário"
                    width={300}
                    height={600}
                    priority
                    className="w-[400px]"
                /> 

                <Image src={cmt2}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[400px] bg-green-800 rounded-lg"
                />

                <Image src={cmt3}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[400px]"
                />

                <Image src={cmt4}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[400px]"
                />

                <Image src={cmt5}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[400px]"
                />

                <Image src={cmt6}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[400px]"
                />                

            </motion.div>
        </section>
    );
}