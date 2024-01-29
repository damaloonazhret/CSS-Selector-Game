import './table.scss';
import { LEVELS } from '../levels/levels';
import { Count } from '../level/drawLevel';
import { dataTitle } from '../../helpers/activeDataTitle';
import { TOTAL_LEVELS } from '../appView';

export const highLightTable = () => {
    const elementHtmlArray: HTMLDivElement[] = [];

    for (let i = 1; i <= TOTAL_LEVELS; i++) {
        const levelKey = `level${i}`;
        if (LEVELS[Count.levelCount - 1][levelKey]) {
            const elementHtml = document.getElementById(
                LEVELS[Count.levelCount - 1][levelKey] as string
            ) as HTMLDivElement;
            elementHtmlArray.push(elementHtml);
        }
    }

    const [
        elementHtmlFirst,
        elementHtmlSecond,
        elementHtmlThird,
        elementHtmlFourth,
        elementHtmlFifth,
        elementHtmlSixth,
        elementHtmlSeventh,
        elementHtmlEight,
        elementHtmlNinth,
        elementHtmlTenth,
    ] = elementHtmlArray;

    const fileWindow = document.querySelector('.table') as HTMLDivElement;

    fileWindow.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLDivElement;
        if (target.classList.contains('move')) {
            const tableId = target.id;
            const elementHtml = getElementHtml(tableId);

            if (elementHtml) {
                dataTitle(elementHtml, target);
            }
        } else {
            return;
        }

        function getElementHtml(tableId: string) {
            const levelCount = Count.levelCount - 1;
            const levelTables = LEVELS[levelCount];

            switch (tableId) {
                case levelTables.table1:
                    return elementHtmlFirst;
                case levelTables.table2:
                    return elementHtmlSecond;
                case levelTables.table3:
                    return elementHtmlThird;
                case levelTables.table4:
                    return elementHtmlFourth;
                case levelTables.table5:
                    return elementHtmlFifth;
                case levelTables.table6:
                    return elementHtmlSixth;
                case levelTables.table7:
                    return elementHtmlSeventh;
                case levelTables.table8:
                    return elementHtmlEight;
                case levelTables.table9:
                    return elementHtmlNinth;
                case levelTables.table10:
                    return elementHtmlTenth;
                default:
                    return null;
            }
        }
    });
};
