import { po, bg, hole, poLight, continuePo, jira } from '../../doc/imageSource'
import { ListContent } from '../../doc/Content'
import { ListItem } from "../dnd/Drag"
import { ListBox } from "../dnd/Drop"  
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import styled from 'styled-components'
import { useState, useRef } from "react"


const PoStep4 = () =>{
  const [ newListArr, setNewListArr ] = useState(ListContent)
  const [ dropList, setDropList ] = useState([])
  const createProps = {
    newListArr: newListArr,
    setNewListArr: setNewListArr,
    dropList: dropList,
    setDropList: setDropList
  }
  
  return (
    <div className={`relative m-0auto h-full desktop:max-w-screen-desktop`}>
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
      <DndProvider backend={HTML5Backend} className="outside-box opacity-0 animate-fadeOpacity">
        <div className="list-box w-500 h-596 bg-green/30 absolute left-1/2 top-[calc(50%+100px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl backdrop-blur-xl z-10 flex flex-col justify-start items-stretch text-center">
          <div className="title flex justify-center items-center flex-col bg-green p-3.5 rounded-t-3xl">
            <p className="text-3xl text-bg-dark">產品待辦清單</p>
            <p className="text-dark-green text-base">Product Backlog</p>
          </div>
          <div className="example w-full h-full rounded-b-3xl flex justify-start items-stretch text-center p-7 pt-3">
            <div className="relative level text-white flex flex-col justify-between items-center mr-4 beforeLine">
              <span>高</span>
              <span>低</span>
            </div>
            <ul className="move-in w-full text-left">
              { dropList.length === 0 ?
                newListArr.map((item,index)=> (
                  <ListBox key={index} name='' index={index} myProps={createProps} /> 
                )) :
                <>
                  {dropList.map((list,index) => (
                    <ListBox 
                      key={list.id} 
                      id={list.id} 
                      name={list.name} 
                      index={index}
                      dynamicData={dropList}
                      myProps={createProps} 
                    />
                  )) }
                  {/* {
                    newListArr.map((item,index)=> (
                      <ListBox key={index} name='' index={index} myProps={createProps} /> 
                    ))
                  } */}
                </>
              }
            </ul>
          </div>
        </div>
        <div className="list-box w-500 h-596 bg-green/20 absolute left-[calc(50%+12px)] top-[calc(50%+112px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        <div className="list-box w-500 h-596 bg-green/10 absolute left-[calc(50%+22px)] top-[calc(50%+124px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
        { newListArr.map(list=>(
          <ListItem key={list.id} name={list.text} className={list.className} id={list.id} myProps={createProps}/>
        )) }
      </DndProvider>
    </div>
  )
}



export default PoStep4