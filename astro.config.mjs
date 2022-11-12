import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://blog.supercutcat.com',
  integrations: [mdx(), sitemap(), react(), image(), tailwind()]
})
