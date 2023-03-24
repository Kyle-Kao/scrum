import { Link } from 'react-router-dom'
import { useState } from 'react'
import { leafL, leafR, leafB, leafT, leafTintL, leafTintB, leafTintT, leafTintR, logo } from '../doc/imageSource'

const Reading = () =>{
  const [intoVillage, setIntoVillage] = useState(false)

  return (
    <div className="reading-contetn w-full h-screen bg-bg-dark overflow-hidden">
      <div className="dark-content relative overflow-hidden w-full h-full">
        <div className="leaf-l absolute left-0 top-0">
          <img src={leafL} alt="leaf-l" />
        </div>
        <div className="leaf-R absolute right-0 top-0">
          <img src={leafR} alt="leaf-R" />
        </div>
        <div className="leaf-B absolute left-0 bottom-0">
          <img src={leafB} alt="leaf-B" />
        </div>
        <div className="leaf-T absolute top-0 left-0">
          <img src={leafT} alt="leaf-T" />
        </div>
      </div>
      <div className="light-content absolute overflow-hidden w-full h-full left-0 top-0">
        <div className={`leaf-l absolute left-0 top-0 ${intoVillage? 'passLeafL' : ''} `}>
          <img src={leafTintL} alt="leaf-l" />
        </div>
        <div className={`leaf-R absolute right-0 top-0 ${intoVillage? 'passLeafR' : ''} `}>
          <img src={leafTintR} alt="leaf-R" />
        </div>
        <div className={`leaf-B absolute left-0 bottom-0 ${intoVillage? 'passLeafB' : ''} `}>
          <img src={leafTintB} alt="leaf-B" />
        </div>
        <div className={`leaf-T absolute top-0 left-0 ${intoVillage? 'passLeafT' : ''} `}>
          <img src={leafTintT} alt="leaf-T" />
        </div>
      </div>
      <div className={`logo positionCenter ${intoVillage? 'opacity0' : ''}`}>
        <img src={logo} alt="logo" />
        <div className="title absolute left-2/4 bottom-20percent -translate-x-2/4 text-white font-bold text-4xl whitespace-nowrap">深入敏捷の村一探究竟</div>
        <button className='absolute left-2/4 bottom-8percent -translate-x-2/4 btnBlue' onClick={()=>{setIntoVillage(true)}}>進入村莊</button>
      </div>
      <div className={`start-game-content opacity-0 w-full h-430 absolute left-2/4 -top-full -translate-x-2/4 ${intoVillage? 'fadeIn' : ''}`}>
        <div className={`card-type w-908 h-430 flex p-p145`}>
          <div className={`text-content text-white text-2xl font-medium ${intoVillage? 'letterFadeIn' : ''} `}>
            <p>呦呼 ， 歡迎進入<span className='text-green'>「SCRUM 新手村」</span>， 在正式加入專案開發之前 ，需要請你先了解 Scrum 的流程與精神 ！</p>
            <p className='mt-10'>請接受挑戰任務 ， 成功通過 Scrum 新手村的挑戰任務吧～</p>
          </div>
        </div>
        <Link className='absolute left-2/4 -bottom-20percent -translate-x-2/4 btnBlue' to="./list/1">接受挑戰</Link>
      </div>
    </div>
  )
}

export default Reading