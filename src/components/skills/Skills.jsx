import "./skills.scss";
import {ReactComponent as Python} from "../../images/python.svg";
import {ReactComponent as PyTorch} from "../../images/pytorch.svg";
import {ReactComponent as Keras} from "../../images/keras.svg";
import {ReactComponent as TensorFlow} from "../../images/tensorflow.svg";
import {ReactComponent as Pandas} from "../../images/pandas.svg";
import {ReactComponent as Numpy} from "../../images/numpy.svg";
import {ReactComponent as Git} from "../../images/git.svg";
import {ReactComponent as Jupyter} from "../../images/jupyter.svg";
import {ReactComponent as OpenAi} from "../../images/openai-gym.svg";

export default function Skills() {
    return (
        <div className="skills sectionDefault">
            <p className="sectionHeading">Skills</p>
            <div className="skills-icon-container container">
                <div className="row">
                    <div className="skill-icon-list-item col">
                        <Python />
                        <p>Python</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <PyTorch />
                        <p>PyTorch</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <Keras />
                        <p>Keras</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <TensorFlow />
                        <p>TensorFlow</p>
                    </div>
                </div>
                <div className="row">
                    <div className="skill-icon-list-item col">
                        <Pandas />
                        <p>Pandas</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <Numpy />
                        <p>Numpy</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <Git />
                        <p>Git</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <Jupyter />
                        <p>Jupyter</p>
                    </div>
                </div>
                <div className="row">
                    <div className="skill-icon-list-item col">
                        <OpenAi />
                        <p>OpenAi Gym</p>
                    </div>
                    <div className="skill-icon-list-item col">
                        <PyTorch />
                        <p>PyTorch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}