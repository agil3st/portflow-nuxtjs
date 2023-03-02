export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin: "String generated from my auto-imported plugin!",
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora exercitationem eos assumenda quod nisi magni incidunt tenetur unde alias.",
    },
  };
});
