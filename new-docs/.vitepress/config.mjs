import { defineConfigWithTheme } from 'vitepress'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  title: "WaceHub",
  description: "A VitePress Site",
  srcDir: 'src',
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Poopthon/wacehub' }
    ],

    logo: "docs/src/public/wacehublogo.png"
  }
})
