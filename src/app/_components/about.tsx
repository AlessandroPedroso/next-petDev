import Image from "next/image";
import aboutImage1 from "../../../public/about-1.png";
import aboutImage2 from "../../../public/about-2.png";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
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
              alt="Foto cachorro"
              fill
              priority
              quality={100}
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
