import { po, bg, hole, poLight, continuePo, jira, point, arrow } from '../../doc/imageSource'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

// 耗時七秒完成動畫
const PoStep3 = () =>{
  const [ times, setTimes ] = useState(0)
  const [ canClick, setCanClick ] = useState(false)
  const navigate  = useNavigate()

  useEffect(()=>{
    const count = setInterval(()=>{
      setTimes(per=>per+1)
    },1000)
    if(times === 7){
      clearInterval(count)
      setCanClick(true)
    }
    return () =>{
      clearInterval(count)
    }
  },[times])

  const handleClick = () =>{
    if(canClick){
      navigate("/list/4")
    }
  }

  return (
    <div className={`relative m-0auto h-full desktop:max-w-screen-desktop`} onClick={handleClick}>
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
            <p>在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。</p>
            <p className="flex justify-start items-center">對了 ！ 我們公司也推薦使用 <img src={jira} alt="jira" />來做任務的管理呢 ！</p>
          </div>
          <div className="continue-po w-8 absolute right-5 bottom-5">
            <img src={continuePo} alt="continuePo" />
          </div>
        </div>
      </div>
      {/* 最外層list盒子 */}
      <div className="outside-box opacity-0 animate-fadeOpacity">
        <div className="list-box w-500 h-596 bg-green/30 absolute left-1/2 top-[calc(50%+100px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl backdrop-blur-xl z-10 flex flex-col justify-start items-stretch text-center">
          <div className="title flex justify-center items-center flex-col bg-green p-3.5 rounded-t-3xl">
            <p className="text-3xl text-bg-dark">產品待辦清單</p>
            <p className="text-dark-green text-base">Product Backlog</p>
          </div>
          {/* dnd */}
          <div className="example w-full h-full rounded-b-3xl flex justify-start items-stretch text-center p-7">
            <div className="relative level text-white flex flex-col justify-between items-center mr-4 beforeLine">
              <span>高</span>
              <span>低</span>
            </div>
            <ul className="move-in w-full">
              <li className="w-412 h-100 rounded-3xl border-dashed border-green border-2"></li>
              <li className="w-412 h-100 rounded-3xl border-dashed border-green border-2 mt-4"></li>
              <li className="w-412 h-100 rounded-3xl border-dashed border-green border-2 mt-4"></li>
              <li className="w-412 h-100 rounded-3xl border-dashed border-green border-2 mt-4"></li>
            </ul>
          </div>
        </div>
        <div className="list-box w-500 h-596 bg-green/20 absolute left-[calc(50%+12px)] top-[calc(50%+112px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        <div className="list-box w-500 h-596 bg-green/10 absolute left-[calc(50%+22px)] top-[calc(50%+124px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        {/* tag  */}
        <div className="tag-btn absolute top-[58%] left-[20%] z-20 -translate-x-1/2 -translate-y-1/2 opacity-30">應徵者的線上履歷編輯器</div>
        <div className="tag-btn absolute top-[59%] right-[15%] z-20 translate-x-1/2 -translate-y-1/2 opacity-30">會員系統（登入、註冊、權限管理）</div>
        <div className="tag-btn absolute top-[72%] left-[15%] z-20 -translate-x-1/2 -translate-y-1/2 opacity-30">後台職缺管理功能（資訊上架、<br/>下架、顯示應徵者資料）</div>
        <div className="tag-btn absolute top-[73%] right-[21%] z-20 translate-x-1/2 -translate-y-1/2 opacity-30 animate-listOpacity">前台職缺列表、應徵</div>
        {/* animate */}
        <div className="list-arrow absolute z-20 right-[28%] bottom-[30%] opacity-0 animate-listOpacity2">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="list-outside absolute w-412 h-100 top-[calc(50%-32px)] left-[calc(50%+16px)] -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 animate-listOpacity2">
          <div className="lsit-content h-full">前台職缺列表、應徵</div>
          <div className="move-point absolute bottom-[calc(0%+10px)] translate-y-1/2 right-[10%]">
            <img src={point} alt="point" />
          </div>
        </div>
      </div>
    </div>
  )
}



export default PoStep3