import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlateforms from "../hooks/usePlateforms";


const PlatformSelector = () => {
  const { datas,error} = usePlateforms();
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
          {datas.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu> 
  )
} 

export default PlatformSelector