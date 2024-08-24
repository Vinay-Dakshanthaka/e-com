import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <Form className="d-flex w-100">
      <FormControl
        type="text"
        placeholder="Search products..."
        className="mr-2 flex-grow-1"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success mx-1" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
