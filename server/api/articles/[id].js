export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const articles = [
    {
      id: 1,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/33/500/500",
      imageXL: "https://picsum.photos/id/33/1024/500",
      seo: {
        keywords: "lorem1, ipsum, keyword, article, my project"
      },
    },
    {
      id: 2,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/88/500/500",
      imageXL: "https://picsum.photos/id/88/1024/500",
      seo: {
        keywords: "lorem2, ipsum, keyword, article, my project"
      },
    },
    {
      id: 3,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/42/500/500",
      imageXL: "https://picsum.photos/id/42/1024/500",
      seo: {
        keywords: "lorem3, ipsum, keyword, article, my project"
      },
    },
    {
      id: 4,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/33/500/500",
      imageXL: "https://picsum.photos/id/33/1024/500",
      seo: {
        keywords: "lorem4, ipsum, keyword, article, my project"
      },
    },
    {
      id: 5,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/14/500/500",
      imageXL: "https://picsum.photos/id/14/1024/500",
      seo: {
        keywords: "lorem5, ipsum, keyword, article, my project"
      },
    },
    {
      id: 6,
      title: "Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/84/500/500",
      imageXL: "https://picsum.photos/id/84/1024/500",
      seo: {
        keywords: "lorem6, ipsum, keyword, article, my project"
      },
    },
  ];

  const article = articles.find((item) => item.id == id);
  // console.log(showcase);
  return article;

  /* Example API usage */
  // const config = useRuntimeConfig();
  /* return $fetch(`${config.public.apiBase}/products/?populate=*`, {
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
  }); */
});
