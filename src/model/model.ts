import { localStorageSaveCurrentLevel } from '../helpers/storage';
import { highLightEditor } from '../view/editor/drawEditor';
import { highLightTable } from '../view/table/drawTable';
import { activeLevel, Count } from '../view/level/drawLevel';
import { LEVELS } from '../view/levels/levels';
import { TOTAL_LEVELS } from '../view/appView';

export const layoutDraw = (targetValue: string | null) => {
    const table = document.querySelector('.game-wrapper') as HTMLDivElement;
    const markup = document.querySelector('.markup') as HTMLDivElement;
    const level = parseInt(targetValue || '0');
    if (level >= 1 && level <= TOTAL_LEVELS) {
        Count.levelCount = level as number;
        table.innerHTML = LEVELS[level - 1].tableHtml as string;
        markup.innerHTML = LEVELS[level - 1].markup as string;
    }
};

export const selectLevel = () => {
    const rightColumn = document.querySelector('.right-col') as HTMLTableSectionElement; // переносим в model
    rightColumn.addEventListener('click', (e) => {
        const target = e.target as HTMLLIElement;
        const targetValue = target.textContent?.substring(0, 2).trim() as string;
        if (Number(targetValue) != Count.levelCount) {
            localStorageSaveCurrentLevel(targetValue);
            layoutDraw(targetValue);
            activeLevel(Count.levelCount);
            highLightEditor();
            highLightTable();
        }
    });
};
