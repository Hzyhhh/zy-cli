import commander from "commander";

commander.version("0.0.1").description("zy-cli");

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

commander.parse(process.argv);
