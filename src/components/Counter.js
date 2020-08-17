import React,{useState, useMemo} from 'react'

function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = ()=>{
    setCounterOne(counterOne + 1)
  }
   
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne])


  const incrementTwo = ()=>{
    setCounterTwo(counterTwo   + 1)
  }
  return (
    <div>
      <span>{isEven?'Even':'Odd'}</span>
      <button onClick={incrementOne}>Count one - {counterOne}</button>
  <button onClick={incrementTwo}>Count Two- {counterTwo}</button>
    </div>
  )
}

export default Counter
