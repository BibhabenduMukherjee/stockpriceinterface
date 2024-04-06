"use client"
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'
function LogoutPage({URL} : {URL : string}) {
    const r = useRouter()
   // console.log(URL);
    
  async function handleClick() {
    const res = await axios.get(`${URL}/api/signout`)
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
    localStorage.removeItem("user")
    r.push("/")
  }
  return (
    <div>

        <button className = "text-2xl" onClick={handleClick}>Log out</button>
    </div>
  )
}

export default LogoutPage