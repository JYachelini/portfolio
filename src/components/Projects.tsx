import React from 'react'
import reactFarmaciaGif from '../assets/projects/boceto_gif.gif'
import javascriptProject from '../assets/projects/javascript_project.png'
import firstProject from '../assets/projects/first_project.png'

const Projects = React.forwardRef((props, ref: any) => {
	return (
		<>
			<section ref={ref} id='Projects' className='section_projects'>
				<h1 className='text-5xl sm:text-7xl font-semibold'>My Projects</h1>
				<div className='flex 2xl:justify-between flex-wrap flex-col 2xl:flex-row'>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-xl'>
						<h2 className='text-3xl underline'>React project</h2>
						<p>This project is based on my family's pharmacy and the continuity of the JS project.</p>
						<p>I made it for the FrontEnd React course.</p>
						<p>It lacks some functionalities like the navigation bar but it has a funciontal ordering system.</p>
						<a href='https://farmaciayachelini.netlify.app' target='_blank'>
							<img src={reactFarmaciaGif} alt='' />
							<p className='text-center text-sm pt-3'>Click me to view the project online!</p>
						</a>
					</article>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-2xl'>
						<h2 className='text-3xl underline'>Javascript project</h2>
						<p>This project is based on my family's pharmacy.</p>
						<p>I made it for the Javascript course.</p>
						<p>It is a simulation of an ecommerce. It does not have a functional order system.</p>
						<a href='https://jyachelini.github.io/Proyecto_Farmacia/#' target='_blank'>
							<img src={javascriptProject} alt='' />
							<p className='text-center text-sm pt-3'>Click me to view the project online!</p>
						</a>
					</article>
					<article className='p-4 pl-0 flex flex-col gap-4 max-w-2xl'>
						<h2 className='text-3xl underline'>First project</h2>
						<p>This project is based on a My Online server.</p>
						<p>It was the first project I did. For the HTML/CSS course.</p>
						<a href='https://jyachelini.github.io/Proyecto_VeruxMu/' target='_blank'>
							<img src={firstProject} alt='' />
							<p className='text-center text-sm pt-3'>Click me to view the project online!</p>
						</a>
					</article>
				</div>
			</section>
		</>
	)
})

export default Projects
