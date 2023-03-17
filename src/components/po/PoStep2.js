import { Link } from 'react-router-dom'

import bg from "../../images/bg_village.png"
import po from '../../images/role_po.png'
import hole from '../../images/hole.svg'
import poLight from '../../images/role_po_light.png'
import continuePo from '../../images/ic_continue_po.gif'

const PoStep2 = () =>{
  return (
    <div className={`relative m-0auto desktop:max-w-screen-desktop`}>
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
        <div className={`card-type w-997 h-auto flex p-p100 absolute right-36px opacity-0 animate-contentPo`}>
          <div className={`text-content text-white text-2xl font-medium letterFadeIn`}>
            <p>剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了 <span className='text-green'>「 產品需求清單 」</span>  。 </p>
            <p>既然你都來了 ， 來試試看調整產品優先度 ， 排出產品待辦清單吧 ！</p>
          </div>
          <div className="continue-po w-8 absolute right-5 bottom-5">
            <img src={continuePo} alt="continuePo" />
          </div>
        </div>
        <Link to="/list/3" className='btnBlue absolute right-36px bottom-36px opacity-0 animate-fadeOpacity delay-2500'>準備好了</Link> 
      </div>
    </div>
  )
}

export default PoStep2