import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken:
        import.meta.env.MODE === 'development'
          ? env.STORYBLOK_PREVIEW_TOKEN
          : env.STORYBLOK_PUBLIC_TOKEN,
      components: {
        page: 'storyblok/Page',
        blogpost: 'storyblok/BlogPost',
        preview_post: 'storyblok/Posts',
        about_section: 'storyblok/AboutSection',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    tailwind(),
  ],
});
