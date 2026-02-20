import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'vfk19mn4', // found in studio/sanity.cli.js
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-02-20', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function to generate image URLs with Sanity's builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
