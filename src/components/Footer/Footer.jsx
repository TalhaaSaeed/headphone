import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Compnay Details Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam vero id, dicta maxime placeat quia.
              </p>
              <div>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhone />
                  +92 123 456 789
                </p>
                <p className="flex items-center gap-2 mt-2">
                  {""}
                  <FaMapLocation /> 123, Model Town, Lahore, Pakistan
                </p>
              </div>
            </motion.div>
            {/* Footer Link Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold"> Quick Links </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contack us</li>
                    <li>Privecy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contack us</li>
                    <li>Privecy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold"> Follow us </h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Method</p>
                <img src={Cards} alt="" className="w-[180]" />
              </div>
            </motion.div>
          </div>
          {/* Copyright Section */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
            &copy; 2024 Your Company. All rights reserved. || Developed by Talha
            Saeed
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
