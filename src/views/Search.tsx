import React, { useState } from 'react';
import { TextInput } from '@mantine/core';

function Search() {
  const [value, setValue] = useState('');
  
  const handleSearch = () => {
    const test = `https://newsapi.org/v2/everything?q=${value}&apiKey=3fa13ca565844619bc31559ca018df2f`;
    
    // Perform the fetch request here
    fetch(test)
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data
        console.log(data);
        const data_2 = data.articles;
        console.log(data_2)
        {data_2.map((item)=>{
          console.log(item.author)
          console.log(item.content)
          
        })}
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  
  return (
    <>
      <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <button type='button' onClick={handleSearch}>Search</button>
    </>
  );
}

export default Search;
