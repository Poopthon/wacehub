import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  description: 'Your home for everything Wace.',
  lang: "en-AU",

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    footer: {
      message: 'Built with ❤️ by the WaceHub team. Powered by VitePress and UnoCSS. A fork of SFXCode.',
      copyright: 'Copyright © 2024 WaceHub',
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Poopthon/wacehub' },
    ],

    editLink: {
      pattern: 'https://github.com/Poopthon/wacehub/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    nav: nav(),

    sidebar: {
      '/introduction/': sidebarGuide(),
    },

    blog: {
      title: 'WaceHub Blog',
      description: 'Tips, tricks, and updates from the WaceHub team.',
    },
  },

  title: 'WaceHub',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'Introduction', link: '/introduction/', activeMatch: '/introduction/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'The WACEHUB Team',
      items: [
        {
          text: 'Website developers',
          link: '/team/website-developers/', // Internal route
        },
        {
          text: 'Video creators',
          link: '/team/video-creators/', // Internal route
        },
      ],
    },
  ];
}


function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/introduction/' },
      ],
    },
    {
      text: 'Features',
      collapsible: true,
      items: [
        { text: 'UnoCSS', link: '/guide/features/unocss' },
      ],
    },
  ]
}
