const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export function uploads(file, public_id, overwrite, invalidate) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
      },
      (error, result) => {
        if (error) resolve(error);
        return result;
      }
    );
  });
}

function videoUpload(file, public_id, overwrite, invalidate) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        resource_type: "video",
        chunk_size: 50000,
        public_id,
        overwrite,
        invalidate,
      },
      (error, result) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  uploads,
  videoUpload,
};
