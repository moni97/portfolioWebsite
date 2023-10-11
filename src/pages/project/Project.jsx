import "./project.scss";
import ProjectGallery from "../../components/projectGallery/ProjectGallery";
import Header from '../../components/header/Header';
import Papa from 'papaparse';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Project() {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        axios.get('./project.csv').then((response) => {
            Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
                complete: function (results) {
                    setCsvData(results.data);
                },
            });
        });
        },
    []);
    return <>
        <div className="project">
            <Header/>
            <ProjectGallery data={csvData}/>
        </div>
    </>
}