import React from 'react'
import ClipboardCopy from './functions/ClipboardCopy'

function RightSidebar() {
	return (
		<div className='right_sidebar'>
			{/* <a href="">juliyachedev@gmail.com</a> */}
			<ClipboardCopy copyText='juliyachedev@gmail.com' />
		</div>
	)
}

export default RightSidebar
