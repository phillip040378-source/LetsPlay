import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'News & Activities',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            description: 'Is this a past event or an upcoming event?',
            options: {
                list: [
                    { title: 'Previous Activity', value: 'previous' },
                    { title: 'Coming Soon', value: 'upcoming' },
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
            initialValue: 'previous'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'News', value: 'news' },
                    { title: 'Holiday Club', value: 'holiday' },
                    { title: 'After School', value: 'after-school' },
                    { title: 'Breakfast Club', value: 'breakfast' },
                ],
            },
            validation: (Rule) => Rule.required(),
            initialValue: 'news'
        }),
        defineField({
            name: 'excerpt',
            title: 'Short Summary',
            type: 'text',
            description: 'A short description to show on the news card.',
            validation: (Rule) => Rule.max(200)
        }),
        defineField({
            name: 'body',
            title: 'Body content',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            subtitle: 'category'
        },
    },
})
