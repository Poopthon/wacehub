import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  description: 'Your home for everything Wace.',
  lang: "en-AU",
  title: "WaceHub",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    footer: {
      message: 'Built with ❤️ by the WaceHub team.',
      copyright: 'Copyright © 2025 WaceHub',
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Poopthon/wacehub' },
    ],

    editLink: {
      pattern: 'https://github.com/Poopthon/wacehub/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    nav: nav(),

    // sidebar: {
    //   '/introduction/': sidebarGuide(),
    // },
  }
})

function nav() {
  return [
    // { text: 'Introduction', link: '/introduction/', activeMatch: '/introduction/' },
    // { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    { text: "Team", link: "/team/", activeMatch: "/team/" }
  ];
}


// function sidebarGuide() {
//   return [
//     {
//       text: 'Introduction',
//       collapsible: true,
//       items: [
//         { text: 'What is this?', link: '/introduction/' },
//       ],
//     },
//   ]
// }
