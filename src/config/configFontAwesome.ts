import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';

type ListIcons = Parameters<typeof library.add>;

const listIcon: ListIcons = [
  // Solid
  fas.faMagnifyingGlass,

  // Regular
  far.faBookmark

  // Brand
];

export default () => library.add(...listIcon);
