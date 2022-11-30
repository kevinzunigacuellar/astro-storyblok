import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: '9aAbQxfwe7F9SH5LvZXTNQtt',
    components: {
      page: 'storyblok/Page',
      blogpost: 'storyblok/BlogPost',
      preview_post: 'storyblok/Posts',
      about_section: 'storyblok/AboutSection'
    },
    apiOptions: {
      region: 'us'
    }
  }), tailwind()],
  output: "server",
  adapter: vercel()
});