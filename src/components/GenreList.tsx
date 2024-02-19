import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';


interface GenreListProps {
   handleClick : (genre:Genre) => void
}
const GenreList = ({handleClick} : GenreListProps) => {

  const { datas, error, isLoading } = useGenres();
  if (isLoading )return <Spinner size="lg"></Spinner>
  if (error) return null;
  return (
    <List>
    {datas.map((genre) => (<ListItem key={genre.id} paddingY="5px">
      <HStack>
        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}>
          </Image>
          <Button onClick={() => handleClick(genre)} variant="link" fontSize='large' >{genre.name}</Button> 
          </HStack>
    </ListItem>))}
    </List>
  )
}

export default GenreList