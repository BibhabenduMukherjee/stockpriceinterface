"use client"

import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import React from 'react'

function page() {
 const sendFirstTrainingSuccess = useMutation(api.emails.sendFirstTrainingSuccess)

 
  return (
    <div>

      <button onClick={()=>{sendFirstTrainingSuccess({userId : "12463"})}}>Click</button>

    </div>
  )
}

export default page