"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
const fetchMyData = async () => {
    const res = await fetch("http://localhost:3000/api/apitest", {
      cache: 'force-cache', // Optional for explicit control
    });
    return await res.json();
  };
  
function Apitest() {
   // const [data , setData] = useState({})
    const { data, error } = useSWR('apitest', fetchMyData , {refreshInterval:16000});
    
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Apitest