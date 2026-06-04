import React from 'react'

export default async function BlogPage({params}:{params:Promise<{id:string}>}) {

    const {id}=await params
    console.log(id)
  return (
    <div>BlogPage id : {id}</div>
  )
}
