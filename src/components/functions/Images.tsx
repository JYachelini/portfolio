import React from 'react'
import { ImagesInterface } from '../../Interfaces/Images'

function Images({ src, description }:ImagesInterface, key:number) {
	return (
		<div key={key} className='flex justify-between flex-col'>
			<img src={src} alt={description} />
			<p className='text-center text-sm '>{description}</p>
		</div>
	)
}

export default Images
