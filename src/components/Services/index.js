import React from 'react'
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/SVG/trucking.svg'
import Icon3 from '../../images/SVG/construction2.svg'
import {ServicesContainer, ServicesH1, LinkServices, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
    <ServicesH1> Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard >
          <LinkServices to ='/consulting'>
            <ServicesIcon  src={Icon1}></ServicesIcon>
            <ServicesH2> Reduces Expenses</ServicesH2>
            <ServicesP> We Help reduce your fess and increase your over all reveneu </ServicesP>
          </LinkServices>
        </ServicesCard>

        <ServicesCard>
          <LinkServices to='/training'>
          <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2> Virtual Offices</ServicesH2>
            <ServicesP> We Help reduce your fess and increase your over all reveneu </ServicesP>
          </LinkServices>
        </ServicesCard>

        <ServicesCard>
          <LinkServices to= '/construction'>
          <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2> Premium benefits</ServicesH2>
            <ServicesP> We Help reduce your fess and increase your over all reveneu </ServicesP>
          </LinkServices>
            
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services