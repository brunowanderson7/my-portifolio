//conponents
import Circles from "../../components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" exit="hidden" animate="show" className="h2 text-center mb-12">
            Contate <span className="text-accent">me.</span>
          </motion.h2>

          <motion.form variants={fadeIn('up', 0.4)} initial="hidden" exit="hidden" animate="show" className="flex flex-1 flex-col gap-6 w-full mx-auto">

            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Nome" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Assunto" className="input" />
            <textarea placeholder="Mensagem" className="textarea"></textarea>
            <a href={'https://api.whatsapp.com/send?phone=5555899944179&text=Ol%C3%A1.'} className="btn rounded-full border-white/50 border max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Enviar</span>
              <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </a>

          </motion.form>

        </div>
      </div>
    </div>
  )
};

export default Contact;
