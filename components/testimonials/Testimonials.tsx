import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialsSection } from "@/types/sections";
import Image from "next/image";

type Props = {
  data: TestimonialsSection;
};

const Testimonials = ({ data }: Props) => {
  return (
    <>
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                {data.testimonials_pills}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {data.testimonials_title}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {data.testimonials_subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
            {data.testimonial_info?.map((testimonial: any, idx: number) => (
              <Card key={idx} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={
                          testimonial.image ||
                          "/placeholder.svg?height=40&width=40"
                        }
                        alt={testimonial.name || "Client"}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
