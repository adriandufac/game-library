import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

interface SearchInputProps {
 HandleSubmit : (value : string) => void
}
const SearchInput = ({HandleSubmit}: SearchInputProps) => {
  const inputField = useRef<HTMLInputElement>(null);
  return (
    <>
      <form  onSubmit={(event) => {
        event.preventDefault();
        if (inputField.current) {
          HandleSubmit(inputField.current.value)
        }
      }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input ref={inputField} borderRadius={20} placeholder='Search games...' variant="fille"></Input>
        </InputGroup>
      </form>
    </>
  )
}

export default SearchInput