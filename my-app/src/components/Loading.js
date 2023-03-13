import LoadingImg from '../images/loading.gif'
import { useState, useEffect } from 'react'

const Loading = ({ commonData }) =>{
  const [progress, setProgress] = useState(0)
  const { setIsLoading } = commonData

  useEffect(()=>{
    const add = setInterval(() => {
      setProgress((prev)=>{return prev + 1})
    }, 50);
    if(progress === 100){
      clearInterval(add)
      setIsLoading(false)
    }
    
    return () =>{
      clearInterval(add)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[progress])

  return (
    <div className="loading-bg bg-loading-bg h-screen pt-18percent">
      <div className="toy-box">
        <img className='m-0auto' src={LoadingImg} alt="loading" />
      </div>
      <div className="progress-rate-content w-5/6 h-2 bg-dark-green m-0auto mt-4percent relative">
        <div className="rate absolute left-0 top-0 w-3/4 h-full bg-progress-rate transition-all duration-100" style={{ width:progress+ '%'}}></div>
      </div>
    </div>
  )
}

export default Loading