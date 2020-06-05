import { createContext } from 'react'
import { MyData } from '../interfaces/MyData'

export const MyContext = createContext<MyData>({ data: { names: ['Robert', 'Richard', 'Harold']} })