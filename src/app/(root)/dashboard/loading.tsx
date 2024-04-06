"use client"
import React from 'react'
import { Skeleton } from '../../components/ui/skeleton'
function loading() {
  return (
    <div className = "max-w-7xl h-screen items-center space-y-12 flex flex-col mx-auto ">
      <div>
        <Skeleton className= "bg-slate-400/30 w-[920px] h-[110px]"/>
      </div>
      <div>
        <Skeleton className= "bg-slate-400/20 w-[930px] h-[510px]"/>
      </div>
      <div className = "mt-2">
        <Skeleton className= "bg-slate-400/30 w-[700px] h-[310px]"/>
      </div>
    </div>
  )
}

export default loading