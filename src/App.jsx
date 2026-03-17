import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './index.css'

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Problem />
            <Features />
            <HowItWorks />
            <Screenshots />
            {/* <Testimonials /> */}
            <CTASection />
            <Footer />
        </>
    )
}

export default App
