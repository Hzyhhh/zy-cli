import commander from "commander";
import create from "./cmds/create";
const appInfo = require("../package.json");

commander.version(appInfo.version).description(appInfo.name);

commander
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "pineapple");

commander
  .on("--peppers", () => {
    console.log("123123123");
  })
  .on("--help", () => {
    console.log("");
    console.log("Example call:");
    console.log("  $ custom-help --help");
  });

commander.command("init <projectName>").action(create);

commander.parse(process.argv);
