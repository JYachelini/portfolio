import React from 'react'
import { motion } from 'framer-motion'
import pdf from '../assets/CV_Julián_Yachelini_EN.pdf'

const Me = React.forwardRef((props, ref: any) => {
	return (
		<section id='Me' className='section_me'>
			<div ref={ref} className='section_me--presentation'>
				<h1>hello.</h1>
				<h1>
					I'm <strong>Julián Yachelini</strong>,
				</h1>
				<h3>
					<strong>fullstack developer</strong>,
				</h3>
				<h6>typescript lover.</h6>
			</div>
			<div className='flex flex-col justify-between section_me--aboutMe gap-4'>
				<h1>about me.</h1>
				<p>I'm a fullstack Developer, from Argentina.</p>
				<p>
					I did one year of degree in systems analyst where I learned C programming
					language. In the second year I realised that what I really liked was to work
					with programming languages and I went into web development, where I learned
					front-end development and back-end development.
				</p>
				<p>
					Now I am studying design patterns, SOLID, hexagonal arquitecture, anti patterns,
					TDD and DDD. To be able to write a clean and scalable code.
				</p>
				<p>
					I am currently actively looking for a fullstack/back-end developer job
					opportunity.
				</p>
				<p>
					I like <strong>cats</strong>.
				</p>
				<a className='xl:ml-auto' href={pdf} download='CVJuliánYachelini'>
					<motion.strong
						whileHover={{ WebkitTextFillColor: '#4682b4' }}
						className='transition-colors text-4xl stroke-strong paint-fsm-paintOrder'
					>
						download resume
					</motion.strong>
				</a>
			</div>
		</section>
	)
})

export default Me
