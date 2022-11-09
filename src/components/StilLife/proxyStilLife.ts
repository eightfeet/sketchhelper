import { proxy } from 'valtio'

type ListType = {
  name: 
  'bottle' | 
  'box' | 
  'cone' | 
  'conecross' |
  'sphere' | 
  'shapea' | 
  'shapeb' | 
  'shapec' | 
  'shaped' | 
  'cylinder' | 
  'cylindereight' |
  'coffeeCup' | 
  'bust' | 'apple' | 'foot' | 'venus' |
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
  'scene',
  opacity: number,
  showEdige: boolean,
  visible: boolean,
  shadow: boolean
}[]
type GuideType = {
  tag: number;
  showText: boolean;
  visible: boolean;
  color: string;
}[]

export const store = proxy<{
  list: ListType; 
  guide: GuideType, 
  current?: number; 
  currentGuid?: number; 
  autoRotate?: boolean;
  hideGuide: boolean;
  guideWidth: number;
  planeColor: string;
}>({
  list: [],
  current: undefined,
  currentGuid: undefined,
  guide: [],
  autoRotate: false,
  hideGuide: false,
  guideWidth: 1.5,
  planeColor: '#666'
})

export const unvisibleData = () => {

};

export const pickObj = (
  index: number,
) => {
  store.list = store.list.map((item, ind) => ({
    ...item,
    visible: item.visible ? false : index === ind,
  }));
  store.guide = store.guide.map((item, ind) => ({
    ...item,
    visible: false,
  }));
  store.list.some((el, ind) => {
    store.current = el.visible ? ind : undefined;
    return el.visible;
  });
}

export const pickGuid = (
  index: number,
) => {
  store.guide = store.guide.map((item, ind) => ({
    ...item,
    visible: item.visible ? false : index === ind,
  }));
  store.list = store.list.map((item, ind) => ({
    ...item,
    visible: false,
  }));
  store.guide.some((el, ind) => {
    store.currentGuid = el.visible ? ind : undefined;
    return el.visible;
  });
}
