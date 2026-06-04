import React from 'react'

export default async function DynamicBlogs({params}:{params:Promise<{id:string}>}) {
    const {id}=await params

    console.log(id)
  return (
    <div>DynamicBlogs {id}</div>
  )
}
