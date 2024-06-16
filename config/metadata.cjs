const {
  author,
  description,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: {
    $: "TDD+",
  },
  description: description,
  namespace: "https://5nYqnHvk.xyz/",
  version: version,
  author: author,
  source: repository.url,
  match: [
    "https://www.torrentdd.com/",
    "https://torrentdd.com/",
    "https://www.torrentdd.com/*",
    "https://torrentdd.com/*"
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
  ],
  grant: ["GM.xmlHttpRequest"],
  connect: ["httpbin.org"],
  "run-at": "document-end",
};
