// config.js
const config = {
  // 名称
  title: "Baib的数字花园",
  // 描述
  description: "技术分享和日常唠嗑",
  // 作者
  author: "Baib",
  // 标识
  logo: "https://cdn.jsdelivr.net/gh/baib-web/img/FaceHoldingBackTears-ezgif.com-webp-to-gif-converter.gif",
  //导航页
  navbarTitle: {
    logo: "https://cdn.jsdelivr.net/gh/baib-web/img/Blossom.png",
  },
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
    { href: "/🧭参照/目录", name: "目录" },
    { href: "https://bento.me/aipio", name: "我的卡片" },
    { href: "https://alist.youzhidanbairu.eu.org/", name: "所有资源" },
  ],
  //搜索引擎
  search: {
    provider: "kbar",
    kbarConfig: {
      defaultActions: [
        {
          id: "blog",
          name: "Blog",
          keywords: "content",
          perform: () => (window.location.pathname = "blog"),
        },
      ],
    },
  },
};

export default config;
