import { ncp } from "ncp";
import path from "path";

/**
 * create
 * 用法： zy create
 * 用于初始化项目
 * 原理是将文件夹保存在cli中, 再复制整个目录到目标文件夹
 * 近期目标：
 * 可以用命令行 zy create xxx 创建项目到目标文件目录
 * 远期目标：
 * 1. 可根据项目名配置的package.json
 * 2. 可远程clone git 模板地址
 */

export default (projectName: string) => {
  const templateUrl = path.resolve("./template/");
  const targetUrl = process.cwd() + `/${projectName}`;
  console.log(templateUrl, targetUrl);

  ncp(templateUrl, targetUrl, (err) => {
    if (!err) {
      console.log("done!");
    } else {
      console.log(err);
    }
  });
};
