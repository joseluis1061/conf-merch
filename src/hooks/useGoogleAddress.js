import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = async (api) => {
  const response = await axios(api);
  return response
}
const API_KEY = process.env.GOOGLE_POSITION
const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=$medellin&key=${API_KEY}`;

  useEffect( () => {
    const res = fetchData(API);
    console.log('res')
    console.log(res)
    setMap(res.data.results[0].geometry.location);
  }, []);


  return map;
};

export default useGoogleAddress;