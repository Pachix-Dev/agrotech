import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: "https://hfmexico.mx/agrotechmexico/",
  base: "/agrotechmexico",  
  packageOptions: {
    // Set type to module for ECMAScript module support
    type: 'module',
    knownEntrypoints: ['@astrojs/partytown'],
  },    
  integrations: [sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en",
        es: "es"
      }
    }
  }), tailwind(), astroI18next(), react(), partytown()]
});