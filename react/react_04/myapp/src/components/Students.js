import './Student.css';


function StudentComponent(props) {
    return (
      <div className='student'>
        <p>{props.name}</p> 
        <img className="imagen" src={props.img} />
        <br></br>
        <a href={props.github}>
            {props.githubName}
        </a>
        
      </div>
    );
  }

  export default StudentComponent;

  