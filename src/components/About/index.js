import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                    I am from Charlotte, North Carolina, but I am currently pursuing a degree in Computer Science and Mathematics at UNC-Chapel Hill.
                </p>
                <p align= "LEFT">
                    I love building new ideas and indulging in new projects. I am an accomplished leader and aspiring software developer with a diverse range of experiences. My goal is to contribute to the tech industry through innovative solutions and a strong problem-solving mindset.
                </p>
                <p>
                    Hobbies:
                    I am pursuing my passion for music, developing as a guitarist in a campus youth band and creating solo covers of songs.
                    I keep myself healthy and fit through the UNC Club Judo Team and weightlifting with my friends.
                    Lastly, I love outdoor activities like backpacking, whitewater rafting, and survival camping.
                </p>
                </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#4584B6"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="#F89820"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
)
}

export default About