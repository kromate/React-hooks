import React, {useState, useEffect}from 'react'

function HookCounterOne() {
  
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(()=>{
    console.log('use Effect updating title')
    document.title = `You click ${count} times`
  }, [count])
  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>You have Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne
