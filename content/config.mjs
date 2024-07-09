// config.js
const config = {
  // 名称
  title: "Baib的数字花园🌸",
  // 描述
  description: "技术分享和日常唠嗑",
  // 作者
  author: "Baib",
  // 标识
  //logo: "/images/logo.svg",
  // 域名
  domain: "https://flowershow.youzhidanbairu.eu.org",
  //公开编辑链接
  editLinkRoot:
    "https://github.com/baib-web/flowershow/tree/main",
  // 是否显示编辑链接
  showEditLink: 'true',
  // 是否显示目录
  showToc: 'false',
  // 是否显示侧边栏
  showSidebar: 'false',
  // 显示评论
  showComments: true,
  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
  //谷歌网站分析
  analytics: "G-K0MZ23W0K9",
  //导航栏链接
  navLinks: [
    { href: "/blog", name: "Blog" },
  ],
  search: {
    provider: "algolia",
    config: {
      appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
      apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
      indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
    },
  },
  //检索元素和社交预览
  nextSeo: {
    twitter: {
      handle: "@example",
      site: "https://flowershow.youzhidanbairu.eu.org",
      cardType: "https://3acf33aa.telegraph-image-bnz.pages.dev/file/fb476c599e3a965cd8a1c.png",
    },
  },
};

export default config;
