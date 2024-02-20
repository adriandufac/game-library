import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface SortSelectorProps {
    handleClick : (value : string) => void
    selectedOrder: string 
}
const SortSelector = ({handleClick,selectedOrder} : SortSelectorProps) => {

    const sortOrders = [
        {display : "Relevance", value :""},
        {display : "Date added", value : "-added"},
        {display : "Name", value : "name"},
        {display : "Release Date", value : "-released"},
        {display : "Popularity", value : "-metacritic"},
        {display : "Average Rating", value : "-rating"}
    ]
 
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{"Order By " + (sortOrders.find((order) => order.value === selectedOrder)?.display || "Relevance")}</MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem key={order.value} onClick={() =>handleClick(order.value)}> {order.display}</MenuItem>)}
            </MenuList>
        </Menu> 
      )
  
}

export default SortSelector