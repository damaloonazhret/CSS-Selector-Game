import { activeLevel, Count } from '../view/level/drawLevel';
import { highLightTable } from '../view/table/drawTable';
import { highLightEditor } from '../view/editor/drawEditor';
import { layoutDraw } from '../model/model';
import { TOTAL_LEVELS } from '../view/appView';

export const localStorageSave = (levelNumber: string) => {
    localStorage.setItem(`level${levelNumber}`, `${levelNumber}`);
};

export const localStorageHelpSave = (levelNumber: string) => {
    localStorage.setItem(`levelHelp${levelNumber}`, `${levelNumber}`);
};

export const localStorageSaveCurrentLevel = (level: string) => {
    localStorage.setItem('levelCurrent', level);
};

export const localStorageSaveCheckCount = (count: string) => {
    localStorage.setItem('levelCheckedCount', count);
};

export const spanAll = document.querySelectorAll('.level span');

export const levelStorageSetItem = async () => {
    const resetBtn = document.querySelector('.reset-progress') as HTMLDivElement;

    function switchLevel(level: number) {
        Count.levelCount = level;
        layoutDraw(String(level));
        highLightEditor();
        highLightTable();
    }

    resetBtn.addEventListener('click', () => {
        localStorage.clear();
        spanAll.forEach((el) => {
            el.classList.remove('checked');
            el.classList.remove('helped');
            switchLevel(1);
        });
    });
    spanAll.forEach((el) => {
        for (let i = 1; i <= TOTAL_LEVELS; i++) {
            if (localStorage.getItem(`level${i}`)) {
                if (el.id === localStorage.getItem(`level${i}`)) {
                    el.classList.add('checked');
                }
            }

            if (localStorage.getItem(`levelHelp${i}`)) {
                if (el.id === localStorage.getItem(`level${i}`)) {
                    el.classList.add('helped');
                }
            }
        }
    });
    let count = 1;
    async function processArray() {
        for (let i = 1; i <= TOTAL_LEVELS; i++) {
            if (localStorage.getItem(`level${i}`)) count++;
        }
    }
    await processArray().then(() => {
        if (localStorage.getItem('levelCurrent')) {
            activeLevel(Number(localStorage.getItem('levelCurrent')));
            switchLevel(Number(localStorage.getItem('levelCurrent')));
        } else {
            activeLevel(1);
            switchLevel(count);
        }
    });
};
