module.exports = {
  title: "加菲的网站",
  tagline: "小学生写的日记",
  url: "https://cat-blog.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "supercutcat", // Usually your GitHub org/user name.
  projectName: "cat-blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Cat Site",
      logo: {
        alt: "My Site sLogo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/supercutcat/cat-blog",
          label: "GitHub",
          position: "right",
          label: "加菲的Github",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "Docusaurus初步上手",
              to: "docs/",
            },
          ],
        },
        {
          title: "博客",
          items: [
            {
              label: "Docusaurus总结",
              to: "blog/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cat-blog Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/supercutcat/cat-blog/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/supercutcat/cat-blog/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
    plugins: [
      [
        '@docusaurus/plugin-pwa',
        {
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/static/img/logo.svg',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/static/manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#000',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: '/static/img/logo.svg',
            },
            {
              tagName: 'link',
              rel: 'mask-icon',
              href: 'static/img/logo.svg',
              color: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: '/static/img/logo.svg',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#000',
            },
          ],
        },
      ],
    ],
};
