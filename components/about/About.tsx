"use client";

import { AboutSection } from "@/types/sections";
import Image from "next/image";

type Props = {
  data: AboutSection;
};

export default function About({ data }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        {data.about_image && typeof data.about_image === "string" ? (
          <div>
            <Image
              width={800}
              height={600}
              src={data.about_image}
              alt={data.about_title}
              className="rounded-2xl shadow-lg"
            />
          </div>
        ) : null}

        {/* Right: Text */}
        <div>
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            {data.about_pill}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            {data.about_title}
          </h2>
          <p className="text-gray-700 mb-6">{data.about_paragraph}</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {data.learn_more}
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              {data.contact_us}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
