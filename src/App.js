import React, { useEffect,  useState } from 'react'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import UseMediaQuery from "./hooks/UseMediaQuery";
import Navbar from './scenes/Navbar';

import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Contacts from './scenes/Contacts';
import Footer from './scenes/Footer';



const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)")
  

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener('scroll',handleScroll)

  return ()=> window.removeEventListener('scroll', handleScroll)
  },[]);

  return (

    <div className="app bg-deep-blue">
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} 
      />
      <div className='w-5/6 mx-auto md:h-full '>
        {isAboveMediumScreens && (
          <DotGroup
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      {/* <LineGradient/> */}
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills/>
      </div>
      {/* <LineGradient/> */}
      <div className='w-5/6 mx-auto'>
        <Projects/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Contacts/>
      </div>
      <div className='w-5/6 mx-auto py-3'>
      <Footer/>
      </div>
    </div>
  )
}

export default App
