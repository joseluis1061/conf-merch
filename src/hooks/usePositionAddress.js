import { useEffect, useState } from "react";
import axios from "axios";

const usePositionAdress = address =>{
  const [map, setMap] = useState({});
  const API_KEY = process.env.POSITION_STACK;
  const API = `http://api.positionstack.com/v1/forward?access_key=13702494fc1004ceef3f6b532d919b86&query=${address}`;
 
  useEffect(() => {
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
