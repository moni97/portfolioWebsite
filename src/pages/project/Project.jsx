import "./project.scss";
import ProjectGallery from "../../components/projectGallery/ProjectGallery";
import Header from '../../components/header/Header';
import Papa from 'papaparse';
import projectCSV from "../../data/csv/project.csv";
import { useState, useEffect } from 'react';
export default function Project() {
    const [project, setProject] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(projectCSV);
            const text = await response.text();
      
            Papa.parse(text, {
              header: true, // Use the first row as headers
              dynamicTyping: true, // Automatically convert numbers and booleans
              complete: (result) => {
                // console.log('Parsed CSV data:', result.data);
                setProject(result.data);
              },
              error: (error) => {
                console.error('CSV parsing error:', error.message);
              },
            });
          };
      
          fetchData();
        },
    []);
    return <>
        <div className="project">
            <Header/>
            <ProjectGallery data={project}/>
        </div>
    </>
}