import React,{useContext} from 'react'
import CompC from './CompC';
import {userContext, ChannelContext} from '../App'

function CompB() {
  const user = useContext(userContext)
  const Channel =useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
      <CompC/>
    </div>
  )
}

export default CompB
