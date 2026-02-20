import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'termDate',
    title: 'Term Dates',
    type: 'document',
    fields: [
        defineField({
            name: 'term',
            title: 'Term Name',
            type: 'string',
            description: 'e.g., Autumn Term 2024',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'dates',
            title: 'Term Dates',
            type: 'string',
            description: 'e.g., 4th Sept - 20th Dec',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'halfterm',
            title: 'Half Term Dates',
            type: 'string',
            description: 'e.g., 28th Oct - 1st Nov',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (e.g., 1 for Autumn, 2 for Spring)',
            initialValue: 1,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'term',
            subtitle: 'dates',
        },
    },
})
