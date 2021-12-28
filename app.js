const { createFile } = require("./helpers/multiply");
const { argv } = require("./config/yargs");
const colors = require('colors');

console.clear();

console.log(argv);

createFile(argv.base, argv.list, argv.to)
  .then((fileName) => console.log(fileName), "created")
  .catch((err) => console.log(err));
