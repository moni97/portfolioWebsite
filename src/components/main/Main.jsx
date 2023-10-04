import "./main.scss";
import React, { useState, useEffect } from 'react';

export default function Main() {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const textToType = "Hi, I Am Aniket";
        let currentIndex = 0, typingInterval;

        if (isTyping) {
            typingInterval = setInterval(() => {
                if (currentIndex < textToType.length) {
                    setText(textToType.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 100); // Adjust typing speed (milliseconds per character)
        }

        return () => {
            clearInterval(typingInterval);
        };
    }, [isTyping]);
    return (
        <div className="main">
            {/* <div className="mainLeft">
                <img alt="Aniket" className="main-image" src={book} ></img>
            </div> */}
            <div className="mainRight">
                <div className="mainHeading">{text}</div>
                <div className="mainContent">I'm an AI Researcher currently pursuing my PhD in AI at the University of Illinois at Chicago. My current research interests are multi-agent learning and planning, AI language, and communication. </div>
                <div className="mainIcons">
                </div>
            </div>
        </div>
    )
}