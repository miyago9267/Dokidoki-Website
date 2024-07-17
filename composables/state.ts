import type { IMainState } from '@/types';

export const mainState = reactive<IMainState>({
    theme: "dark",
    menuCollapse: false,
});