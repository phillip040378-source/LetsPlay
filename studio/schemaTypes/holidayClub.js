import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'holidayClub',
    title: 'Holiday Clubs',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Club Name',
            type: 'string',
            description: 'e.g., October Half Term',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'dates',
            title: 'Club Dates',
            type: 'string',
            description: 'e.g., 28th Oct - 1st Nov 2024',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Booking Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Open for Booking', value: 'Open for Booking' },
                    { title: 'Coming Soon', value: 'Coming Soon' },
                    { title: 'Completed', value: 'Completed' },
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
            initialValue: 'Open for Booking'
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (e.g., 1 for Oct, 2 for Feb)',
            initialValue: 1,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'status',
        },
    },
})
