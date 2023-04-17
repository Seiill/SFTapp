import React from'react'
import Footer from '../Footer/index'

import { Container, FormWrapp, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from '../Contact/ContactusElements'
const ContactUs = ()=>{
    return(
        <Container>
            <FormWrapp>
            <FormContent>
                <Form action="#">
                    <FormH1> Contact Us</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='text' required/>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email'required/>
                    <FormLabel htmlFor='for'>Tel</FormLabel>
                    <FormInput type='text'required/>
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