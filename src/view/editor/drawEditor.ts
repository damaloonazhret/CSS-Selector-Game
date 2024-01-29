import { LEVELS } from '../levels/levels';
import { Count } from '../level/drawLevel';
import { dataTitle } from '../../helpers/activeDataTitle';
import { TOTAL_LEVELS } from '../appView';

export const highLightEditor = () => {
    const elements: HTMLDivElement[] = [];
    const levels = LEVELS[Count.levelCount - 1];

    for (let i = 1; i <= TOTAL_LEVELS; i++) {
        const tableKey = `table${i}`;
        if (levels[tableKey]) {
            elements[i] = document.getElementById(levels[tableKey] as string) as HTMLDivElement;
        }
    }

    const fileWindow = document.querySelector('.markup div') as HTMLDivElement;

    fileWindow.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLDivElement;

        if (target.classList.contains('move')) {
            for (let i = 1; i <= TOTAL_LEVELS; i++) {
                const levelKey = `level${i}`;

                if (target.id === levels[levelKey]) {
                    dataTitle(elements[i], target);
                    break;
                }
            }
        }
    });
};
