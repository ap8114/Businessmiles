import React from 'react'
import Header from './Components/Layout/Header'
import Home from './Components/HomePage/Home'
import Footer from './Components/HomePage/Footer'
import { Route, Routes } from 'react-router-dom'
import Whoweare from './Category/Whoweare/Whoweare'

import CustomSoftwareDevelopment from './Category/Services/CustomSoftwareDevelopment'

import CloudInfrastructure from './Category/Services/CloudInfrastructure'
import WebECommerceDevelopment from './Category/Services/WebECommerceDevelopment'
import DigitalMarketing from './Category/Services/DigitalMarketing'
import ITStrategySection from './Category/Consulting/ITStrategySection'
import ConsultingPage from './Category/Services/ConsultingPage'
import CloudConsulting from './Category/Consulting/CloudConsulting'
import EndToEndSupport from './Category/Services/EndToEndSupport'
import CyberSecurityAdvisory from './Category/Consulting/CyberSecurityAdvisory'
import HealthcarePage from './Category/Industries/HealthcarePage'
import LogisticsPage from './Category/Industries/LogisticsPage'
import FinancePage from './Category/Industries/FinancePage'
import DigitalTransformationConsulting from './Category/Consulting/DigitalTransformationConsulting'
import RealEstatePage from './Category/Industries/RealEstatePage'
import FeasibilityConsultingPageAlt from './Category/Consulting/FeasibilityConsultingPageAlt'
import RetailEcommercePage from './Category/Industries/RetailEcommercePage'
import ConstructionContractingPage from './Category/Industries/ConstructionContractingPage'
import EducationELearningPage from './Category/Industries/EducationELearningPage'
import LegalServicesPage from './Category/Industries/LegalServicesPage'
import CaseStudiesSpotlight from './Category/Resources/CaseStudiesSpotlight'
import CybersecurityAlertsLight from './Category/Resources/CybersecurityAlertsLight'
import IndustryReportsAndGuides from './Category/Resources/IndustryReportsAndGuides'
import BlogAndInsights from './Category/Resources/BlogAndInsights'
import ContactUs from './Components/HomePage/ContactUs'


function App() {
  return (
    <>

    <Header/>
   
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/whoweare" element={<Whoweare/>} />
    <Route path="/customsoftwaredevelopment" element={<CustomSoftwareDevelopment/>} />
    
    <Route path="/CloudInfrastructure" element={<CloudInfrastructure/>} />
    <Route path="/WebECommerceDevelopment" element={<WebECommerceDevelopment/>} />
    <Route path="/DigitalMarketing" element={<DigitalMarketing/>} />
    <Route path="/ITStrategySection" element={<ITStrategySection/>} />
    <Route path="/ConsultingPage" element={<ConsultingPage/>} />
     <Route path="/CloudConsulting" element={<CloudConsulting/>} />
      <Route path="/EndToEndSupport" element={<EndToEndSupport/>} />
       <Route path="/CyberSecurityAdvisory" element={<CyberSecurityAdvisory/>} />
        <Route path="/HealthcarePage" element={<HealthcarePage/>} />
         <Route path="/LogisticsPage" element={<LogisticsPage/>} />
          <Route path="/FinancePage" element={<FinancePage/>} />
          <Route path="/DigitalTransformationConsulting" element={<DigitalTransformationConsulting/>} />
          <Route path='/RealEstatePage' element={<RealEstatePage/>}/>
          <Route path='/FeasibilityConsultingPageAlt' element={<FeasibilityConsultingPageAlt/>}/>
          <Route path='/RetailEcommercePage' element={<RetailEcommercePage/>}/>
          <Route path='/ConstructionContractingPage' element={<ConstructionContractingPage/>}/>
          <Route path='/EducationELearningPage' element={<EducationELearningPage/>}/>
          <Route path='/LegalServicesPage' element={<LegalServicesPage/>}/>

          <Route path='/CaseStudiesSpotlight' element={<CaseStudiesSpotlight/>}/>
          <Route path='/CybersecurityAlertsLight' element={<CybersecurityAlertsLight/>}/>
          <Route path='/IndustryReportsAndGuides' element={<IndustryReportsAndGuides/>}/>
         
          <Route path='/BlogAndInsights' element={<BlogAndInsights/>}/>
    

   </Routes>
   <Footer/>
     

    </>
     
  )
}

export default App