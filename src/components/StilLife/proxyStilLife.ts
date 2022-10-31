import { proxy } from 'valtio'

type ListType = {
    name: 'box' | 'cone' | 'sphere' | 'cylinder' | 'coffeeCup' | 'bust',
    opacity: number,
    showEdige: boolean,
    visible: boolean,
    shadow: boolean
  }[]
type GuideType = {
  tag: number;
  visible: boolean
}[]

export const store = proxy<{ list: ListType; guide: GuideType}>({
  list: [],
  guide: [],
})

  