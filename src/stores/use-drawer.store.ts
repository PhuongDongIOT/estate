import { StateCreator, create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from './createSelectors';
import { subscribeWithSelector } from 'zustand/middleware';


type DrawerStates = {
  goal: number;
};
type DrawerActions = {
  onDrawer: (adjustments: number) => void;
};
const createDrawerSlice: StateCreator<
  DrawerStates & DrawerActions,
  [
    ['zustand/immer', never],
    ['zustand/subscribeWithSelector', never],
  ]
> = (set, get) => ({
  goal: 350,
  onDrawer: (adjustments: number) =>
    set(state => {
      state.goal = Math.max(200, Math.min(400, state.goal + adjustments));
    })
});

export const useDrawerStore = createSelectors(
  create<DrawerStates & DrawerActions>()(
    immer(
      subscribeWithSelector(createDrawerSlice)
    ),
  ),
);

// Listening to all changes, fires synchronously on every change
const unsub = useDrawerStore.subscribe(console.log);
unsub();
