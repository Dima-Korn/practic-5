import { listMemory } from './js/list_memory';
import refs from './js/refs';
import { KEY } from './js/constants';
import { allListDelete } from './js/remove_element';
const { favList } = refs;

listMemory(favList, KEY);
allListDelete(favList, KEY);
