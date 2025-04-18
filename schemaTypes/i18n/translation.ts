import { defineField, defineType } from 'sanity';

export type TranslationEntry = {
  _key: string; // language code like 'en', 'fr', etc.
  _type: 'internationalizedArrayStringValue';
  value: string;
};

export const translation = defineType({
  name: 'translation',
  title: 'Translation',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'internationalizedArrayString',
    }),
  ],
  preview: {
    select: {
      value: 'value',
    },
    prepare({ value }: { value?: TranslationEntry[] }) {
      const enEntry = value?.find((entry) => entry._key === 'en');
      return {
        title: enEntry?.value || '(No English translation)',
      };
    },
  },
});
