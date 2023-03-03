import { HNode } from '@hiberworld/code-kit';

export const createDocsExample = () => {
  // Create documentation area
  const documentation: HNode = { children: [] };

  // Create first row of bookshelves
  for (let i = 0; i < 5; i++) {
    const bookshelf: HNode = {
      prefabId: 'en_p_bookshelf',
      transform: { pos: [-4 + i * 2, 0, 0], rot: [0, 180, 0] },
    };
    documentation.children?.push(bookshelf);
  }

  // Create second row of bookshelves
  for (let i = 0; i < 3; i++) {
    const bookshelf: HNode = {
      prefabId: 'en_p_bookshelf',
      transform: { pos: [-2 + i * 2, 3, 0], rot: [0, 180, 0] },
    };
    documentation.children?.push(bookshelf);
  }

  return documentation;
};
