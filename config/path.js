const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => {
  return path.resolve(appDirectory, relativePath);
};
// 运行时会导致过不了taro配置类型检查
const src = resolveApp("src");
const pages = resolveApp("src/pages");
const models = resolveApp("src/models");
const h5Html = resolveApp("src/index.html");
// 分包
const packageLive = resolveApp("src/packageLive");
console.log(packageLive);
console.log(src);
module.exports = {
  src,
  h5Html,
  pages,
  models,
  packageLive,
};
