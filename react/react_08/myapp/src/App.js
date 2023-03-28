import logo from './logo.svg';
import './App.css';
// import { Navbar, Nav } from 'react-bootstrap';
import { BsFillHouseFill, BsFillBellFill, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Contact from './components/Contact';


const CONTACTOS = [
  {
    name:'Yurley Sanchez',
    profile: "Developer",
    img:'https://avatars.githubusercontent.com/u/25001142?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'Linkedin',
        icon: 'Linkedin'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'Twitter',
        icon: 'Twitter'
      }, 
    ]
  },
  {
    name:'Mat Smit',
    profile: "Desinger",
    img:'https://avatars.githubusercontent.com/u/65981674?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'Linkedin',
        icon: 'Linkedin'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'Twitter',
        icon: 'Twitter'
      }, 
    ]
  },
  {
    name:'Ivan Gomez',
    profile: "Leader Tech",
    img:'https://avatars.githubusercontent.com/u/125138438?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'Linkedin',
        icon: 'Linkedin'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'Twitter',
        icon: 'Twitter'
      }, 
    ]
  },

] 


const getContactos = (contactos) => {
  return contactos.map(contacto => {
      return <Contact contacto={contacto} />
  })
}



function App() {
  return (
    <div>
        Contactame
        <div className='contactos'>
          { getContactos(CONTACTOS) }
        </div>
    </div>
  )
}

export default App;

/*
<div>
      Contactame
      <h3> WhatsApp <AiOutlineWhatsApp /> </h3>
      <h3> GitHub <AiFillGithub /> </h3>
      <h3> Email <AiOutlineMail /> </h3>
    </div>


*/