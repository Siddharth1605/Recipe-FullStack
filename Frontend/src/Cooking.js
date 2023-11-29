import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function Cooking() {
    useEffect( () => {
        const fetchData = async () =>
        {
            const options = {
                method: 'GET',
                url: 'https://youtube38.p.rapidapi.com/search/',
                params: {
                    q: 'chicken biriyani tamil',
                    h1: 'en',
                    g1: 'US'
                },
                headers: {
                    'X-RapidAPI-Key': ' ',
                    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                  }
            }
        try{
            const response = await axios.request(options);
            console.log(response.data.contents[0].video.videoId)
        }
        catch(error)
        {
            console.log(error)
        }

    };

    fetchData();
    }, [])
  return (
    <div>Cooking</div>
  )
}
