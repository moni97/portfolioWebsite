import "./experience.scss";
import Header from '../../components/header/Header';
import ExperienceItem from "../../components/experienceItem/ExperienceItem";
import education from "../../data/education.json";
import work from "../../data/work.json";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return <>
        <div className="experience">
            <Header></Header> 
            <div className="education">
                <div className="educationHeading">Education</div>
                <div className="educationContent">
                    {
                        education.map((edu, index) => {
                            return <ExperienceItem title={edu.title} place={edu.place} location={edu.location} date={edu.date} icon={edu.icon} key={index}></ExperienceItem>
                        }) 
                    }
                </div>
            </div>
            <div className="work">
                <div className="workContent">
                <div className="workHeading">Work</div>
                <VerticalTimeline lineColor="#B9B4C7">
                    {work.map((experience, index) => (
                      <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#0c0722', color: '#B9B4C7', border: '1px solid #B9B4C7'}}
                            contentArrowStyle={{ borderRight: '7px solid #B9B4C7' }}
                            date={ experience.date }
                            iconStyle={{ background: '#0c0722', color: '#B9B4C7' }}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{experience.place}</h4>
                            <h5 className="vertical-timeline-element-subtitle">{experience.location}</h5>
                            <ul className="vertical-timeline-element-list">
                                {
                                    experience.projectList.map((project, index) => {
                                        return <li key={index}>{project}</li>
                                    })
                                }
                            </ul>
                    </VerticalTimelineElement>
                    ))}
                    
                </VerticalTimeline>
                </div>
            </div>
        </div> 
    </>
}