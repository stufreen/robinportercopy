import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,
  },
});

export const getCloudinaryImage = (publicId, width = undefined) => {
  const myImage = cld.image(publicId);
  myImage.quality(70).resize(fill().width(width));
  return myImage;
};
