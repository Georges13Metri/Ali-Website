import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex justify-center">
        <Link href="https://www.facebook.com/your-facebook-profile" passHref>
          <FaFacebook size={24} className="mx-2 cursor-pointer" />
        </Link>
        <Link href="https://www.twitter.com/your-twitter-profile" passHref>
          <FaTwitter size={24} className="mx-2 cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/your-instagram-profile" passHref>
          <FaInstagram size={24} className="mx-2 cursor-pointer" />
        </Link>
        <Link href="https://wa.me/your-whatsapp-number" passHref>
          <FaWhatsapp size={24} className="mx-2 cursor-pointer" />
        </Link>
      </div>
      <div className="text-center mt-4">
        <p>Coach: Aly Jomaa from Lebanon, living in Saida</p>
      </div>
      <div
        className="border-t border-gray-600 w-1/2 mx-auto
      mt-4 py-4 text-center flex items-center justify-center"
      >
        <p>Website Design by Georges Metri</p>
        <Link href="https://www.instagram.com/georgesmetri" passHref>
          <FaInstagram size={24} className="ml-4 mr-1 cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
