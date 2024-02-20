import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlateforms, { Platform } from "../hooks/usePlatforms";

interface PlateformSelectorProps{
  handlePlatformSelection : (platform : Platform) => void
  selectedPlatform : Platform | null
}

const PlatformSelector = ({handlePlatformSelection, selectedPlatform}: PlateformSelectorProps) => {
  const { datas,error} = usePlateforms();
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform ? selectedPlatform.name : "Platforms"}</MenuButton>
        <MenuList>
          {datas.map(platform => <MenuItem  onClick={() =>handlePlatformSelection(platform)}  key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu> 
  )
} 

export default PlatformSelector