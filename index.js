
import React from 'react'

export function useSkipFirstEffect(func, deps) {
	let didMount = React.useRef()

	React.useEffect(() => {
		if(didMount.current) return func()
		didMount.current = true
	}, deps)
}

export function useSkipFirstLayoutEffect(func, deps) {
	let didMount = React.useRef()

	React.useLayoutEffect(() => {
		if(didMount.current) return func()
		didMount.current = true
	}, deps)
}
