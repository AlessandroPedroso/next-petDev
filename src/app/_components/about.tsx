import Image from "next/image";
import aboutImage1 from "../../../public/about-1.png";
import aboutImage2 from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutImage1}
                alt="Foto cachorro"
                fill
                priority
                className="object-cover hover:scale-110 duration-300"
                quality={100}
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={aboutImage2}
                alt="Foto gato"
                fill
                priority
                quality={100}
              />
            </div>
          </div>

          <div
            className="space-y-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Until one has loved an animal, a part of one's soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                Contato via whatsApp
              </a>
              <a
                href="#"
                className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Contato via whatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
