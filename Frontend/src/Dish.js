import React from 'react'
import biriyani from './Assets/biriyani.jpg';
import './Styles/DishImage.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from './Assets/IndianChef1.jpg';


export default function Dish() {
    const food = {
        foodName: 'Kung Pao Shrimp Biriyani',
        foodAuthor: 'Ichurike',
        foodImage: biriyani,
        foodDescription: '"Shrimp is really good in this salad as well!"',
        foodStars: 4.3,
        ingredients: ['1 cucumber', '3 tomatoes', '1 handful fresh cilantro', '1 Tbsp. olive oil', '1/2 lime', 'salt', 'cracked pepper'],
        nutrients: { protein: '20g', carbs: '15g', fat: '12g' },
      }

  return (
    <div>

    <div class="md:container md:mx-auto "        style={{marginTop:'5%', width: '1000px', height: '500px'  }}> 
        <img src={biriyani} style={{height:'100%', width:'50%', left:'-10%' }} className='float-right'/>
        <p className='text-style' style={{paddingLeft:'40px', paddingTop:'40px'}}>{food.foodName}</p>
        <p className='text-name' style={{paddingLeft:'40px', paddingTop:'-10px'}}>{food.foodAuthor  }</p>
        <p className='text-reviews' style={{paddingLeft:'40px', paddingTop:'10px'}}>{food.foodStars  }</p>
        <p className='text-description' style={{paddingLeft:'40px', paddingTop:'30px'}}>{food.foodDescription  }</p>
    </div>

    <div className="border-t border-gray-300 my-10" style={{marginTop:'3%', marginLeft:'18%', width:'1000px'}}></div>

    <div className="md:container md:mx-auto" style={{ marginTop: '5%', width: '1000px', height: '500px', display: 'flex' }}>
    <img src={img1} style={{ height: '500px', width: '50%', paddingRight: '50px' }} className='float-left' />
    <h2 className='text-style' style={{marginLeft:'5%', paddingLeft:'20px', addingBottom:'20px'}}>Ingredients</h2>
    
    <ul style={{marginTop:'10%', marginLeft:'-48%',}}>
        {food.ingredients.map((item, index) => (
            <li key={index} className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{item}</span></li>
        ))}
    </ul>
</div>

    </div>  
  )
}
