/* Process Image - Richh - 20230315
 *
 * This script will take the logo variations in the 'src' folder and output various size and file types.
 *
 * Usage:
 *    theres an npm script in package.json, run"
 *      npm run logo-varations
 *
 *    to run script directly:
 *
 *      cd into this directory
 *        `cd utils/generate-logo-variations/`
 *
 *      run the script
 *        `node generate-logo-variations.js`
 *
 */

// Imports /////////////////////////////////////////////////////////////////////
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Settings ////////////////////////////////////////////////////////////////////
const DEBUG = true;
const scriptPath = ".";
const sources = [
  `${scriptPath}/src/logo-black.svg`,
  `${scriptPath}/src/logo-white.svg`,
];
const outputPath = `${scriptPath}/../../public/images/logo-variations`;
const variations = [
  {
    outputExtention: "jpg",
    width: 1000,
  },
  {
    outputExtention: "jpg",
    width: 500,
  },
  {
    outputExtention: "png",
    width: 1000,
  },
  {
    outputExtention: "png",
    width: 500,
  },
];

// Tasks ///////////////////////////////////////////////////////////////////////
log(`
----------------------
CREATE LOGO VARIATIONS
----------------------
`);

// 1 //////////////////////////////////
log("1. Clean output folder.");

if (!fs.existsSync(outputPath)) {
  log(`\n    x output folder not found. ${outputPath}`);
  log(`\n    CANNOT CONTINUE!\n\n`);
  process.exit(1);
}

fs.readdir(outputPath, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlinkSync(path.join(outputPath, file), (err) => {
      if (err) throw err;
    });
  }
});
log("\n    √ done.\n");

// 2 //////////////////////////////////
log("2. Create image variations.");

// loop through source images
sources.forEach((sourceImage) => {
  const file = path.basename(sourceImage);
  const filename = path.parse(file).name;
  const bgColor = filename.includes("black") ? "white" : "black";

  // copy svg version to output folder
  fs.copyFile(sourceImage, `${outputPath}/${filename}.svg`, (err) => {
    log(`\n    source image: ${sourceImage}.`);
    if (err) {
      log(`    x could not copy ${sourceImage} to the output directory`);
    } else {
      log(`    √ copied ${sourceImage}`);
    }
  });

  // create each variation
  variations.forEach(({ outputExtention, width }, i) => {
    const output = `${outputPath}/${filename}-${width}px.${outputExtention}`;

    // for jpgs
    if (outputExtention == "jpg") {
      sharp(sourceImage, { density: 300 })
        .flatten({ background: bgColor })
        .resize(width)
        .jpeg({ quality: 100 })
        .toFile(output, (err, info) => {
          sharpToFileCallback(err, info, output);
        });
    }

    // for pngs
    if (outputExtention == "png") {
      sharp(sourceImage, { density: 300 })
        .resize(width)
        .toFile(output, (err, info) => {
          sharpToFileCallback(err, info, output);
        });
    }
  });
});

// Functions ///////////////////////////////////////////////////////////////////
function log(x) {
  if (DEBUG) console.log(x);
}

function sharpToFileCallback(err = null, info = null, output = "") {
  if (err) log(`    x error creating: `, err);
  if (info) log(`    √ success creating: ${output}`);
}
