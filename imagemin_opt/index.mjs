import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  const files = await imagemin(["./images/**.*"], {
    destination: "build/images",
    plugins: [imageminMozjpeg({ quality: 80 }), imageminPngquant()],
  });
  console.log(files);
})();
