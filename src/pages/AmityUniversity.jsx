import Header from '../components/Header'
import Hero from '../components/Hero'
import AmityStatsAndHighlights from '../components/AmityStatsAndHighlights'
import About from '../components/About'
import Accreditations from '../components/Accreditations'
import Courses from '../components/Courses'
import WhyChoose from '../components/WhyChoose'
import Admissions from '../components/Admissions'
import StudentTestimonials from '../components/StudentTestimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ContactBanner from '../contact-details/ContactBanner'

const AmityUniversity = () => {

    return (
        <div className="font-sans bg-white">
            <Header />
            <Hero />
            <AmityStatsAndHighlights />
            <About />
            <Accreditations />
            <Courses />
            <WhyChoose />
            <ContactBanner />
            <Admissions />
            <StudentTestimonials />
            <FAQ />
            <Footer />
        </div>
    )
}

export default AmityUniversity