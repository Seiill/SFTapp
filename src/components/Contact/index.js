import React from'react'
import Footer from '../Footer/index'
import emailjs from '@emailjs/browser';

import { Container, FormWrapp, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from '../Contact/ContactusElements'
const ContactUs = ()=>{

    const sendEmail=(event)=>{
       /*  event.preventDefault(); */
        emailjs.sendForm('service_ni2ssqa', 'template_uuijnd2', event.target, 'Lpxez3m74Md9nNAKK')
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return(
        <Container>
            <FormWrapp>
            <FormContent>
                <Form onSubmit={sendEmail}>
                    <FormH1> Contact Us</FormH1>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormInput name='name' type='text' required/>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email'required/>
                    <FormLabel htmlFor='phone'>Tel</FormLabel>
                    <FormInput type='text'required/>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <FormInput name='message' type='Text' required/>
                    <FormButton type='submit'>Submit</FormButton>
                    <Text>We will contact you soon</Text>
                </Form>
            </FormContent>
            </FormWrapp>
            <Footer/>
        </Container>
        
    )
}
 
export default ContactUs;