import React, { useRef, useState } from 'react';
import './styles/App.css'
import './styles/buttons.css'
import FormWrapper from './components/FormWrapper';
import ResumeWrapper from './components/ResumeWrapper';
import { useReactToPrint } from 'react-to-print'

import { defaultEducations, defaultPersonal, defaultProfessions } from './components/DefaultData'

function App() {

  const [educationItem, setEducationItem] = useState({
    school: '',
    degree: '',
    start: '',
    end: '',
    location: ''
  })

  const [professionItem, setProfessionItem] = useState({
    company: '',
    position: '',
    start: '',
    end: '',
    location: '',
    description: ''
  })

  const [personal, setPersonal] = useState(defaultPersonal)
  const [educations, setEducations] = useState(defaultEducations)
  const [professions, setProfessions] = useState(defaultProfessions)

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  function clearAll() {
      let newPersonal = {}
      Object.keys(personal).map(item => {
              newPersonal[item] = ''
          })
      setPersonal(newPersonal)
      setProfessions([])
      setEducations([])
  }

  return (
    <>
      <FormWrapper 
        personal = {personal} 
        setPersonal = {setPersonal}
        educations = {educations}
        setEducations = {setEducations}
        educationItem = {educationItem}
        setEducationItem = {setEducationItem}
        professionItem = {professionItem}
        setProfessionItem = {setProfessionItem}
        professions = {professions}
        setProfessions = {setProfessions}
        handlePrint = {handlePrint}
        clearAll = {clearAll}
      />
      
      <ResumeWrapper 
        ref={componentRef}
        personal = {personal} 
        educations = {educations}
        professions = {professions}
      />
    </>
  )
}

export default App
