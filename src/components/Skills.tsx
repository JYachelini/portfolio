import React from 'react'
import html from '../assets/html5.svg'
import css from '../assets/css3.svg'
import terminal from '../assets/terminal.svg'
import linux from '../assets/linux.svg'
import npm from '../assets/npm.svg'
import ts from '../assets/typescript.svg'
import js from '../assets/js.svg'
import git from '../assets/git.svg'
import mongodb from '../assets/mongodb.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import scss from '../assets/scss.svg'
import vite from '../assets/vitejs.svg'

import communication from '../assets/communication.png'
import motivation from '../assets/motivation.png'
import flexibility from '../assets/flexibility.png'
import problemsolving from '../assets/problemsolving.png'
import responsability from '../assets/responsability.png'
import teamwork from '../assets/teamwork.png'
import possitive from '../assets/possitive.png'

const Skills = React.forwardRef((props, ref: any) => {
	return (
		<section id='Skills' className='section_skills'>
			<div className='section_skills--left flex flex-col justify-between'>
				<div ref={ref}>
					<h2 className='text-3xl'>Soft skills</h2>
					<div id='soft'>
						<div>
							<img src={communication} alt='' />
							<p>Communication</p>
						</div>
						<div>
							<img src={motivation} alt='' />
							<p>Motivation</p>
						</div>
						<div>
							<img src={flexibility} alt='' />
							<p>Flexibility</p>
						</div>
						<div>
							<img src={problemsolving} alt='' />
							<p>Problem Solving</p>
						</div>
						<div>
							<img src={responsability} alt='' />
							<p>Responsability</p>
						</div>
						<div>
							<img src={teamwork} alt='' />
							<p>Teamwork</p>
						</div>
						<div>
							<img src={possitive} alt='' />
							<p>Possitive</p>
						</div>
					</div>
				</div>
				<div className='section_skills--right-skill'>
					<h2>Tecnhologies</h2>
					<div className='flex  max-w-full flex-wrap sm:gap-4 sm:p-4 pl-0'>
						<img src={html} alt='' />
						<img src={css} alt='' />
						<img src={scss} alt='' />
						<img src={tailwind} alt='' />
						<img src={react} alt='' />
						<img src={vite} alt='' />
						<img src={js} alt='' />
						<img src={ts} alt='' />
						<img src={nodejs} alt='' />
						<img src={mongodb} alt='' />
						<img src={terminal} alt='' />
						<img src={linux} alt='' />
						<img src={npm} alt='' />
						<img src={git} alt='' />
					</div>
				</div>
			</div>
			<div className='section_skills--right'>
				<div className='section_skills--right_certifications flex-wrap flex-col md:flex-row'>
					<a href='' className='certification-wrap  w-auto md:w-[45%]' target='_blank'>
						<h3>BackEnd Developer</h3>
						<h4>Coderhouse</h4>
						<p>2022</p>
						<p>Click me to view certificate</p>
					</a>
					<a
						href='https://us.coderhouse.com/certificados/61affac7e6561800282a5b3a'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>FrontEnd React</h3>
						<h4>Coderhouse</h4>
						<p>2021</p>
						<p>Click me to view certificate</p>
					</a>
					<a
						href='https://us.coderhouse.com/certificados/61609dc933d8ab0055dac7df'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>Javascript</h3>
						<h4>Coderhouse</h4>
						<p>2021</p>
						<p>Click me to view certificate</p>
					</a>
					<a
						href='https://us.coderhouse.com/certificados/61215a6b9fae6803410babf1'
						className='certification-wrap  w-auto md:w-[45%]'
						target='_blank'
					>
						<h3>Web Development (HTML/CSS)</h3>
						<h4>Coderhouse</h4>
						<p>2021</p>
						<p>Click me to view certificate</p>
					</a>
				</div>
			</div>
		</section>
	)
})

export default Skills
