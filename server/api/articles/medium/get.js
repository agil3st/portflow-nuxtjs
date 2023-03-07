export default defineEventHandler(async (event) => {
  const articles = [
    {
      id: 1,
      title: "Medium Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/77/500/500",
    },
    {
      id: 2,
      title: "Other Medium Lorem ipsum",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/120/500/500",
    },
    {
      id: 3,
      title: "Lorem ipsum medium title",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/12/500/500",
    },
    {
      id: 4,
      title:
        "Lorem ipsum medium title inquietude discretion insensible bed why",
      shortContent:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/31/500/500",
    },
  ];

  return articles;

  /* Example API usage */
  // const config = useRuntimeConfig();
  /* return $fetch(`${config.public.apiBase}/products/?populate=*`, {
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
  }); */
});
