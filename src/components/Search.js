import React from 'react'
import { FormControl, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'

//jsut using arrow function 
const DropDown = () =>{
    return(
      <>
         <DropdownButton 
            variant="info"
            title="Dropdown">
            <Dropdown.Item href="#">Home</Dropdown.Item>
            <Dropdown.Item href="#">Contant</Dropdown.Item>
            <Dropdown.Item href="#">Service</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Abount Me</Dropdown.Item>
         </DropdownButton>
      </> 
    )
}

const Search = ({query, onQueryChange}) => {
  return (
     <>
        <InputGroup className="mb-3">
             <FormControl placeholder="Search"
                onChange={event => onQueryChange(event.target.value)}
                  value={query}
               />
             <DropDown />
        </InputGroup>
     </>
  ) 
}

export default Search