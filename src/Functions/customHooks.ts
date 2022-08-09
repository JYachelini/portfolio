import { useEffect, useState } from "react"

export const useIntersectionObserver = (elementRef:any, { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }) => {
	const [entry, setEntry] = useState<any>()

	console.log(elementRef)

	const frozen = entry?.isIntersecting && freezeOnceVisible

	const updateEntry = ([entry]:any) => {
		setEntry(entry)
	}

	useEffect(() => {
		const node = elementRef?.current
		const hasIOSupport = !!window.IntersectionObserver

		if (!hasIOSupport || frozen || !node) return

		const observerParams = { threshold, root, rootMargin }
		const observer = new IntersectionObserver(updateEntry, observerParams)

		observer.observe(node)

		return () => observer.disconnect()
	}, [elementRef, threshold, root, rootMargin, frozen])
	return entry
}


export const useIntersection = (element: any, rootMargin: any)=> {
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

