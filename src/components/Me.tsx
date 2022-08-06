import React from 'react'

const Me = React.forwardRef((props, ref: any) => {
	return (
		<section id='Me' className='section_me'>
			<div ref={ref} className='section_me--presentation'>
				<h1>Hello.</h1>
				<h1>
					I'm <strong>Julián Yachelini</strong>,
				</h1>
				<h3>
					<strong>Backend Developer</strong>,
				</h3>
				<h6>Typescript lover.</h6>
			</div>
			<div className='flex flex-col justify-between section_me--aboutMe gap-4'>
				<h1>About me.</h1>
				<p>I'm a Backend Developer, created in Argentina.</p>
				<p>
					I did one year of degree in Systems Analyst where I learned C. In
					the second year I realised that what I really liked was programming and I went
					into Web Development, where I learned Front and Back.
				</p>
				<p>I am currently actively looking for a backend Development opportunity</p>
				<p>
					I like <strong>cats</strong>.
				</p>
				<a
					className='xl:ml-auto'
					href='./pdf/CV_JulianYachelini.pdf'
					download='CVJuliánYachelini'
				>
					<strong className='text-4xl'>Download CV</strong>
				</a>
			</div>
		</section>
	)
})

export default Me