import './Contact.css';
import Resource from './Resource';


const getResources = (resources) => {
    return resources.map(resource => {
        return <Resource resource={resource} />
    })
}



function Contact(props) {
  console.log('props', props)
  const contacto = props.contacto
    return (
      <div className='contact'>
        <p>{contacto.name}</p> 
        <img className="imagen" src={contacto.img} />
        <div className='resources'>
        { contacto.resources? getResources(contacto.resources) : null }
        </div>
        
      </div>
    );
  }

  export default Contact;

  