import { ListItem } from './types';

export const createListFromArray = (
  arr:
    | string[]
    | {
        label: string;
        link: string;
      }[]
): ListItem[] => {
  return arr.map((item): ListItem => {
    if (typeof item === 'string') {
      return {
        id: Math.random(),
        label: item,
      };
    } else {
      return {
        id: Math.random(),
        label: item.label,
        link: item.link,
      };
    }
  });
};
