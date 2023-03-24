import { Link, useNavigate } from 'react-router-dom'
import { po, bg, hole, poLight, continuePo } from '../../doc/imageSource'
import { useState, useEffect } from 'react'

const PoStep1 = () => {
  const [ canClick, setCanClick ] = useState(false)
  const [ times, setTimes ] = useState(0)
  const navigate  = useNavigate()

  useEffect(()=>{
    const count = setInterval(()=>{
      setTimes((pre)=> pre+1)
    }, 1000)
    if( times === 4 ){
      clearInterval(count)
      setCanClick(true)  
    }

    return () => {
      clearInterval(count)
    }
  },[times])

  const handleClick = () => {
    if(canClick) {
      navigate("/list/2")
    }
  }

  return (
    <div className={`relative m-0auto desktop:max-w-screen-desktop`} onClick={ handleClick }>
      <div className="list-bg absolute top-0 left-0 w-full h-screen overflow-hidden">
        <img src={bg} alt="list-bg" />
      </div>
      <div className="list-content absolute top-0 left-0 w-full h-screen  overflow-hidden">
        <div className="po-content relative top-0 left-0 pl-8 pt-8">
          <div className="hole w-324 h-83 animate-showHole">
            <img src={hole} alt="hole" />
          </div>
          <div className="po-light w-467 h-454 absolute -left-36px opacity-0 animate-showPo">
            <img src={poLight} alt="poLight" />
          </div>
          <div className="po w-320 h-304 absolute left-36px opacity-0 animate-showPo">
            <img src={po} alt="po" />
          </div>
        </div>
        <div className={`card-type w-997 h-224 flex p-p100 absolute right-36px opacity-0 animate-contentPo`}>
          <div className={`text-content text-white text-2xl font-medium letterFadeIn`}>
            <p><span className='text-green'>\ 碰 /</span> 我是短衝小精靈 ， 開發 A 組的 PO 。</p>
            <p><span className='text-green'>PO 也就是產品負責人（Product Owner）</span>， 產品負責人會負責評估產品待辦清單的價值與重要性， 依序排列要執行的優先順序 ， 對齊產品目標 。 最後排出產品待辦清單（Product Backlog） 唷 ！</p>
          </div>
          <div className="continue-po w-8 absolute right-5 bottom-5">
            <img src={continuePo} alt="continuePo" />
          </div>
        </div>
        <Link to="/list/2" className='text-green text-xl p-btn-p rounded-3xl border-green border-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fadeOpacity transition-all duration-1000'>點擊畫面任意處繼續</Link> 
      </div>
    </div>
  )
}

export default PoStep1