import { defineConfig } from 'astro/config';
import amplify from 'astro-aws-amplify';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: amplify()
});