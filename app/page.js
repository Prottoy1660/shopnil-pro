import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import About from "@/components/common/About";
import Contact from "@/components/common/Contact";
import Experience from "@/components/homes/home-2/Experience";
import Experiences2 from "@/components/common/Experiences2";
import Hero from "@/components/homes/home-5/Hero";
import Portofolio from "@/components/common/Portfolio";
import Skills from "@/components/common/Skills";
import Testimonials from "@/components/common/Testimonials";
import TextAnim from "@/components/common/TextAnim";
import Certification from "@/components/common/Certification";
import TrustedBy from "@/components/common/TrustedBy";
import React from "react";

export const metadata = {
  title: "Shopnil Mahamud",
  description: "",
};

export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <TextAnim />
      <Portofolio />
      <About />
      <Experience />
      <Certification />
      <Skills/>
      <Testimonials />
      <TrustedBy />
      <Contact />
      <Footer2/>
      <Copyright />
    </>
  );
}
