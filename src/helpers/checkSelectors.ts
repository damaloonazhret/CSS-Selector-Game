import { LEVELS } from '../view/levels/levels';
import { activeLevel, Count } from '../view/level/drawLevel';
import { localStorageSave, localStorageSaveCheckCount, localStorageSaveCurrentLevel, spanAll } from './storage';
import { layoutDraw } from '../model/model';
import { highLightEditor } from '../view/editor/drawEditor';
import { highLightTable } from '../view/table/drawTable';
import { TOTAL_LEVELS } from '../view/appView';

export const falseSelector = (editor: HTMLDivElement) => {
    editor.classList.add('shake');
    editor.addEventListener('animationend', () => {
        editor.classList.remove('shake');
    });
};

export const trueSelector = (input: HTMLInputElement) => {
    const plates: (HTMLDivElement | null)[] = [];

    for (let i = 1; i <= TOTAL_LEVELS; i++) {
        const tableKey = `table${i}`;

        if (LEVELS[Count.levelCount - 1][tableKey]) {
            const plate = document.getElementById(
                LEVELS[Count.levelCount - 1][tableKey] as string
            ) as HTMLDivElement | null;
            plates.push(plate);
        }
    }

    plates.forEach((plate) => {
        if (plate) {
            plate.classList.add('clean');
        }
    });
    input.value = '';
};

export const checkSelectorKeyboard = (input: HTMLInputElement) => {
    let checkedLevels: number;
    if (localStorage.getItem('levelCheckedCount')) {
        checkedLevels = Number(localStorage.getItem('levelCheckedCount'));
    } else {
        checkedLevels = 0;
    }

    const nextLevel = () => {
        trueSelector(input);
        const levelCurrent = document.getElementById(String(Count.levelCount)) as HTMLSpanElement | null;

        if (levelCurrent && !levelCurrent.classList.contains('checked')) {
            checkedLevels++;
            levelCurrent.classList.add('checked');
            localStorageSave(levelCurrent.id);

            setTimeout(() => {
                Count.levelCount++;
                localStorageSaveCheckCount(String(checkedLevels));

                if (checkedLevels >= TOTAL_LEVELS) {
                    alert('You Win!');
                    localStorage.clear();
                    checkedLevels = 0;
                    spanAll.forEach((el) => {
                        el.classList.remove('checked');
                        el.classList.remove('helped');
                    });
                }

                if (Count.levelCount > 10) {
                    Count.levelCount = 10;
                }

                layoutDraw(String(Count.levelCount));
                highLightEditor();
                highLightTable();
                activeLevel(Count.levelCount);
                localStorageSaveCurrentLevel(String(Count.levelCount));
            }, 400);
        }
    };

    const editor = document.querySelector('.editor') as HTMLDivElement;
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.toLowerCase() === LEVELS[Count.levelCount - 1].selector) {
            nextLevel();
        } else if (e.key === 'Enter') {
            falseSelector(editor);
        }
    });

    const enterBtn = document.querySelector('.enter-button') as HTMLDivElement;
    enterBtn.addEventListener('click', () => {
        if (input.value.toLowerCase() === LEVELS[Count.levelCount - 1].selector) {
            nextLevel();
        } else {
            falseSelector(editor);
        }
    });
};
