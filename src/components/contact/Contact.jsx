import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact sectionDefault">
            <p className="sectionHeading">Contact me?</p>
            <div className="contactContainer container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                        <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submitButton">Submit</button>
                </form>
            </div>
        </div>
    )
}