import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface IProject {
	id: number
	title: string
	stack: string[]
	description: string
	website: string
	github: string
	image: string
	status: string
}

function Project({ project }: { project: IProject }) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<motion.article
			className='max-w-[250px] sm:max-w-[450px] w-full sm:w-auto relative flex flex-col z-10 transition-shadow shadow-md hover:shadow-xl rounded-lg cursor-pointer'
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.96 }}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className={`${isOpen && ''}`}>
				<div className='flex justify-center relative'>
					<img
						className='w-full h-[150px] sm:h-[250px] rounded-t-lg'
						src={project.image}
						alt={project.title}
					/>
					<div
						className={`flex flex-col m-2 sm:m-5 gap-1 rounded p-5 absolute top-0 bottom-0 overflow-y-auto opacity-0 transition-opacity bg-background ${
							isOpen && 'opacity-100'
						}`}
					>
						<h3 className='text-lg sm:text-xl capitalize'>{project.title}</h3>
						<span className='text-xs sm:text-sm text-main'>{project.status}</span>
						<span className='text-[10px] sm:text-xs'>{project.description}</span>
					</div>
				</div>
				<div className='flex flex-col p-5 pt-2 pb-1 gap-2'>
					<div className='flex gap-2'>
						{project.stack.map((tech, index) => {
							return (
								<div key={index} className={'stackIcon '}>
									<span className={`${tech} rounded p-1 text-xs`}>{tech}</span>
								</div>
							)
						})}
					</div>
					<h3 className='text-2xl capitalize'>{project.title}</h3>
					<div className='flex gap-3'>
						<motion.span
							whileHover={{ textDecorationLine: 'underline' }}
							className='text-sm text-blue-500 '
						>
							<a href={project.website}>website</a>
						</motion.span>
						<motion.span
							whileHover={{ textDecorationLine: 'underline' }}
							className='text-sm text-[#c8c7f1]'
						>
							<a href={project.github}>github</a>
						</motion.span>
					</div>
				</div>
			</div>
		</motion.article>
	)
}

export default Project
