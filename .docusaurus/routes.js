import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', 'a89'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', '989'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '37f'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', 'ec4'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', 'be8'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', 'ae3'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '1b7'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', 'cb2'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '700'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', '89b'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', '243'),
    exact: true
  },
  {
    path: '/docs/docs/tags',
    component: ComponentCreator('/docs/docs/tags', '0ac'),
    exact: true
  },
  {
    path: '/docs/docs/tags/account-configuration',
    component: ComponentCreator('/docs/docs/tags/account-configuration', 'a44'),
    exact: true
  },
  {
    path: '/docs/docs/tags/adobe-illustrator',
    component: ComponentCreator('/docs/docs/tags/adobe-illustrator', 'b58'),
    exact: true
  },
  {
    path: '/docs/docs/tags/adobe-in-design',
    component: ComponentCreator('/docs/docs/tags/adobe-in-design', '664'),
    exact: true
  },
  {
    path: '/docs/docs/tags/advertising',
    component: ComponentCreator('/docs/docs/tags/advertising', '53a'),
    exact: true
  },
  {
    path: '/docs/docs/tags/amazon',
    component: ComponentCreator('/docs/docs/tags/amazon', '028'),
    exact: true
  },
  {
    path: '/docs/docs/tags/api',
    component: ComponentCreator('/docs/docs/tags/api', 'db5'),
    exact: true
  },
  {
    path: '/docs/docs/tags/data-analytics',
    component: ComponentCreator('/docs/docs/tags/data-analytics', 'ae9'),
    exact: true
  },
  {
    path: '/docs/docs/tags/data-visualization',
    component: ComponentCreator('/docs/docs/tags/data-visualization', '8ec'),
    exact: true
  },
  {
    path: '/docs/docs/tags/facebook',
    component: ComponentCreator('/docs/docs/tags/facebook', 'd0e'),
    exact: true
  },
  {
    path: '/docs/docs/tags/git',
    component: ComponentCreator('/docs/docs/tags/git', 'b2f'),
    exact: true
  },
  {
    path: '/docs/docs/tags/github',
    component: ComponentCreator('/docs/docs/tags/github', 'f9f'),
    exact: true
  },
  {
    path: '/docs/docs/tags/github-account-configuration',
    component: ComponentCreator('/docs/docs/tags/github-account-configuration', 'f1f'),
    exact: true
  },
  {
    path: '/docs/docs/tags/google',
    component: ComponentCreator('/docs/docs/tags/google', '4bb'),
    exact: true
  },
  {
    path: '/docs/docs/tags/google-assistant-sdk',
    component: ComponentCreator('/docs/docs/tags/google-assistant-sdk', '66c'),
    exact: true
  },
  {
    path: '/docs/docs/tags/hbo',
    component: ComponentCreator('/docs/docs/tags/hbo', '2c6'),
    exact: true
  },
  {
    path: '/docs/docs/tags/infographic',
    component: ComponentCreator('/docs/docs/tags/infographic', 'afa'),
    exact: true
  },
  {
    path: '/docs/docs/tags/jenkins',
    component: ComponentCreator('/docs/docs/tags/jenkins', 'fc8'),
    exact: true
  },
  {
    path: '/docs/docs/tags/linux',
    component: ComponentCreator('/docs/docs/tags/linux', '907'),
    exact: true
  },
  {
    path: '/docs/docs/tags/raspberry-pi',
    component: ComponentCreator('/docs/docs/tags/raspberry-pi', '3cc'),
    exact: true
  },
  {
    path: '/docs/docs/tags/unix',
    component: ComponentCreator('/docs/docs/tags/unix', 'a08'),
    exact: true
  },
  {
    path: '/docs/docs/tags/vs-code',
    component: ComponentCreator('/docs/docs/tags/vs-code', '69c'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'f4d'),
    exact: true
  },
  {
    path: '/docs/my-markdown-page',
    component: ComponentCreator('/docs/my-markdown-page', '1f1'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '7d1'),
    routes: [
      {
        path: '/docs/docs/developer-docs/',
        component: ComponentCreator('/docs/docs/developer-docs/', '480'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/', '587'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/developer-account',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/developer-account', 'f40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/hardware-and-network',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/hardware-and-network', 'ab5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/install-sdk',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/install-sdk', '3de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/register-device',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/register-device', 'f97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/embed-google-assistant/run-sample-code',
        component: ComponentCreator('/docs/docs/developer-docs/embed-google-assistant/run-sample-code', '2d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/git/',
        component: ComponentCreator('/docs/docs/developer-docs/git/', '13d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/git/advanced-git',
        component: ComponentCreator('/docs/docs/developer-docs/git/advanced-git', '2ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/git/git-setup',
        component: ComponentCreator('/docs/docs/developer-docs/git/git-setup', 'd6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/git/gitlab',
        component: ComponentCreator('/docs/docs/developer-docs/git/gitlab', '30a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/developer-docs/git/master-git',
        component: ComponentCreator('/docs/docs/developer-docs/git/master-git', 'ee5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/intro',
        component: ComponentCreator('/docs/docs/intro', 'e37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/product/',
        component: ComponentCreator('/docs/docs/product/', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/product/2 Prime Day Strategies used by Top Performers in 2021',
        component: ComponentCreator('/docs/docs/product/2 Prime Day Strategies used by Top Performers in 2021', 'db1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/product/cross-category-ads',
        component: ComponentCreator('/docs/docs/product/cross-category-ads', '6c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/product/multichannel-investment',
        component: ComponentCreator('/docs/docs/product/multichannel-investment', '258'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/technical-specifications/',
        component: ComponentCreator('/docs/docs/technical-specifications/', 'a18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/technical-specifications/HBO-HDR_Spec',
        component: ComponentCreator('/docs/docs/technical-specifications/HBO-HDR_Spec', '734'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/technical-specifications/HBO-SDR_Spec',
        component: ComponentCreator('/docs/docs/technical-specifications/HBO-SDR_Spec', '3e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/technical-specifications/media-manifest-core',
        component: ComponentCreator('/docs/docs/technical-specifications/media-manifest-core', '2e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/visuals/',
        component: ComponentCreator('/docs/docs/visuals/', 'c2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/visuals/fb-business-model',
        component: ComponentCreator('/docs/docs/visuals/fb-business-model', '208'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs/visuals/small-kitchen-appliance',
        component: ComponentCreator('/docs/docs/visuals/small-kitchen-appliance', 'b35'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'a36'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
