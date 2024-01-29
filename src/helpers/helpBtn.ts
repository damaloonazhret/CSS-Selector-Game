import { LEVELS } from '../view/levels/levels';
import { Count } from '../view/level/drawLevel';
import { localStorageHelpSave } from './storage';

function getElement<T extends HTMLElement>(selectorOrId: string): T {
    const element = document.querySelector(selectorOrId) || document.getElementById(selectorOrId);

    if (element) {
        return element as T;
    }
    throw new Error(`Element with selector or id ${selectorOrId} not found.`);
}

export async function typeWriter() {
    const value = getElement<HTMLInputElement>('.input-strobe');
    const selector = LEVELS[Count.levelCount - 1].selector;

    for (let i = 0; i < selector.length; i++) {
        value.value += selector[i];
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
}

export const helpBtn = (input: HTMLInputElement) => {
    const helpBtn = getElement<HTMLHeadingElement>('help');

    helpBtn.addEventListener('click', async () => {
        input.value = '';
        await typeWriter();
        const checkedLevelMark = document.getElementById(String(Count.levelCount))?.classList.contains('checked');

        if (!checkedLevelMark) {
            const helpedLevel = document.getElementById(String(Count.levelCount));
            helpedLevel?.classList.add('helped');
            localStorageHelpSave(String(Count.levelCount));
        }
    });
};
