import React from 'react'
import {Container, NavItem, ServicesNavi,ServicesLink,} from './ServicesNavElementes'
import { Services } from './ServiceData'

const ServicesNav = () => {
  return (
    <Container>
        <ServicesNavi>
              <NavItem>
              {Services.map((service, id) =>{
                 return(             
                <ServicesLink to={service.path} key={id}>
                  {service.title}
                  {/* <ServiceIcon src={service.icon}></ServiceIcon> */}
                </ServicesLink>
                )
              })}
             </NavItem>
            
        </ServicesNavi>
    </Container>
  )
}

export default ServicesNav