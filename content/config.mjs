// config.js
const config = {
  // 名称
  title: "Baib的数字花园<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Face%20Holding%20Back%20Tears.webp",
  // 描述
  description: "技术分享和日常唠嗑",
  // 作者
  author: "Baib",
  // 标识
  logo: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Face%20Holding%20Back%20Tears.webp",
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
};

export default config;
