import React from 'react'
import Hero from '../components/pages/landingpage/Hero'
import About from '../components/pages/landingpage/about'
import Projects from '../components/pages/landingpage/Projects'
import Contact from '../components/pages/landingpage/Contact'

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default LandingPage