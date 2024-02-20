import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const part1 = url.slice(0, index);
  const part2 = url.slice(index);
  return part1 + "crop/600/400/" + part2;
};

export default getCroppedImageUrl;
