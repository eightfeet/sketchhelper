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
    'fryingpan' |
    'pear' |
    'apricot' |
    'banana' |
    'pumpkin' |
    'scene' ,
    opacity: number,
    showEdige: boolean,
    visible: boolean,
    shadow: boolean
  }[]
type GuideType = {
  tag: number;
  showText: boolean;
  visible: boolean
}[]

export const store = proxy<{ list: ListType; guide: GuideType}>({
  list: [],
  guide: [],
})
