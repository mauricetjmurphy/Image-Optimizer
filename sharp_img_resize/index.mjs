import sharp from "sharp";
import fs from "fs";
import path from "path";

const sourceDirectory = "./images";
const targetDir = "./build/images";

fs.readdirSync(sourceDirectory).forEach((file) => {
  const extension = path.extname(file);
  const filename = path.basename(file, extension);

  sharp(`${sourceDirectory}/${file}`)
    .resize({ width: 320 })
    .toFile(`${targetDir}/${filename}-small${extension}`);

  sharp(`${sourceDirectory}/${file}`)
    .resize({ width: 640 })
    .toFile(`${targetDir}/${filename}-medium${extension}`);

  sharp(`${sourceDirectory}/${file}`)
    .resize({ width: 960 })
    .toFile(`${targetDir}/${filename}-large${extension}`);

  sharp(`${sourceDirectory}/${file}`)
    .resize({ width: 2000 })
    .toFile(`${targetDir}/${filename}-xl${extension}`);
});
