"use client"
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/fedemoguel?igsh=MXJ4cG9zOXhqaWpjeg==", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com/@fedemoguel?si=nbRx2WGhr3D-kd8i", label: "YouTube" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@fedemoguel?_t=8qPpXF1bOWU&_r=1", label: "TikTok" },
    { icon: FaWhatsapp, href: "https://wa.link/i36zae", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-negro text-white py-16 px-5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h5 className="text-5xl font-bold mb-4">MoguelGym</h5>
          <div className="w-24 h-1 bg-rojo mx-auto mb-4"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center space-x-8 mt-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-neutral-100 hover:text-white transition-colors duration-200 text-3xl relative"
              onHoverStart={() => setHoveredIcon(social.label)}
              onHoverEnd={() => setHoveredIcon(null)}
              whileHover={{ scale: 1.2 }}
              aria-label={social.label}
            >
              <social.icon />
              {hoveredIcon === social.label && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap"
                >
                  {social.label}
                </motion.span>
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} <Link href={'https://www.sds.com.ar/'} target='_blank' className='font-extrabold'>Skyward Digital Solutions</Link>. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}