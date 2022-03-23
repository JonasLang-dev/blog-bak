const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "加菲的网站",
  tagline: "小学生的日记",
  url: "https://cat.supercatcut.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Personal", // Usually your GitHub org/user name.
  projectName: "cat blog", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Cat Site",
      logo: {
        alt: "Cat Logo",
        src: "img/R-C.jfif",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/supercutcat/cat-blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习文档",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社交",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/supercutcat",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/supercutcat/cat-blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 超级可爱加菲 Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/supercutcat/cat-blog/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/supercutcat/cat-blog/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/pwa/manifest-icon-512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#20232a",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#20232a",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/pwa/manifest-icon-512.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/pwa/manifest-icon-512.png",
            color: "#06bcee",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            href: "/img/pwa/manifest-icon-512.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#20232a",
          },
        ],
      },
    ],
  ],
};
