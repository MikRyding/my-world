import { HNode } from '@hiberworld/code-kit';

export const rotatingNode = (node: HNode, time: number): HNode => ({
  keyframeAnimated: {
    loopBehaviour: 'RESTART',
  },
  children: [
    node,
    { keyframe: { easing: 'LINEAR', timestamp: 0 }, keyframeAxisAngleRotation: { angle: 0, axis: [1, 0, 0] } },
    {
      keyframe: { easing: 'LINEAR', timestamp: time },
      keyframeAxisAngleRotation: { angle: -3600, axis: [1, 0, 0] },
    },
  ],
});
