import { useEffect, useState } from 'react'

function App() {
  const [data,setData] = useState('')
  useEffect(()=>{
    fetch('https://localhost:44382/api/Printer').then(res=>res.json()).then(res=>{
      console.log(res);
      setData(res)
    })
  },[])

  return (
    <>
      {data[1]}
    </>
  )
}

export default App
