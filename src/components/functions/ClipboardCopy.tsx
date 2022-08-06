import React, { useState } from 'react'

interface Text {
	copyText: string
}

function ClipboardCopy({ copyText }: Text) {
	const [isCopied, setIsCopied] = useState(false)

	const copyTextToClipboard = async (text: string) => {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text)
		} else {
			return document.execCommand('copy', true, text)
		}
	}

	const handleCopyClick = () => {
		copyTextToClipboard(copyText)
			.then(() => {
				setIsCopied(true)
				setTimeout(() => {
					setIsCopied(false)
				}, 1500)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div>
			<span className={`copied ${isCopied ? 'active' : ''}`}>Copied!</span>
			<span
				className='text-center w-full self-center cursor-pointer items-center'
				onClick={handleCopyClick}
			>
				{copyText}
			</span>
		</div>
	)
}

export default ClipboardCopy
