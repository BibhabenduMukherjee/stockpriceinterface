"use client"
import React from 'react'

type Props = {}

function ES({}: Props) {
    async function handelClick(){
        try{

            await fetch("/api/email" , {method : "POST"})
        }catch(err){
            console.log(err);
            
        }

    }


  return (
    <div>
        

        <button onClick= {handelClick}>Send</button>
    </div>
  )
}

export default ES