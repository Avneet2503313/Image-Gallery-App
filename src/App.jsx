import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const[galleryPhoto,setGalleryPhoto]=useState([])
  useEffect(()=>{
    axios.get('https://picsum.photos/v2/list')
    .then(response=>setGalleryPhoto(response.data))
    .catch(error=>console.error(error));
  },[])
  return (
    <div className='bg-black'>
      <h1 className='text-orange-500 text-6xl font-semibold text-center py-10 italic overline'>Image <span className='text-white'>Gallery</span></h1>
      <div className="flex flex-wrap justify-center gap-x-10">
        {galleryPhoto.map((photo,index)=>(
          <div key={index} className='my-5 rounded-xl'>
            <img src={photo.download_url} alt={`By ${photo.author}`} width={'350'} className='rounded-xl border-2 border-orange-500'/>
            <p className='text-orange-500 text-center my-10'>Author: {photo.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
