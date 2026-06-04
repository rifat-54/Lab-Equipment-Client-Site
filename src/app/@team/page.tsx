import React from 'react'
import Loading from './loading';

export default function TeamPage() {
    const loading=true;
    if(loading){
        return <Loading></Loading>
    }
  return (
    <div className="border-2 border-green-500 p-10">This is parallel route : Team</div>
  )
}
