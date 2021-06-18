import { useEffect, useRef } from 'react'

import { delay } from '../lib/rolling'

/** https://usehooks-typescript.com/react-hook/use-timeout */

const useTimeout = (callback: () => void, run: boolean) => {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the timeout.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (run) {
            const id = setTimeout(() => savedCallback.current(), delay)

            return () => clearTimeout(id)
        }
    }, [run])
}

export default useTimeout
