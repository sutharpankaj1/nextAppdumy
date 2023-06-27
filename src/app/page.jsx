import React from 'react'

function Page({data}) {
  console.log(data)
  return (
    <div>
    {
      data.map(elem=>{
        return(
          <p key={elem.id}>{elem.title}</p>
        )
      })
    }
    </div>
  )
}



export async function getStaticProps(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await response.json()
    console.log(data)
    return {
        props:{
            data
        }
    }
}

export default Page