import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/side-pic.JPG'

const Music = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container music-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M', 'y', ' ', 'M', 'u', 's', 'i', 'c']} idx={15} />
                </h1>
                <p>
                    As you may have read in my about page, I have a passion for music--playing guitar/piano and singing. This in turn has led me to create covers of a couple of my favourite songs. As of now, I have made covers in the genre of modern pop. However, as I progress as a muscisian, I am hoping to branch out and create a diverse portfolio with songs from artists in many genres: pop, rock, metal, neo-soul, jazz, and blues.
                </p>
                </div>
                <div className='pic-container'>
                    <img src={Pic} alt="" height={400} width={425}/>
                </div>
                <Link to="https://www.bandlab.com/jokii2045" className='butn'>MY MUSIC PAGE</Link>
                </div>
        <Loader type="pacman" />
    </>
)
}

export default Music