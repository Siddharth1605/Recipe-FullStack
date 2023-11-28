import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import biriyani from './Assets/biriyani.jpg'
import './Styles/DishImage.css'


export default function DishImages({ itemData }) {
  return (
    <div style={{ overflow: 'visible', marginTop: '1%', marginLeft: '20%' }}>
    <ImageList sx={{  overflow: 'visible' }} cols={3} >
    {itemData.map((item) => (
      <ImageListItem key={item.foodName} style={{ marginBottom: '20px' , width: '60%', height: 'auto' }} >
      <img
              src={`${item.foodImage}`}
              alt={item.foodName}
              loading="lazy"
            />
            <p className='font-sans text-xl font-semibold text-slate-400 hover:text-sky-400 '>{item.foodName}</p>
            <h4 className='text-base'>Stars: {item.foodStars} </h4>
           
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
