import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import DishImages from './DishImages';
import biriyani from './Assets/biriyani.jpg';

export default function Home( ) {
  const [value, setValue] =  useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const indianFoodItems = [
    {
      foodName: 'Biryani',
      foodImage: biriyani,
      foodStars: 4.6,
      ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Tomatoes'],
      nutrients: { protein: '20g', carbs: '40g', fat: '15g' },
    },
    {
      foodName: 'Butter Chicken',
      foodImage: biriyani,
      foodStars: 4.8,
      ingredients: ['Chicken', 'Butter', 'Tomato Sauce', 'Cream', 'Ginger'],
      nutrients: { protein: '25g', carbs: '35g', fat: '18g' },
    },
    {
      foodName: 'Paneer Tikka',
      foodImage: biriyani,
      foodStars: 4.5,
      ingredients: ['Paneer', 'Yogurt', 'Spices', 'Capsicum', 'Lemon'],
      nutrients: { protein: '15g', carbs: '25g', fat: '12g' },
    },
    {
      foodName: 'Parotta',
      foodImage: biriyani,
      foodStars: 4.6,
      ingredients: ['Flour', 'Oil', 'Salt', 'Sugar', 'Water'],
      nutrients: { protein: '10g', carbs: '30g', fat: '8g' },
    },
    {
      foodName: 'Grill Chicken',
      foodImage: biriyani,
      foodStars: 4.8,
      ingredients: ['Chicken', 'Marinade', 'Vegetables', 'Soy Sauce', 'Honey'],
      nutrients: { protein: '22g', carbs: '15g', fat: '10g' },
    },
    {
      foodName: 'Paneer Manchurian',
      foodImage: biriyani,
      foodStars: 4.5,
      ingredients: ['Paneer', 'Vegetables', 'Sauce', 'Garlic', 'Cornflour'],
      nutrients: { protein: '18g', carbs: '20g', fat: '15g' },
    },
  ];

  const mexicanFoodItems = [
    {
      foodName: 'Tacos',
      foodImage: biriyani,
      foodStars: 4.2,
      ingredients: ['Tortillas', 'Beef', 'Cheese', 'Lettuce', 'Tomatoes'],
      nutrients: { protein: '15g', carbs: '30g', fat: '12g' },
    },
    {
      foodName: 'Guacamole',
      foodImage: biriyani,
      foodStars: 4.7,
      ingredients: ['Avocado', 'Tomato', 'Onion', 'Lime', 'Cilantro'],
      nutrients: { protein: '2g', carbs: '10g', fat: '8g' },
    },
    {
      foodName: 'Enchiladas',
      foodImage: biriyani,
      foodStars: 4.4,
      ingredients: ['Tortillas', 'Chicken', 'Sauce', 'Cheese', 'Black Beans'],
      nutrients: { protein: '18g', carbs: '25g', fat: '15g' },
    },
  ];

  const chineseFoodItems = [
    {
      foodName: 'Sweet and Sour Chicken',
      foodImage: biriyani,
      foodStars: 4.5,
      ingredients: ['Chicken', 'Pineapple', 'Bell Peppers', 'Soy Sauce', 'Vinegar'],
      nutrients: { protein: '18g', carbs: '25g', fat: '10g' },
    },
    {
      foodName: 'Dim Sum',
      foodImage: biriyani,
      foodStars: 4.6,
      ingredients: ['Dumplings', 'Soy Sauce', 'Ginger', 'Green Onions', 'Sesame Oil'],
      nutrients: { protein: '12g', carbs: '20g', fat: '8g' },
    },
    {
      foodName: 'Kung Pao Shrimp',
      foodImage: biriyani,
      foodStars: 4.3,
      ingredients: ['Shrimp', 'Vegetables', 'Spices', 'Peanuts', 'Soy Sauce'],
      nutrients: { protein: '20g', carbs: '15g', fat: '12g' },
    },
  ];
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered sx={{paddingTop:'10%' ,padding:'1%'}}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      {value === 0 && (
        <DishImages itemData={indianFoodItems}/>  
      )}
      {value === 1 && (
        <DishImages itemData={mexicanFoodItems}/>  

      )}
      {value === 2 && (
        <DishImages itemData={chineseFoodItems}/>  
      )}
    </Box>
  );
}