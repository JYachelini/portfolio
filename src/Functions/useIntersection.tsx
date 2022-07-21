import React, { useEffect, useState } from 'react'

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
