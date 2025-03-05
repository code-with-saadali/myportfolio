"use client";
import { ServiceCard } from "./ServiceCard";
import { services } from "./constants";
import { SectionTitle } from "./SectionTitle";

export const ServicesSection = () => (
  <section
    className="py-32 px-[8%] max-2xl:px-10 max-lg:px-5 relative"
    data-section="1"
  >
    <SectionTitle title="Future-Ready Solutions" />
    <div className="grid lg:grid-cols-2 gap-24 pt-28">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </section>
);
