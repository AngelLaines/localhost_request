import { useEffect, useState } from 'react'

function App() {
  const [data,setData] = useState('')
  useEffect(()=>{
    fetch('http://localhost:5000/').then(res=>res.json()).then(res=>{
      setData(res)
    })
  },[])

  return (
    <>
      {data.message}
    </>
  )
}

export default App
