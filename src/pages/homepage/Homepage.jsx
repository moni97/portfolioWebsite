import './homepage.scss';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';

export default function Homepage() {
    return (
        <>
            <div className='homepage'>
                <Header></Header>
                <Main></Main>
                <About></About>
                <Skills></Skills>
            </div>
        </>
        
    )
}