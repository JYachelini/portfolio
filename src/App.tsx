import { useState } from 'react'
import './css/main.css'
import LeftSidebar  from './components/LeftSidebar'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import RightSidebar from './components/RightSidebar'
import BgCircles from './components/BgCircles'

function App() {
	return (
		<>
			<LeftSidebar />
      <main>
        <Me/>
        <Skills/>
        <Projects/>
      </main>
      <RightSidebar/>
      <BgCircles/>
		</>
	)
}

export default App
