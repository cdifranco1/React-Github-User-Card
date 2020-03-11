import React from 'react';



const SearchForm = (props) =>
      <form onSubmit={props.onSubmit}>
        <input type="text" placeholder="...username" onChange={props.onChange} value={props.value}></input>
        <button type="submit">Search</button>
      </form>

export default SearchForm;