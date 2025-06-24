

import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

import { motion } from "framer-motion";

export default function Footer() {

    const scrollTo = useSmoothScroll();

    return (
        <footer className="grid grid-cols-1 px-10 gap-10 md:flex justify-around items-center bg-gray-200 py-30">

            <div>
                <Link href={'/'}>
                    <h1 className="text-2xl font-semibold text-gray-600">VISITE CEARÁ</h1>
                </Link>
                
            </div>

            <div className="flex gap-16">

                <ul className="list-disc text-lg text-green-600 pl-5 space-y-2">
                    <li><a href="/" className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer">Home</a></li>
                    <li><a onClick={() => scrollTo('sobre')} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer">Sobre</a></li>
                </ul>

                <ul className="list-disc text-lg text-green-600 pl-5 space-y-2">
                    <li><a onClick={() => scrollTo('coisas')} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer">Coisas a fazer</a></li>
                    <li><a onClick={() => scrollTo('galeria')} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer">Galeria</a></li>
                </ul>

            </div>

            <div className="">
                <motion.div className="flex gap-4">

                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <FaInstagram size={28}  className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"/>
                    </motion.div>
                    
                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <FaFacebookSquare size={28}  className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"/>
                    </motion.div>
                    
                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <FaTwitter size={28}  className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"/>
                    </motion.div>

                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <FaLinkedinIn size={28}  className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"/>
                    </motion.div>


                </motion.div>
                <p className="text-sm mt-4 text-gray-500">Desenvolvido por Lucas Franco &copy;</p>
            </div>

        </footer>
    );
}



