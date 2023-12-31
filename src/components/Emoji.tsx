import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "recommend", boxSize: "35px" },
    5: { src: thumbsUp, alt: "exeptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
