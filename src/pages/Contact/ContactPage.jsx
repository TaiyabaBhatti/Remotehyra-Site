import React from 'react'
import Wrapper from '../../components/ui/Wrapper'
import Headline from '../../components/ui/Headline'
import ContactForm from './ContactForm'


export default function ContactPage() {
  return (
<Wrapper>
     <Headline
              title="Let's Build Something Amazing"
              subtitle="Transform your business with our cutting-edge solutions"
            />

            <ContactForm/>
</Wrapper>   
  )
}
