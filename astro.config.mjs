// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 주소 (아이디.github.io). 아이디가 바뀌면 여기만 고치면 됩니다.
export default defineConfig({
  site: 'https://makesme-fun.github.io',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
