import { useEffect, useState } from "react";
import axios from "axios";

const usePositionAdress = address =>{
  console.log(`ADDRESS => ${address}`);
  const [map, setMap] = useState({latitude: 0, longitude:0});
  const API_KEY = process.env.POSITION_STACK;
  const API = `http://api.positionstack.com/v1/forward?access_key=13702494fc1004ceef3f6b532d919b86&query=1600%20Pennsylvania%58Ave%20NW,%20Washington%20DC`;
  useEffect(() => {
    console.log('useEfect')
    fetchData()
  }, [])
  
  const fetchData = async () =>{
    const response = await axios(API);
    const location = {
      latitude : response.data.data[0].latitude,
      longitude: response.data.data[0].longitude
    }
    setMap(location)
  };

  return map
};

export default usePositionAdress;
