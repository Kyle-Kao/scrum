import { useState } from 'react'
import Reading from '../components/Reading'
import Loading from '../components/Loading'

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