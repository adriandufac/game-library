import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';


interface GenreListProps {
   handleClick : (genre:Genre) => void
   selectedGenre: Genre | null
}
const GenreList = ({handleClick, selectedGenre} : GenreListProps) => {
  const { datas, error, isLoading } = useGenres();
  if (isLoading )return <Spinner size="lg"></Spinner>
  if (error) return null;
  return (
    <>
    <Heading marginBottom={3} fontSize="2xl">Genres</Heading>
      <List>
      {datas.map((genre) => (<ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}>
            </Image>
            <Button whiteSpace="normal" textAlign="left" fontWeight = {selectedGenre?.id === genre.id ? "bold" : "normal"} onClick={() => handleClick(genre)} variant="link" fontSize= 'large' >{genre.name}</Button> 
            </HStack>
      </ListItem>))}
      </List>
    </>
  )
}

export default GenreList