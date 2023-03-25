import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BsFillHouseFill, BsFillBellFill, BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Contact from './components/Contact';


const CONTACTOS = [
  {
    name:'Yurley Sanchez',
    img:'https://avatars.githubusercontent.com/u/25001142?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'GitHub',
        icon: 'Github'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'WhatsApp',
        icon: 'WhatsApp'
      }, 

      {
        url:'mailto:yurs.ksf1@gmail.com',
        text:'Mail',
        icon: 'Mail'
      }, 
    ]
  },
  {
    name:'Yurley Sanchez',
    img:'https://avatars.githubusercontent.com/u/25001142?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'GitHub',
        icon: 'Github'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'WhatsApp',
        icon: 'WhatsApp'
      }, 

      {
        url:'mailto:yurs.ksf1@gmail.com',
        text:'Mail',
        icon: 'Mail'
      }, 
    ]
  },
  {
    name:'Yurley Sanchez',
    img:'https://avatars.githubusercontent.com/u/25001142?v=4',
    resources:[
      {
        url:'https://github.com/Yursksf1',
        text:'GitHub',
        icon: 'Github'
      }, 
      {
        url:'https://api.whatsapp.com/send?phone=3194877423',
        text:'WhatsApp',
        icon: 'WhatsApp'
      }, 

      {
        url:'mailto:yurs.ksf1@gmail.com',
        text:'Mail',
        icon: 'Mail'
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