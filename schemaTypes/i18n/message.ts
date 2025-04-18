import { defineField, defineType } from 'sanity';
import { TranslateIcon } from '@sanity/icons';

export const message = defineType({
  name: 'message',
  title: 'Translations',
  type: 'document',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description of the translation, e.g. where to find it on the website',
      type: 'string',
    }),
    defineField({
      name: 'key',
      title: 'System Key',
      description: 'Key used by the website to find the translation',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'internationalizedArrayString',
    }),
  ],
  preview: {
    select: {
      title: 'description',
      subtitle: 'value.en',
    },
  },
});
