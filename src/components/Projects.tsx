import React from 'react'
import reactFarmaciaGif from '../assets/boceto_gif.gif'
import javascriptProject from '../assets/javascript_Project.png'
import firstProject from '../assets/first_project.png'

const Projects = React.forwardRef((props, ref: any) => {
	return (
		<>
			<section ref={ref} id='Projects' className='section_projects p-16'>
				<h1 className='text-7xl font-semibold'>
					My Projects
				</h1>
				<div className='flex justify-between flex-wrap'>
					<article className='p-8 flex flex-col gap-4 max-w-3xl'>
						<h2 className='text-3xl underline'>React project</h2>
						<p>
							This project is based on my family's pharmacy and the continuity of the JS
							project.
						</p>
						<p>I made it for the FrontEnd React course.</p>
						<p>
							It lacks some functionalities like the navigation bar but it has a
							funciontal ordering system.
						</p>
						<a href='https://farmaciayachelini.netlify.app' className='p-4'>
							<img src={reactFarmaciaGif} alt='' />
							<p className='text-center text-sm pt-3'>
								Click me to view the project online!
							</p>
						</a>
					</article>
					<article className='p-8 flex flex-col gap-4 max-w-3xl'>
						<h2 className='text-3xl underline'>Javascript project</h2>
						<p>This project is based on my family's pharmacy.</p>
						<p>I made it for the Javascript course.</p>
						<p>
							It is a simulation of an ecommerce. It does not have a functional order
							system.
						</p>
						<a href='https://jyachelini.github.io/Proyecto_Farmacia/#' className='p-4'>
							<img src={javascriptProject} alt='' />
							<p className='text-center text-sm pt-3'>
								Click me to view the project online!
							</p>
						</a>
					</article>
					<article className='p-8 flex flex-col gap-4 max-w-3xl'>
						<h2 className='text-3xl underline'>First project</h2>
						<p>This project is based on a My Online server.</p>
						<p>It was the first project I did. For the HTML/CSS course.</p>
						<a href='https://jyachelini.github.io/Proyecto_VeruxMu/' className='p-4'>
							<img src={firstProject} alt='' />
							<p className='text-center text-sm pt-3'>
								Click me to view the project online!
							</p>
						</a>
					</article>
				</div>
			</section>
		</>
	)
})

export default Projects
