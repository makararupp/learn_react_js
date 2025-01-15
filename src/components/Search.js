import React from 'react'
import { FormControl, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'


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

const Search = () => {
  return (
     <>
        <InputGroup className="mb-3">
             <FormControl placeholder='Search'/>
             <DropDown/>
        </InputGroup>
     </>
  )
}

export default Search