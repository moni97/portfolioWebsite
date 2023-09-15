import "./skills.scss";
import {ReactComponent as Python} from "../../images/python.svg";
import {ReactComponent as PyTorch} from "../../images/pytorch.svg";
import {ReactComponent as Keras} from "../../images/keras.svg";
import {ReactComponent as TensorFlow} from "../../images/tensorflow.svg";

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
            </div>
        </div>
    )
}