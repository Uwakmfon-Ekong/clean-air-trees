import { defineField, defineType } from "sanity";

export const video = defineType({
  name: "siteVideo",
  title: "Educational Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL (alternative to file upload)",
      type: "url",
    }),
  ],
});