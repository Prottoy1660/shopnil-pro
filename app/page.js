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
import { getAbout, getCertifications, getExperiences, getHero, getProjects, getSettings, getSkills, getTestimonials, getTrustedBy } from "@/sanity/lib/queries";

export async function generateMetadata() {
  const hero = await getHero();
  const about = await getAbout();
  
  return {
    title: hero?.typerStrings?.[0] ? `${hero.typerStrings[0]} - Shopnil Mahamud` : "Shopnil Mahamud",
    description: about?.description || "UX/UI Designer & Developer creating beautiful and functional digital experiences.",
  };
}

export default async function Home() {
  const projects = await getProjects();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const testimonials = await getTestimonials();
  const certifications = await getCertifications();
  const settings = await getSettings();
  const about = await getAbout();
  const hero = await getHero();
  const trustedBy = await getTrustedBy();

  return (
    <>
      <Header1 settings={settings} />
      <Hero hero={hero} />
      <TextAnim about={about} />
      <Portofolio projects={projects} />
      <About about={about} />
      <Experience experiences={experiences} />
      <Certification certifications={certifications} />
      <Skills skills={skills} />
      <Testimonials testimonials={testimonials} />
      <TrustedBy trustedBy={trustedBy} />
      <Contact settings={settings} />
      <Footer2 settings={settings} />
      <Copyright settings={settings} />
    </>
  );
}
