import { proxy } from 'valtio'

type ListType = {
    name: 'box' | 'cone' | 'sphere' | 'cylinder',
    opacity: number,
    showEdige: boolean,
    visible: boolean
  }[]

export const store = proxy<{ list: ListType;}>({
  list: [],
})

  