#!/usr/bin/env node
var program = require("commander");
program
  .version('1.1.1', "-v, --version")
  .command("check [checkname]")
  .alias("c")
  .description("yo yo check now")
  .option("-a, --name [moduleName]", "模块名称")
  .action((checkname, option) => {
    console.log("指令 install 后面跟的参数值 checkname: " + checkname);
    console.log(option);
    // 获得了参数，可以在这里做响应的业务处理
  })
  //自定义帮助信息
  .on("--help", function () {
    console.log("  下面我随便说两句:");
    console.log("");
    console.log("$ 人有多大胆，母猪多大产，i love xx");
    console.log("$ 广阔天地，大有所为，呱~");
  });
program.parse(process.argv);

console.log("来了老弟");

// import { version, command, parse } from "commander";

// import { version as _version } from "../package.json";

// version(_version); // 拿到 package.json 你定义的版本
// command("share <shell>") // 定义你的command
//   .alias("s") // 缩写

//   .description('Enter the "shell" you want to convert and include it in " "  ') // 描述

//   .option(
//     "-p, --path <path>",
//     "Enter you html path , default ./share_you_shell.html"
//   ) // option 字命令，可以无限多个

//   .on("--help", function () {
//     // --help  commander 有默认处理，一般这部分无事可做，你还想干啥？
//   });

// parse(process.argv);
