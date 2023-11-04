import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    schema: {
        'image': {
          content: 'string',
          width: 'number',
          height: 'number',
        },
      },
});
