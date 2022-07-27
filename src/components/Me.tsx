import React from 'react'
import pdf from '../assets/CV_JulianYachelini_EN.pdf'

const Me = React.forwardRef((props, ref: any) => {
	return (
		<section id='Me' className='section_me'>
			<div ref={ref} className='section_me--presentation'>
				<h1>hello.</h1>
				<h1>
					I'm <strong>Julián Yachelini</strong>,
				</h1>
				<h3>
					<strong>backend developer</strong>,
				</h3>
				<h6>typescript lover.</h6>
			</div>
			<div className='flex flex-col justify-between section_me--aboutMe gap-4'>
				<h1>about me.</h1>
				<p>I'm a backend Developer, from Argentina.</p>
				<p>
					I did one year of degree in systems analyst where I learned C. In
					the second year I realised that what I really liked was programming language and I went
					into web development, where I learned front-end and back-end.
				</p>
				<p>I am currently actively looking for a back-end developer job opportunity</p>
				<p>
					I like <strong>cats</strong>.
				</p>
				<a
					className='xl:ml-auto'
					href={pdf}
					download='CVJuliánYachelini'
				>
					<strong className='text-4xl'>download resume</strong>
				</a>
			</div>
		</section>
	)
})

export default Me
