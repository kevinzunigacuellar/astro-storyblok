import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: '9aAbQxfwe7F9SH5LvZXTNQtt', // prodkey: Th4BbSEt49KDfg5mFIsylwtt
      components: {
        page: 'storyblok/Page',
        blogpost: 'storyblok/BlogPost',
        preview_post: 'storyblok/Post',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    tailwind(),
  ],
});
