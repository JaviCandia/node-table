const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "the base of the multiplication",
    type: "number",
  })
  .option("l", {
    alias: "list",
    default: false,
    describe: "show the multiplication as a list",
    type: "boolean",
  })
  .option("t", {
    alias: "to",
    default: 10,
    describe: "limit of the table",
    type: "number",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "base must be a number";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
