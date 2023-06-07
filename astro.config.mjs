import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import astroI18next from 'astro-i18next'
import netlify from '@astrojs/netlify/functions'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
    image(),
    astroI18next()
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-notoSans',
          h2: 'text-2xl font-bold font-notoSans',
          h3: 'text-xl font-bold font-notoSans',
          h4: 'text-lg font-bold font-notoSans',
          h5: 'font-bold font-notoSans',
          h5: 'font-bold font-notoSans',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500'
        }
      ]
    ]
  }
})
