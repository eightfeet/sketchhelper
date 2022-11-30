import { proxy } from 'valtio'

type ListType = {
  name: string,
  obj: {
    component: string;
    name: string;
    label: string;
    thumbnail: string;
  },
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

type FrameworkType = {
  tag: number;
  showText: boolean;
  visible: boolean;
  color: string;
  radius: number;
}[]

export const store = proxy<{
  list: ListType;
  guide: GuideType,
  framework: FrameworkType;
  current?: number;
  currentGuid?: number;
  currentFramework?: number;
  autoRotate?: boolean;
  hideGuide: boolean;
  hideFramework: boolean;
  guideWidth: number;
  frameworkWidth: number;
  planeColor: string;
  light: 'point' | 'directional',
  fixedPointLight: boolean,
}>({
  list: [],
  guide: [],
  framework: [],
  current: undefined,
  currentGuid: undefined,
  currentFramework: undefined,
  autoRotate: false,
  hideGuide: false,
  hideFramework: false,
  guideWidth: 1.5,
  frameworkWidth: 1.5,
  planeColor: '#666',
  light: 'directional',
  fixedPointLight: false
})

export const unvisibleData = () => {
  store.list = store.list.map((item, ind) => ({
    ...item,
    visible: false,
  }));
  store.guide = store.guide.map((item, ind) => ({
    ...item,
    visible: false,
  }));
  store.framework = store.framework.map((item, ind) => ({
    ...item,
    visible: false,
  }));
  store.current = undefined;
  store.currentGuid = undefined;
  store.currentFramework = undefined;
};

export const pickObj = (
  index: number,
) => {
  if (store.list[index].visible === true) {
    store.list[index].visible = false;
    store.current = undefined;
    return;
  }
  unvisibleData();
  store.list = store.list.map((item, ind) => ({
    ...item,
    visible: item.visible ? false : index === ind,
  }));
  store.list.some((el, ind) => {
    store.current = el.visible ? ind : undefined;
    return el.visible;
  });
}

export const pickGuid = (
  index: number,
) => {
  if (store.guide[index].visible === true) {
    store.guide[index].visible = false;
    store.currentGuid = undefined;
    return;
  }
  unvisibleData();
  store.guide = store.guide.map((item, ind) => ({
    ...item,
    visible: item.visible ? false : index === ind,
  }));
  store.guide.some((el, ind) => {
    store.currentGuid = el.visible ? ind : undefined;
    return el.visible;
  });
  console.log('store.guide[index]', store.guide[index]);

}

export const pickFramework = (
  index: number,
) => {
  if (store.framework[index].visible === true) {
    store.framework[index].visible = false;
    store.currentFramework = undefined;
    return;
  }
  unvisibleData();
  store.framework = store.framework.map((item, ind) => ({
    ...item,
    visible: item.visible ? false : index === ind,
  }));
  store.framework.some((el, ind) => {
    store.currentFramework = el.visible ? ind : undefined;
    return el.visible;
  });
}
