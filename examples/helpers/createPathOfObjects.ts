import { HNode, Vec3 } from '@hiberworld/code-kit';
import { prefabs } from '@hiberworld/code-kit';

export const createPathOfObjects = (
  id: keyof typeof prefabs,
  radius = 15,
  y = 0,
  scale: Vec3 = [1.5, 0.4, 1],
  rot = 0,
  skip?: number,
  only?: number
): HNode[] => {
  const items = [];
  const size = 4;
  const itemsCount = Math.ceil(2 * radius * Math.PI) / size;

  for (let index = 0; index <= itemsCount; index++) {
    if (typeof skip !== 'undefined' && index % skip === 0) {
      continue;
    }
    if (typeof only !== 'undefined' && index % only !== 0) {
      continue;
    }
    const element: HNode = {
      prefabId: id,
      transform: {
        scale,
        pos: [
          radius * Math.cos((index * 2 * Math.PI) / itemsCount),
          y,
          radius * -Math.sin((index * 2 * Math.PI) / itemsCount),
        ],
        rot: [0, (index / itemsCount) * 360 + rot, 0],
      },
    };
    items.push(element);
  }
  return items;
};
