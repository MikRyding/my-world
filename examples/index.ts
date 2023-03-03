import { HNode } from '@hiberworld/code-kit';
import { createAnimationExample } from './animation/createAnimationExample';
import { createExample } from './createExample';
import { createDocsExample } from './docs/createDocsExample';
import { createPathOfObjects } from './helpers/createPathOfObjects';
import { createImagesExample } from './images/createImagesExample';

export const createExamples = () => {
  const examples: HNode = { children: [] };

  examples.children?.push(
    createExample(createDocsExample(), 0.3, [15, 2, -1], 'Documentation', 'Read the Hiber Code-Kit documentation', 70),
    createExample(
      createAnimationExample(),
      0.1,
      [8, 2, 12],
      'Animations',
      'Open createAnimationExample.ts to see the source code',
      20
    ),
    createExample(
      createImagesExample(),
      0.3,
      [-6, 2, 13.5],
      'Images',
      'Open createImagesExample.ts to see the source code',
      -35
    )
  );

  const walls = createPathOfObjects('en_m_jungle_temple_01_wall', 20, 2, [1, 1, 1], 90, 5, -1);
  const walls2 = createPathOfObjects('en_m_jungle_temple_01_wall', 20, 6, [1, 2, 1], 90);
  const doors = createPathOfObjects('en_m_jungle_temple_01_door', 20, 2, [1, 1, 1], 90, 0, 5);
  const waterfalls = createPathOfObjects('fx_particlesystem_waterfall_01', 20, 8, [1, 1, 1], 90, 0, 5);
  const trees = createPathOfObjects('palm_tree_2', 19, 15, [1, 1, 1], -120);

  examples.children?.push(...walls, ...doors, ...waterfalls, ...walls2, ...trees);

  return examples;
};
