import { client, sanityFetchOptions } from "./client";
import { groq } from "next-sanity";

export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      ...,
      "slug": slug.current,
      sections[]{
        ...,
        images[]{
          asset->
        }
      }
    }`,
    { slug },
    sanityFetchOptions
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]|order(allOrder asc){
      ...,
      "slug": slug.current,
    }`,
    {},
    sanityFetchOptions
  );
}

export async function getFeaturedProjects() {
  return client.fetch(
    groq`*[_type == "project" && showInAll == true]|order(allOrder asc)[0...4]{
      ...,
      "slug": slug.current,
    }`,
    {},
    sanityFetchOptions
  );
}

export async function getExperiences() {
  return client.fetch(
    groq`*[_type == "experience"]|order(order asc)`,
    {},
    sanityFetchOptions
  );
}

export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"]|order(order asc)`,
    {},
    sanityFetchOptions
  );
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skillSection"]|order(order asc)`,
    {},
    sanityFetchOptions
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]|order(order asc)`,
    {},
    sanityFetchOptions
  );
}

export async function getCertifications() {
  return client.fetch(
    groq`*[_type == "certification"]|order(order asc)`,
    {},
    sanityFetchOptions
  );
}

export async function getSettings() {
  return client.fetch(
    groq`*[_type == "settings"][0]`,
    {},
    sanityFetchOptions
  );
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"][0]`,
    {},
    sanityFetchOptions
  );
}

export async function getHero() {
  return client.fetch(
    groq`*[_type == "hero"][0]`,
    {},
    sanityFetchOptions
  );
}

export async function getTrustedBy() {
  return client.fetch(
    groq`*[_type == "trustedBy"][0]`,
    {},
    sanityFetchOptions
  );
}
