import { defineField, defineType } from 'sanity';

export const seoImage = defineType({
  name: 'seoImage',
  title: 'SEO Image',
  type: 'object',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      description: 'Basic description of what is in the image. Important for SEO and accessiblity.',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Image',
      type: 'image',
    }),
  ],
});
