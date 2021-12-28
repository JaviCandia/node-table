const fs = require("fs");
const colors = require('colors');

const createFile = async (base = 1, list = false, to = 10) => {
  try {
      let output = "";
      let toConsole = "";

    for (let i = 1; i <= to; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
      toConsole += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`.bold;
    }

    if (list) {
      console.log("=============================".cyan.inverse);
      console.log(`========== ${base} table ==========`.cyan.bold);
      console.log("=============================".cyan.inverse);
      console.log(toConsole);
    }

    fs.writeFileSync(`output/table-${base}.txt`, output);
    
    return `table-${base}.txt created in output folder`.green.inverse;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  // "createFile: createFile" es redundante, solo se deja una vez.
  createFile,
};
