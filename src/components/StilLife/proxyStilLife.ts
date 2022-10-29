import { proxy, useSnapshot } from 'valtio'

type ListType = {
    name: 'box' | 'cone' | 'sphere',
    opacity: number,
    showEdige: boolean,
    visible: boolean
  }[]

export const store = proxy<{ list: ListType;}>({
  list: [],
})

  