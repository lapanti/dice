import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../store/store'

import { useSelector } from 'react-redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
