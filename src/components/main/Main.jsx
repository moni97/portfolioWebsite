import "./main.scss";
import book from "../../images/book.jpeg";

export default function Main() {
    return (
        <div className="main">
            <div className="mainLeft">
                <img alt="Aniket" className="main-image" src={book} ></img>
            </div>
            <div className="mainRight">
                <div className="mainHeading">Hi, I Am Aniket</div>
                <div className="mainContent">Lorem ipsum dolor sit amet. Et nisi quasi hic voluptas quae et natus Quis in debitis repudiandae aut minus dicta. Aut laborum reprehenderit et commodi voluptatem 33 minus sapiente ut ipsum beatae sit libero voluptatem aut quas enim id dolores sequi.</div>
                <div className="mainIcons">
                </div>
            </div>
        </div>
    )
}