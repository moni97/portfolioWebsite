import './homepage.scss';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Skills from '../../components/skills/Skills';
import Interests from '../../components/interests/Interests';
import Testimonials from '../../components/testimonials/Testimonials';
import Hobbies from '../../components/hobbies/Hobbies';
import Contact from '../../components/contact/Contact';

export default function Homepage() {
    return (
        <>
            <div className='homepage'>
                <Header></Header>
                <Main></Main>
                <Interests></Interests>
                <Skills></Skills>
                <Hobbies></Hobbies>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </div>
        </>
        
    )
}