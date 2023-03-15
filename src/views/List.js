import { useParams } from 'react-router-dom'
import PoStep1 from '../components/po/PoStep1'
import PoStep2 from '../components/po/PoStep2'
import PoStep3 from '../components/po/PoStep3'
// import { useState } from 'react'

const List = () => {
  const { step } = useParams()

  const renderSwitch = (nowStep) =>{
    switch (nowStep) {
      case "2":
        return <PoStep2 />
      case "3":
        return <PoStep3 />
      default:
        return <PoStep1 />
    }
  }

  return (
    <div className="bg-bg-dark w-full h-screen">
      { renderSwitch(step) }
    </div>
  )
}

export default List