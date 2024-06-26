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
  // 是否显示编辑链接
  showEditLink: 'false',
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
    };
  };
};

export default config;
