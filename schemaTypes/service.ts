import { defineField, defineType } from 'sanity';
import { RobotIcon } from '@sanity/icons';
import type { TranslationEntry } from './i18n/translation';

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'object',
  icon: RobotIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'translation',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'seoImage',
    }),
    defineField({
      name: 'points',
      title: 'Bullet points',
      type: 'array',
      of: [{ type: 'translation' }],
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
