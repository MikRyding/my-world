import { HNode, Vec3 } from '@hiberworld/code-kit';
import { createSign, createSignContent } from './helpers/createSign';

export const createExample = (
  example: HNode,
  miniatureScale: number,
  pos: Vec3,
  header: string,
  body: string,
  direction: number
) => {
  const wrapper: HNode = {
    transform: {
      pos,
      scale: [1, 1, 1],
      rot: [0, direction, 0],
    },
  };

  const miniature: HNode = {
    ...structuredClone(example),
    transform: { scale: [miniatureScale, miniatureScale, miniatureScale] },
  };

  const sign: HNode = {
    transform: {
      pos: [-5, 3, 3],
    },
    children: [createSignContent(header, body)],
  };

  const animatedExample: HNode = {
    keyframeAnimated: {
      loopBehaviour: 'RESTART',
    },
    children: [
      miniature,
      { keyframe: { easing: 'LINEAR', timestamp: 0 }, transform: { rot: [0, 0, 0] } },
      { keyframe: { easing: 'LINEAR', timestamp: 4 }, transform: { rot: [0, 180, 0] } },
      { keyframe: { easing: 'LINEAR', timestamp: 8 }, transform: { rot: [0, 360, 0] } },
    ],
  };

  const hoveringAnimatedExample: HNode = {
    keyframeAnimated: {
      loopBehaviour: 'RESTART',
    },
    children: [
      animatedExample,
      { keyframe: { easing: 'EASE_IN_OUT_QUAD', timestamp: 0 }, transform: { pos: [0, 1, 0] } },
      { keyframe: { easing: 'EASE_IN_OUT_QUAD', timestamp: 1 }, transform: { pos: [0, 1.2, 0] } },
      { keyframe: { easing: 'EASE_IN_OUT_QUAD', timestamp: 2 }, transform: { pos: [0, 1, 0] } },
    ],
  };

  const roadLength = 20;
  const distancePerItem = 3;
  const distance = roadLength * distancePerItem;

  const road: HNode = {
    children: Array(roadLength)
      .fill(0)
      .map((_, index) => ({
        prefabId: 'gpl_booster_plate_02',
        transform: { scale: [2, 2, 2], pos: [0, 0, index * distancePerItem], rot: [0, 180, 0] },
      })),
  };

  const fileSign = createSign(header, body);

  const islandFloor: HNode = {
    prefabId: 'smooth_rock_01',
    transform: { rot: [0, 0, 180], scale: [5, 5, 10], pos: [0, -1, 0] },
  };

  const island: HNode = {
    transform: { pos: [0, 0, distance + 22] },
    children: [islandFloor, example, fileSign],
  };

  const islandWrapper: HNode = {
    transform: { pos: [-5, 0, 0] },
    children: [road, island],
  };

  const podium: HNode = {
    prefabId: 'gpl_air_lift_01',
    transform: { scale: [1.5, 1.5, 1.5] },
  };

  wrapper.children = [podium, sign, hoveringAnimatedExample, islandWrapper];

  return wrapper;
};
