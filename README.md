# react-skip-first-effect
 Simple react effect hook which skip the initial rendering

## Usage example
```js

import { useSkipFirstEffect, useSkipFirstLayoutEffect } from 'react-skip-first-effect'

function Component() {
	useSkipFirstEffect(() => {
		console.log('like that')
	}, [])

	return null
}
```
