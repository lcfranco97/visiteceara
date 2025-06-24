
import Image from "next/image";



import insta from './assets/insta1.png';
import insta2 from './assets/insta2.png';
import insta3 from './assets/insta3.png';
import insta4 from './assets/insta4.png';
import insta5 from './assets/insta5.png';
import insta6 from './assets/insta6.png';
import instagrid from './assets/instagramgrid.png';




import { motion } from "framer-motion";

export default function Insta() {

    return (
        <section id="galeria" className="w-full  flex flex-col justify-center items-center bg-gray-200 gap-8 mt-8">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} 
                className="">

                <h1 className="font-semibold text-4xl sm:text-[50px] md:text-[60px] lg:text-[60px] mb-4 text-green-700 mt-20 text-center">Insta Cliks</h1>
                <p className="text-black text-xl text-center">Explore.Compartilhe<strong>@visiteoceara</strong></p>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} 
                className="w-auto md:w-[800px] lg:w-[1024px] grid grid-cols-1 md:grid-cols-2 gap-2 py-2 px-2">

                <div className=" grid grid-cols-2 md:grid-cols-2 w-2/2 gap-2">
                    <Image src={insta}
                    alt="Comentário"
                    width={300}
                    height={600}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                /> 

                <Image src={insta2}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                />

                <Image src={insta3}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                />

                <Image src={insta4}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                />

                 <Image src={insta5}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                />

                 <Image src={insta6}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                />
                </div>

                <div className="w-2/2 flex items-center justify-center gap-2">
                     <Image src={instagrid}
                    alt="Comentário"
                    width={300}
                    height={450}
                    priority
                    className="w-[200px] md:w-[300px] lg:w-[400px] rounded-xl"
                />

                
                </div>               

            </motion.div>
        </section>
    );
}