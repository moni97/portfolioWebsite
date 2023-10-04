import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerLeft'>
            </div>
            <div className='headerRight'>
                <ul>
                    <li><a href="http://localhost:3000/portfolioWebsite/">Home</a></li>
                    <li><a href="http://localhost:3000/portfolioWebsite/education">Education</a></li>
                    <li><a href="http://localhost:3000/portfolioWebsite/experience">Experience</a></li>
                    <li><a href="http://localhost:3000/portfolioWebsite/research">Research</a></li>
                    <li><a href="http://localhost:3000/portfolioWebsite/projects">Projects</a></li>
                    <li><a href="http://localhost:3000/portfolioWebsite/blog">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}