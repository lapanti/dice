import { useEffect, useRef } from 'react'

import { interval } from '../lib/rolling'

/** https://usehooks-typescript.com/react-hook/use-interval */

const useInterval = (callback: () => void, run: boolean) => {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (run) {
            const id = setInterval(() => savedCallback.current(), interval)

            return () => clearInterval(id)
        }
    }, [run])
}

export default useInterval
