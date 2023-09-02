import TestimonialSlider from "../../components/TestimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants"


const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" exit="hidden" animate="show" className="h2 mb-8 xl:mb-0">Veja o que os clientes <span className="text-accent">falam.</span></motion.h2>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" exit="hidden" animate="show">
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  )
};

export default Testimonials;
