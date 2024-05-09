import React, { useState } from 'react';
import './App.css'
import FormWrapper from './components/FormWrapper';
import ResumeWrapper from './components/ResumeWrapper';

function App() {

const [personal, setPersonal] = useState({
  name: '',
  email: '',
  phone: '',
  address: ''
})

const [educations, setEducations] = useState([])

const [educationItem, setEducationItem] = useState({
  school: '',
  degree: '',
  start: '',
  end: '',
  location: ''
})




  return (
    <>
      <FormWrapper 
        personal = {personal} 
        setPersonal = {setPersonal}
        educations = {educations}
        educationItem = {educationItem}
        setEducations = {setEducations}
        setEducationItem = {setEducationItem}
      />

      <ResumeWrapper personal = {personal} educations = {educations}/>
    </>
  )
}

export default App
