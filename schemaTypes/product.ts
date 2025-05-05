import { defineField, defineType } from 'sanity';
import type { TranslationEntry } from './i18n/translation';
import { CaseIcon } from '@sanity/icons';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'translation',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'translation',
    }),
    defineField({
      name: 'image',
      title: 'Background image',
      type: 'seoImage',
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }: { name?: { value: TranslationEntry[] } }) {
      const enEntry = name?.value?.find((entry) => entry._key === 'en');

      return {
        title: enEntry?.value || '(No English translation)',
      };
    },
  },
});
