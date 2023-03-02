export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const showcases = [
    {
      id: 1,
      title: "The Decorated Ways",
      subtitle: "Dive into minimalism",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/12/500/500",
      imageXL: "https://picsum.photos/id/12/1200/640",
      date: "12 April 2022",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      subtitle:
        "Set indulgence inquietude discretion insensible bed why announcing.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/13/500/500",
      imageXL: "https://picsum.photos/id/13/1200/640",
      date: "8 February 2023",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      subtitle:
        "Set indulgence inquietude discretion insensible bed why announcing.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/17/500/500",
      imageXL: "https://picsum.photos/id/17/1200/640",
      date: "12 June 2021",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      subtitle:
        "Set indulgence inquietude discretion insensible bed why announcing.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/55/500/500",
      imageXL: "https://picsum.photos/id/55/1200/640",
      date: "22 April 2021",
    },
    {
      id: 5,
      title: "Lorem ipsum",
      subtitle:
        "Set indulgence inquietude discretion insensible bed why announcing.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/43/500/500",
      imageXL: "https://picsum.photos/id/43/1200/640",
      date: "31 July 2021",
    },
    {
      id: 6,
      title: "Lorem ipsum",
      subtitle:
        "Set indulgence inquietude discretion insensible bed why announcing.",
      content:
        "Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.",
      image: "https://picsum.photos/id/31/500/500",
      imageXL: "https://picsum.photos/id/31/1200/640",
      date: "28 December 2022",
    },
  ];
  // return `API showcases ${id}`;

  const showcase = showcases.find((item) => item.id == id);
  // console.log(showcase);
  return showcase;
  return `API showcases ${id}`;

  /* Example API usage */
  // const config = useRuntimeConfig();
  /* return $fetch(`${config.public.apiBase}/products/?populate=*`, {
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
  }); */
});
