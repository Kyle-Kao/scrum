import { useState, lazy } from 'react'
// import Reading from '../components/Reading'
// import Loading from '../components/Loading'
const Reading = lazy(() => import('../components/Reading'))
const Loading = lazy(() => import('../components/Loading'))

const Index = () =>{
  const [isLoading, setIsLoading] = useState(true)


  const commonData = {
    isLoading: isLoading,
    setIsLoading: setIsLoading
  }

  return (
    <>
      { isLoading? <Loading commonData={commonData}/> : <Reading/> }
    </>
  )
}

export default Index