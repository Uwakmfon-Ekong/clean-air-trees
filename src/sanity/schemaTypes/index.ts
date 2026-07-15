import { galleryImage } from "./gallery";
import { video } from "./video";
import { project } from "./project";
import { partner } from "./partner";
import { siteSettings } from "./siteSettings";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, video, project, partner, siteSettings],
};