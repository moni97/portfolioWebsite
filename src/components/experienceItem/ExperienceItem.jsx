import "./experienceItem.scss";
// import Manipal from '../../images/manipal.webp';
import { Image} from 'react-bootstrap';
export default function ExperienceItem(props) {
    const { title, place, date, location, projectList, icon } = props;
    return <>
        <div className="experienceItem">
            <h4>{title}</h4>
            <h5>{place}</h5>
            <p>{date}</p>
            <p>{location}</p>
            {projectList && <ul className="projectList">{projectList.map((project, index) => (<li key={index}>{project}</li>))}</ul>}
            <div className="experienceItemIcon"><Image src={require(`../../images/${icon}`)}></Image></div>
        </div>
    </>
}