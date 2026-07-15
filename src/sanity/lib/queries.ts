import { groq } from "next-sanity";

export const galleryImagesQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    caption,
    "url": image.asset->url,
  }
`;

export const videoQuery = groq`
  *[_type == "siteVideo"][0] {
    title,
    description,
    "videoUrl": videoFile.asset->url,
    youtubeUrl,
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    tag,
    description,
    href,
    "image": image.asset->url,
  }
`;

export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc) {
    _id,
    name,
    description,
    url,
    "logo": logo.asset->url,
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    heroHeadline,
    heroSubheadline,
    treesPlanted,
    peoplereached,
    yearsOfImpact,
    testimonials,
  }
`;