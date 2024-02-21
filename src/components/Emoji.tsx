import meh from "../assets/meh.webp"
import thumb from "../assets/thumbs-up.webp"
import bulls from "../assets/bulls-eye.webp"
import { Box, Image } from "@chakra-ui/react"

interface EmojiProps {
    rating : number
}

const Emoji = ({rating} : EmojiProps) => {
    const emoji = rating >= 5 ? bulls : rating >= 3 ? thumb : meh
  return (
    
    <Image marginTop={1} boxSize={ emoji === bulls ? "35px" : "25px"} src={emoji}></Image>
  )
}

export default Emoji