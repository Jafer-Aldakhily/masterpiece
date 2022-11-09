import React,{ useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import{Navbar,Feed,PinDetail,CreatePin,Search} from '../components'
export default function Pins({user}) {
  const {searchTerm, setSearchTerm} = useState('')
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user="user" />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/"  element={<Feed />} />
          <Route path="/category/:categoryId"  element={<Feed />} />
          <Route path="/pin-detail/:pinId"  element={<PinDetail user="Morad" />} />
          <Route path="/create-pin"  element={<CreatePin user="user" />} />
          <Route path="/search"  element={<Search searchTerm={searchTerm} setSearchTerm={searchTerm} />} />
        </Routes>
      </div>

    </div>
  )
}







// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import { client } from '../client';
// import { feedQuery, searchQuery } from '../utils/data';
// import MasonryLayout from './MasonryLayout';
// import Spinner from './Spinner';

// const Feed = () => {
//   const [pins, setPins] = useState();
//   const [loading, setLoading] = useState(false);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     if (categoryId) {
//       setLoading(true);
//       const query = searchQuery(categoryId);
//       client.fetch(query).then((data) => {
//         setPins(data);
//         setLoading(false);
//       });
//     } else {
//       setLoading(true);

//       client.fetch(feedQuery).then((data) => {
//         setPins(data);
//         setLoading(false);
//       });
//     }
//   }, [categoryId]);
//   const ideaName = categoryId || 'new';
//   if (loading) {
//     return (
//       <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
//     );
//   }
//   return (
//     <div>
//       {pins && (
//         <MasonryLayout pins={pins} />
//       )}
//     </div>
//   );
// };

// export default Feed;
