import { motion } from 'framer-motion'
import { ImagesInterface } from '../../Interfaces/Images'

function Images({ src, description, href }: ImagesInterface, key: number) {
	return (
		<motion.a
			whileHover={{ scale: 1.05 }}
			href={href}
			key={key}
			className='flex justify-between flex-col z-10'
		>
			<div className='flex h-full'>
				<img src={src} className='m-auto' alt={description} />
			</div>
			<p className='text-center text-sm '>{description}</p>
		</motion.a>
	)
}

export default Images
