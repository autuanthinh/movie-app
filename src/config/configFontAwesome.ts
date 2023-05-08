import { library } from '@fortawesome/fontawesome-svg-core';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';

type ListIcons = Parameters<typeof library.add>;

const listIcon: ListIcons = [
  // Solid
  fas.faMagnifyingGlass,
  fas.faCheck,
  fas.faPlus,
  fas.faBookmark,
  fas.faTrash,
  fas.faChevronUp,
  fas.faVideoSlash,

  // Regular
  far.faBookmark,

  // Brand
];

const initIcon = () => library.add(...listIcon);

export default initIcon;
