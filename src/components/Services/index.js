import React from 'react'
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/SVG/trucking.svg'
import Icon3 from '../../images/SVG/construction2.svg'
import {ServicesContainer, ServicesH1,WrapperText, LinkServices, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id='services'>
    <ServicesH1> Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard >
          <LinkServices to ='/consulting'>
            <ServicesIcon  src={Icon1}></ServicesIcon>
            <WrapperText>
            <ServicesH2> Consulting</ServicesH2>
            <ServicesP> We Help reduce your fess and increase your over fees reveneu. </ServicesP>
            </WrapperText>
          </LinkServices>
        </ServicesCard>

        <ServicesCard>
          <LinkServices to='/training'>
          <ServicesIcon src={Icon2}></ServicesIcon>
            <WrapperText>
            <ServicesH2> Training</ServicesH2>
            <ServicesP> With our training, you will have more skilled employees and fewer workplace incidents. </ServicesP>
            </WrapperText>
          </LinkServices>
        </ServicesCard>

        <ServicesCard>
          <LinkServices to= '/construction'>
          <ServicesIcon src={Icon3}></ServicesIcon>
            <WrapperText>
            <ServicesH2> Construction</ServicesH2>
            <ServicesP> Avoid headaches and get in touch with us. We can help you eliminate all the hassles and headaches of construction risks. Contact us for more information. </ServicesP>
            </WrapperText>
          </LinkServices>
            
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services