import './css/main.css'
import LeftSidebar from './components/LeftSidebar'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import RightSidebar from './components/RightSidebar'
import BgCircles from './components/BgCircles'
import React from 'react'
import { useIntersection } from './Functions/customHooks'

console.log('v: 0.2.0')
console.log('thanks you for watch my portfolio 🥳')

function App() {
	const refMe = React.createRef()
	const refSkills = React.createRef()
	const refProjects = React.createRef()

	const inViewportMe = useIntersection(refMe, '-50px')
	const inViewportSkills = useIntersection(refSkills, '-150px')
	const inViewportProjects = useIntersection(refProjects, '-200px')

	return (
		<>
			<LeftSidebar
				inViewportMe={inViewportMe}
				inViewportSkills={inViewportSkills}
				inViewportProjects={inViewportProjects}
			/>
			<main className='overflow-hidden'>
				<Me ref={refMe} />
				<Skills ref={refSkills} />
				<Projects />
			</main>
			<RightSidebar />
			<BgCircles />
		</>
	)
}

export default App
