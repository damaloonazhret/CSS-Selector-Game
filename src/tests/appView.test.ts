import { LEVELS } from '../view/levels/levels';
import { Count } from '../view/level/drawLevel';
import { dataTitle } from '../helpers/activeDataTitle';
import { layoutDraw } from '../model/model';
import { falseSelector, trueSelector } from '../helpers/checkSelectors';

describe('falseSelector', () => {
    let mockEditor: HTMLDivElement;

    beforeEach(() => {
        mockEditor = document.createElement('div') as HTMLDivElement;
    });

    afterEach(() => {
        // Очистка после каждого теста
    });

    it('should add "shake" class to the editor', () => {
        // Вызов функции, которую необходимо протестировать
        falseSelector(mockEditor);

        // Проверка ожидаемых результатов
        expect(mockEditor.classList.contains('shake')).toBe(true);
    });

    it('should remove "shake" class from the editor after animationend event', () => {
        // Вызов функции, которую необходимо протестировать
        falseSelector(mockEditor);

        // Генерация события animationend
        const animationEndEvent = new Event('animationend');
        mockEditor.dispatchEvent(animationEndEvent);

        // Проверка ожидаемых результатов
        expect(mockEditor.classList.contains('shake')).toBe(false);
    });
});

describe('dataTitle', () => {
    let mockEditorElement: HTMLDivElement;
    let mockEditorTarget: HTMLDivElement;

    beforeEach(() => {
        mockEditorElement = document.createElement('div') as HTMLDivElement;
        mockEditorTarget = document.createElement('div') as HTMLDivElement;
    });

    afterEach(() => {
        // Clean after test
    });

    it('should add "active" class to the element and target', () => {
        dataTitle(mockEditorElement, mockEditorTarget);
        expect(mockEditorElement.classList.contains('active')).toBe(true);
        expect(mockEditorTarget.classList.contains('active')).toBe(true);
    });

    it('should remove "active" class from the element and target after mouseout event', () => {
        dataTitle(mockEditorElement, mockEditorTarget);
        const mouseOutEvent = new Event('mouseout');
        mockEditorElement.dispatchEvent(mouseOutEvent);
        mockEditorTarget.dispatchEvent(mouseOutEvent);
        expect(mockEditorElement.classList.contains('active')).toBe(false);
        expect(mockEditorTarget.classList.contains('active')).toBe(false);
    });
});

describe('layoutDraw', () => {
    let table: HTMLDivElement;
    let markup: HTMLDivElement;

    beforeEach(() => {
        table = document.createElement('div');
        table.classList.add('game-wrapper');
        markup = document.createElement('div');
        markup.classList.add('markup');
        document.body.appendChild(table);
        document.body.appendChild(markup);
    });

    afterEach(() => {
        table.remove();
        markup.remove();
    });

    it('should update table and markup when level is between 1 and 10', () => {
        table.innerHTML =
            '<div class="table-wrapper">\n            <div class="table-surface"></div>\n            <div class="table">\n                <plate class="data strobe move" id="level1FirstPlate" data-title="<plate></plate>"></plate>\n                <plate class="data strobe move" id="level1SecondPlate" data-title="<plate></plate>"></plate>\n            </div>\n        </div>\n        <div class="table-edge">\n            <div class="table-leg"></div>\n            <div class="table-leg"></div>\n        </div>';
        markup.innerHTML =
            '<div>&lt;div class="table"&gt;\n                        <div class="move" id="level1HtmlFirst">&lt;plate /&gt;</div>\n                        <div class="move" id="level1HtmlSecond">&lt;plate /&gt;</div>\n                        &lt;/div&gt;\n                    </div>';
        layoutDraw('1');
        expect(table.innerHTML).toBe(LEVELS[0].tableHtml);
        expect(markup.innerHTML).toBe(LEVELS[0].markup);
    });

    it('should not update table and markup when level is outside the range', () => {
        table.innerHTML = 'Initial table';
        markup.innerHTML = 'Initial markup';
        layoutDraw('0');
        expect(table.innerHTML).toBe('Initial table');
        expect(markup.innerHTML).toBe('Initial markup');
        layoutDraw('11');
        expect(table.innerHTML).toBe('Initial table');
        expect(markup.innerHTML).toBe('Initial markup');
    });
});

describe('trueSelector', () => {
    let input: HTMLInputElement;
    let plates: (HTMLDivElement | null)[];
    beforeEach(() => {
        input = document.createElement('input');
        plates = [];
        document.body.appendChild(input);
    });
    afterEach(() => {
        input.remove();
    });
    it('should add "clean" class to plates specified in LEVELS', () => {
        const plate1 = document.createElement('div');
        plate1.id = 'plate1';
        document.body.appendChild(plate1);
        LEVELS[Count.levelCount - 1].table1 = 'plate1';
        const plate2 = document.createElement('div');
        plate2.id = 'plate2';
        document.body.appendChild(plate2);
        LEVELS[Count.levelCount - 1].table2 = 'plate2';
        trueSelector(input);
        expect(plate1.classList.contains('clean')).toBe(true);
        expect(plate2.classList.contains('clean')).toBe(true);
    });
    it('should not add "clean" class to plates not specified in LEVELS', () => {
        const plate1 = document.createElement('div');
        plate1.id = 'plate1';
        document.body.appendChild(plate1);

        const plate2 = document.createElement('div');
        plate2.id = 'plate2';
        document.body.appendChild(plate2);

        trueSelector(input);

        expect(plate1.classList.contains('clean')).toBe(false);
        expect(plate2.classList.contains('clean')).toBe(false);
    });

    it('should clear the value of the input', () => {
        input.value = 'test';
        trueSelector(input);
        expect(input.value).toBe('');
    });
});
