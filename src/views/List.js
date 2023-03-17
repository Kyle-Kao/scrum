import { useParams } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
import { useState, lazy, Suspense } from 'react'

const PoStep1 = lazy(() => import('../components/po/PoStep1'))
const PoStep2 = lazy(() => import('../components/po/PoStep2'))
const PoStep3 = lazy(() => import('../components/po/PoStep3'))
const PoStep4 = lazy(() => import('../components/po/PoStep4'))

const List = () => {
  const { step } = useParams()

  const renderSwitch = (nowStep) =>{
    switch (nowStep) {
      case "2":
        return <PoStep2 />
      case "3":
        return <PoStep3 />
      case "4":
        return <PoStep4 />
      default:
        return <PoStep1 />
    }
  }

  return (
    <div className="bg-bg-dark w-full h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        { renderSwitch(step) }
      </Suspense>
    </div>
  )
}

export default List