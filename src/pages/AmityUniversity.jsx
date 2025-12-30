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
import StaticFooter from '../components/StaticFooter'
import EnquiryModal from '../contact-details/EnquiryModal'
import { useState } from "react";

const AmityUniversity = () => {
const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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
            {/* BOTTOM STICKY HEADER */}
            <StaticFooter
                screenSize="sm"
                onEnquiryClick={() => setIsEnquiryOpen(true)}
            />

            {/* ENQUIRY MODAL */}
            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
            />
        </div>
    )
}

export default AmityUniversity