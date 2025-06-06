import React from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import {BsCheck2} from 'react-icons/bs';

//jsut using arrow function 
const DropDown = ({onSortByChange, sortBy, orderBy, onOrderByChange}) =>{
    return(
      <>
      <DropdownButton variant="info" title="Sort">
      <Dropdown.Item as="button" onClick={() => onSortByChange('firstName')}>
        First Name {sortBy === 'firstName' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => onSortByChange('lastName')}>
        Last Name {sortBy === 'lastName' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => onSortByChange('aptDate')}>
        AptDate {sortBy === 'aptDate' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Divider />

        <Dropdown.Item as="button" onClick={() => onOrderByChange('asc')}>
        Ascending {orderBy === 'asc' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => onOrderByChange('desc')}>
        Descending {orderBy === 'desc' && <BsCheck2 className="float-end" />}
      </Dropdown.Item>
    </DropdownButton>
      </> 
    )
}

const Search = ({onOrderByChange, query,onSortByChange, onQueryChange, sortBy, setSortBy, orderBy, setOrderBy}) => {
  return (
     <>
        <InputGroup className="mb-3">
             <FormControl placeholder="Search"
                onChange={event => onQueryChange(event.target.value)}
                  value={query}
               />
             <DropDown 
          sortBy={sortBy}
          onSortByChange={onSortByChange}
          orderBy={orderBy}
          onOrderByChange={onOrderByChange}
            />
        </InputGroup>
     </>
  ) 
}

export default Search