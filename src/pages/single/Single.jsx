import "./single.scss";
import Header from '../../components/header/Header';
import SingleProject from "../../components/singleProject/SingleProject";
import {useParams} from "react-router-dom";

export default function Single() {
    console.log("The data from single.jsx");
    console.log(useParams().id);
    const data = useParams();
    return <>
    <div className="single">
        <Header/>
        <SingleProject data={data.id}/>
    </div>
    </>
}