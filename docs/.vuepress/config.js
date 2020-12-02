const unescapeAll = require("markdown-it/lib/common/utils").unescapeAll;

module.exports = {
  title: "HTML 笔记",
  base: "/",
  head: [
    ["script", { src: "/vue.min.js" }],
    ["script", { src: "/html.min.js" }],
  ],
  themeConfig: {
    sidebar: ["", "kinds", "meta", "text"],
  },
  markdown: {
    plugins: [
      (md) => {
        console.log({ md });
        const defaultFenceRule = md.renderer.rules.fence;
        const fence = function (tokens, idx, options, env, slf, ...args) {
          // console.log({tokens,idx,options,env,slf,args})
          const token = tokens[idx],
            info = token.info ? unescapeAll(token.info).trim() : "";
          if (info === "html") {
            // return `<div class="code-block inside-gutter"><div>${token.content}</div></div>`;
            return `<html-playground areas="html" control-btns="format">${token.content}</html-playground>`;
          }
          return defaultFenceRule(tokens, idx, options, env, slf);
        };
        md.renderer.rules.fence = fence;
      },
    ],
  },
};
