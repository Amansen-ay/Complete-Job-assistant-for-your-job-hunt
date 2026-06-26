import Hero from './HeroSection/hero.jsx'
import FeatureSection from './featuresection.jsx'
import AnalyticsSection from './anaylyticsSection.jsx';
import NotesTaskPreview from './notesTaskSection.jsx'
import SkilsSection from './skillsSection.jsx';
import ProvenSection from './provenSection.jsx';
import Footer from './footer.jsx';



export default function Page1(){
    return (
        <>
        <main>
            <section id="Hero">
                <Hero/>
            </section>
            
            <section id="Features">
               <FeatureSection/> 
            </section>
            <section id="Analytics">
               <AnalyticsSection/> 
            </section>
            <section>
               <NotesTaskPreview/> 
            </section>
            <section id="Skills">
               <SkilsSection/> 
            </section>
            <section id="About">
               <ProvenSection/> 
            </section>
            
            <Footer/>
        </main>

           
        </>
    )
}

    
   





