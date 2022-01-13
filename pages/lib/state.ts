import { atomWithStorage } from 'jotai/utils';

export const toolsState = atomWithStorage<any[]>('tools', []);
export const queryState = atomWithStorage<string>('query', '');
