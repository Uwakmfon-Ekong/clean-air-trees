import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // HERO
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: "Main headline on the homepage e.g. 'Plant Trees. Save Lives.'",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      description: "Paragraph below the headline",
    }),

    // STATS
    defineField({
      name: "treesPlanted",
      title: "Trees Planted",
      type: "string",
      description: "e.g. 3 (shows as 3M+)",
    }),
    defineField({
      name: "peoplereached",
      title: "People Reached",
      type: "string",
      description: "e.g. 100 (shows as 100K+)",
    }),
    defineField({
      name: "yearsOfImpact",
      title: "Years of Impact",
      type: "string",
      description: "e.g. 20 (shows as 20+)",
    }),

    // TESTIMONIALS
    defineField({
      name: "testimonials",
      title: "Success Stories / Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text" }),
            defineField({ name: "name", title: "Name / Role", type: "string" }),
          ],
        },
      ],
    }),
  ],
});