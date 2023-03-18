// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const main = require('./website_config.json');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Samuel JOSET',
  tagline: 'Back-End Software Engineer',
  url: 'https://forgetheweb.eu/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'muceres', // Usually your GitHub org/user name.
  projectName: 'forgetheweb.eu', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/muceres/forgetheweb.eu',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 280}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogTitle: 'Blog | Samuel JOSET',
          blogDescription: 'programing, productivity and tech industry',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/muceres/forgetheweb.eu',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {

        logo: {
          alt: 'Forge the web logo',
          src: 'img/logo-navbar.png',
        },
        items: [
          {
             type: 'dropdown',
             label: 'Work',
             position: 'left',
             items: [
               {
                 label: 'Projects',
                to: 'projects'
               },
               {
                 label: 'Open source',
                to: 'oss'
               },
               {
                 label: 'Talks',
                to: 'talks'
               },
               {
                 type: 'doc',
                 docId: 'intro',
                 label: 'Notes',
               },
             ],
           },
          {
              type: 'dropdown',
              label: 'About',
              position: 'left',
              items: [
                {
                  label: 'Vision x Values',
                  to: 'vision-and-values'
                },
                {
                  label: 'Me',
                  to: 'me'
                },
                {
                  label: 'Recommanded books',
                  to: 'recommanded-books',
                },
              ],
            },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Contact',
            to: 'contact',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
            {
                title: ' ',
                items: [
                  {
                      html: `
                      <a class="footer__link-item" target="_blank" rel="noopener" href="maito:samuel@forgetheweb.eu">
                      <svg
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="envelope"
                        class="svg-inline--fa fa-envelope fa-w-16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox='0 0 512 512'>

                        <path fill='currentColor' d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>

                      </svg></a>`
                  },
                    {
                        html: `<a class="footer__link-item" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/${main.LINKEDIN_NAME}"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>`
                    },
                    {
                        html: `<a class="footer__link-item" target="_blank" rel="noopener" href="https://github.com/${main.GITHUB_USER}"><svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>`
                    },
                    {
                        html: `
                        <a class="footer__link-item" target="_blank" rel="noopener" href="https://drive.infomaniak.com/app/share/346565/65efd31a-bc2a-4e1f-bbb6-dae642a12691">
                        <svg
                          role="img"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="download"
                          class="svg-inline--fa fa-download fa-w-16"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox='0 0 512 512'>

                          <path fill='currentColor' d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/>


                        </svg></a>`
                    },

                ]
            }
        ],
        // copyright: `2018 - ${new Date().getFullYear()} •  Forge The Web`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // i18n: {
      //   defaultLocale: 'en',
      //   locales: ['en', 'fr'],
      //   localeConfigs: {
      //     en: { label: 'English' },
      //     fr: { label: 'Français' }
      //   }
      // }
    }),
};

module.exports = config;
