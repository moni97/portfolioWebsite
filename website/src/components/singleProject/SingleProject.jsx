import { useEffect, useState } from "react"
// import {useParams} from "react-router-dom";
import projectJson from "../../data/json/project.json";
import ReactMarkdown from "react-markdown";
import "./singleProject.scss";

export default function SingleProject({data}) {

    const [project, setProject] = useState();
    // const {id} = useParams();
    // const projectName = projectJson.find(proj => proj["column"] === id)
    console.log("in singleProject.jsx");
    console.log(data);
    useEffect(() => {
        fetch(`http://localhost:5001/projects/${data}`)
            .then((res) => res.text())
            .then((data) => {setProject(data);console.log(data);});
    }, []);
    return <>
        <div className="singleProject">
            {/* <Markdown source={project.md}></Markdown> */}
            {/* {console.log(project.md)} */}
            {/* {project} */}
            <ReactMarkdown children={project}></ReactMarkdown>
         </div>
    </>
}