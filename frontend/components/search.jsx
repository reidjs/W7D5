import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches }) => {
  return (
    <div> 
      <BenchMap />
      <BenchIndex benches={benches}/>
    </div>
  )
}

export default Search;