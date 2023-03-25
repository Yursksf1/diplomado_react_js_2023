import './Resource.css';
import { AiOutlineWhatsApp, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const iconMapping = {
    WhatsApp: <AiOutlineWhatsApp/>,
    Github: <AiFillGithub/>,
    Mail: <AiOutlineMail/>,
}

const getIcon = (iconName) => {
    return iconMapping[iconName]
}



function Resource(props) {
    const resource = props.resource
    return (
        <a href={resource.url}>
            {resource.text}
            {getIcon(resource.icon)}
        </a>
    );
  }

  export default Resource;

  