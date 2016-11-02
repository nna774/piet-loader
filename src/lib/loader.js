const Canvas = require('canvas');
const fs = require('fs');
const easyimg = require('easyimage');
const loaderCanvas = require('piet-loader-canvas');

const Image = Canvas.Image;

function loadImpl(image, info, codelSize) {
  const width = info.width / codelSize;
  const height = info.height / codelSize;
  if (height !== Math.floor(height)) {
    console.warn(`height ${height} is not integer; maybe codel config miss?(size ${codelSize})`);
  }
  if (width !== Math.floor(width)) {
    console.warn(`width ${width} is not integer; maybe codel config miss?(size ${codelSize})`);
  }
  const canvas = new Canvas(width * codelSize, height * codelSize);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(image, 0, 0);

  return loaderCanvas.load(ctx, codelSize);
}

function load(filename, codelSize) {
  return easyimg.info(filename).then((info) => {
    const data = fs.readFileSync(filename);
    const image = new Image();
    image.src = data;
    const p = new Promise((resolve) => resolve(loadImpl(image, info, codelSize)));
    return p;
  }, (err) => {
    console.log(err);
  });
}

module.exports = {
  load,
};
