import Link from "next/link";


import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiWhatsappLine } from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.facebook.com/profile.php?id=100005102927302'} className="hover:text-accent transition-all duration-300" >
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/bruno.wand7/'} className="hover:text-accent transition-all duration-300" >
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/bruno-wanderson'} className="hover:text-accent transition-all duration-300" >
        <RiLinkedinLine />
      </Link>
      <Link href={'https://api.whatsapp.com/send?phone=5555899944179&text=Ol%C3%A1.'} className="hover:text-accent transition-all duration-300" >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
