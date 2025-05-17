import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServicesSection } from "@/types/sections";
import { Shield, Wrench, Zap } from "lucide-react";

type Props = {
  data: ServicesSection;
};

const iconMap = [
  <Wrench key="w" className="h-6 w-6 text-blue-700" />,
  <Zap key="z" className="h-6 w-6 text-yellow-700" />,
  <Shield key="s" className="h-6 w-6 text-green-700" />,
];

const bgMap = ["bg-blue-100", "bg-yellow-100", "bg-green-100"];

const Services = ({ data }: Props) => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
              {data.services_pill}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data.services_title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {data.services_subtitle}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {data.services_types?.map(
            (service: ServicesSection["services_types"][0], idx: number) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div
                    className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      bgMap[idx % bgMap.length]
                    }`}
                  >
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <CardTitle>{service.services_card_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.services_card_paragraph}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {data.services_more}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
