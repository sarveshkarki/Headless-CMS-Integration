import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types/sections";
import { Phone } from "lucide-react";
import Image from "next/image";

type Props = {
  data: HeroSection;
};

const Hero = ({ data }: Props) => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                {data.header_pill}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {data.header_title}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {data.header_subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  {data.request_button}
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-4 w-4" /> {data.call_now}
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
              <Image
                src={`${data.header_image}`}
                alt="Electrician at work"
                width={800}
                height={600}
                className="aspect-[4/3] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
