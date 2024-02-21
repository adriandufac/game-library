import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface GameHeadingProps {
  query : GameQuery
}
const GameHeading = ({query} : GameHeadingProps) => {
  const heading = (query.platform ?  (query.platform?.name + " "): "") + (query.genre ? query.genre.name + " ": "") + "Games";
  const betterHeading = `${query.platform?.name || ''} ${query.genre?.name ||''} Games`;
  return (
    <Heading as="h1">{betterHeading}</Heading>
  )
}

export default GameHeading