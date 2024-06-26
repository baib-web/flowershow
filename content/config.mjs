// config.js
const config = {
  // 名称
  title: "Flowershow",
  // 描述
  description: "Publish your digital garden",
  // 作者
  author: "Flowershow",
  // 标识
  //logo: "/images/logo.svg",
  // 域名
  domain: "https://flowershow.youzhidanbairu.eu.org",
  //公开编辑链接
  editLinkRoot:
    "https://github.com/baib-web/flowershow/tree/main/content",
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
};

export default config;
