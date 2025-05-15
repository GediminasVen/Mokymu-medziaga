import { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import About from './pages/aboutUs/aboutUs';
import Services from './pages/services/Services';
import Gallery from './pages/gallery/Gallery';
import Feedback from './components/customerFeedback/feedback'
import Contacts from './components/contacts/contacts';
import GetInTouch from './pages/getintouch/getintouch';
import Footer from './components/footer/footer';


function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, [])


  return (
    <>
      {
        landingPageData && (
          <>
            <Navigation 
              title={landingPageData.navigation.title}
              navItems={landingPageData.navigation.navigationItems}
            />
            <Header 
              title={landingPageData.header.title}
              subtitle={landingPageData.header.subtitle}
              button={landingPageData.header.button}/>
            <Features
              title={landingPageData.features.title}
              featuresItems={landingPageData.features.featuresItems}/>

            <About 
              title={landingPageData.aboutUs.title}
              description={landingPageData.aboutUs.description}
              features={landingPageData.aboutUs.features}
            />

            <Services title={landingPageData.services.title}
              subtitle={landingPageData.services.subtitle}
              servicesItems={landingPageData.services.items}
            />
            <Gallery title={landingPageData.gallery.title}
            subtitle={landingPageData.gallery.subtitle}
            images={landingPageData.gallery.images}
            />

            <Feedback title={landingPageData.feedback.title}
              items={landingPageData.feedback.items}
            />

            <Contacts title={landingPageData.contacts.title}
              subtitle={landingPageData.contacts.subtitle}
              members={landingPageData.contacts.members}
            />
            <GetInTouch title={landingPageData.getintouch.title}
            subtitle={landingPageData.getintouch.subtitle}
            contacts={landingPageData.getintouch.contacts}
            />

            <Footer />




          </>
        )
      }
    </>
  )
}

export default App