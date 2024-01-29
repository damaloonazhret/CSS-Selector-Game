import { highLightTable } from './table/drawTable';
import { highLightEditor } from './editor/drawEditor';
import { selectLevel } from '../model/model';
import { levelStorageSetItem } from '../helpers/storage';
import { helpBtn } from '../helpers/helpBtn';
import { checkSelectorKeyboard } from '../helpers/checkSelectors';
const input = document.querySelector('.input-strobe') as HTMLInputElement;
export const TOTAL_LEVELS = 10;
export const startProject = () => {
    helpBtn(input);
    checkSelectorKeyboard(input);
    highLightTable();
    highLightEditor();
    selectLevel();
    levelStorageSetItem();
};
