import React from 'react'
import {ContentList,TitleList,H3,UL,LI} from './ListComponentElements'

const ListComponent = (props) => {
  return (
    <ContentList>
        <TitleList>
            <H3>{props.title}</H3>
        </TitleList>
        <UL>
            {props.list.map((item,index)=>{
                return(
                    <LI>{item}</LI>
                )
            })}
            
        </UL>
    </ContentList>
  )
}

export default ListComponent