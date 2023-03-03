import { HNode } from '@hiberworld/code-kit';

export const animateAroundCircle = (node: HNode, radius: number, time: number) => {
  const rotation: HNode = {
    transform: {
      pos: [0, 0, 0],
    },
    children: [node],
  };

  node.transform = { pos: [radius, 0, 0] };

  const animation: HNode = {
    keyframeAnimated: {
      loopBehaviour: 'RESTART',
    },
    children: [
      rotation,
      { keyframe: { easing: 'LINEAR', timestamp: 0 }, transform: { rot: [0, 0, 0] } },
      { keyframe: { easing: 'LINEAR', timestamp: time / 2 }, transform: { rot: [0, 180, 0] } },
      { keyframe: { easing: 'LINEAR', timestamp: time }, transform: { rot: [0, 360, 0] } },
    ],
  };

  return animation;
};
