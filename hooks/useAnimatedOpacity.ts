import { useEffect, useRef } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { Animated } from 'react-native'

const useAnimatedOpacity = <T>(values: T[], value: T, duration: number | undefined = 100) => {
    const fade = useRef(new Animated.Value(values.includes(value) ? 1 : 0)).current

    useEffect(() => {
        Animated.timing(fade, {
            toValue: values.includes(value) ? 1 : 0,
            duration,
            useNativeDriver: false,
        }).start()
    }, [values, value, duration, fade])

    return fade
}

export default useAnimatedOpacity
