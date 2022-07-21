import React, { useEffect, useState } from 'react'

//https://www.webtips.dev/webtips/react-hooks/element-in-viewport

function useIntersection(element: any, rootMargin: any) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ rootMargin }
		)

		element.current && observer.observe(element.current)

		return () => observer.unobserve(element.current)
	}, [])

	return isVisible
}

export default useIntersection
