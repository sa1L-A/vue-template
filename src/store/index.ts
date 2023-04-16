import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number;
}

export const storeKey: InjectionKey<Store<State>> = Symbol('storeKey');

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state: State) {
      state.count += 1;
    },
  },
});

/**
 * Customize userStore
 * @returns store
 */
export function useStore() {
  return baseUseStore(storeKey);
}
