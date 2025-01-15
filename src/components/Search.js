import React from 'react'
import { FormControl, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'


const Search = () => {
  return (
     <>
        <InputGroup className="mb-3">
             <FormControl placeholder='Search'/>
            <DropdownButton 
                  variant="info"
                  title="Dropdown">
                  <Dropdown.Item href="#">Home</Dropdown.Item>
                  <Dropdown.Item href="#">Contant</Dropdown.Item>
                  <Dropdown.Item href="#">Service</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Abount Me</Dropdown.Item>
            </DropdownButton>

        </InputGroup>
     </>
  )
}

export default Search