import './Testimonio.css';




function Testimonio(props) {
  console.log('props', props)
  const testimonio = props.testimonio
    return (
      <div className='testimonio'>
        <div className='user'>
          <img className="imagen" src={testimonio.img} />
          <p>{testimonio.name}</p> 
        </div>
        <p>{testimonio.text}</p> 
      </div>
    );
  }

  export default Testimonio;

  