import { proxy } from 'valtio'

type ListType = {
    name: 'bottle' | 'box' | 'cone' | 'sphere' | 'cylinder' | 'coffeeCup' | 'bust' | 'apple' | 'foot' | 'venus' |
    'bowl' |
    'butterknife' |
    'cup' |
    'cuphandle' |
    'fork' |
    'plate' |
    'pot' |
    'scoop' |
    'scoopstuff' |
    'spatula' |
    'spoon' |
    'fryingpan',
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
