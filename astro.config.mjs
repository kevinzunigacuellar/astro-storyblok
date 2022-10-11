import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
      components: {
        page: 'storyblok/Page',
        blogpost: 'storyblok/BlogPost',
        preview_post: 'storyblok/Posts',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    tailwind(),
  ],
});
