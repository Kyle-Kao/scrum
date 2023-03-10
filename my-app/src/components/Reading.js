import { Link } from 'react-router-dom'
import { useState } from 'react'
import leafL from '../images/bg_leafDark_1.png'
import leafR from '../images/bg_leafDark_3.png'
import leafB from '../images/bg_leafDark_2.png'
import leafT from '../images/bg_leafDark_4.png'
import leafTintL from '../images/bg_leafTint_1.png'
import leafTintB from '../images/bg_leafTint_2.png'
import leafTintT from '../images/bg_leafTint_3.png'
import leafTintR from '../images/bg_leafTint_4.png'
import logo from '../images/logo_hole.png'

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
        <div className="title absolute left-2/4 bottom-20percent -translate-x-2/4 text-white font-bold text-4xl whitespace-nowrap">??????????????????????????????</div>
        <button className='absolute left-2/4 bottom-8percent -translate-x-2/4 btnBlue' onClick={()=>{setIntoVillage(true)}}>????????????</button>
      </div>
      <div className={`start-game-content opacity-0 w-full h-430 absolute left-2/4 -top-full -translate-x-2/4 ${intoVillage? 'fadeIn' : ''}`}>
        <div className={`card-type w-908 h-430 flex p-p145`}>
          <div className={`text-content text-white text-2xl font-medium ${intoVillage? 'letterFadeIn' : ''} `}>
            <p>?????? ??? ????????????<span className='text-green'>???SCRUM ????????????</span>??? ????????????????????????????????? ???????????????????????? Scrum ?????????????????? ???</p>
            <p className='mt-10'>????????????????????? ??? ???????????? Scrum ??????????????????????????????</p>
          </div>
        </div>
        <Link className='absolute left-2/4 -bottom-20percent -translate-x-2/4 btnBlue' to="./list/1">????????????</Link>
      </div>
    </div>
  )
}

export default Reading