import { Count } from '../view/level/drawLevel';
import { LEVELS } from '../view/levels/levels';
import { typeWriter } from '../helpers/helpBtn';

describe('typeWriter', () => {
    let value: HTMLInputElement;
    // let i: number;

    beforeEach(() => {
        value = document.createElement('input');
        value.classList.add('input-strobe');
        document.body.appendChild(value);
        // i = 0;
    });

    afterEach(() => {
        value.remove();
    });

    it('should append characters to the input value', async () => {
        value.value = '';
        LEVELS[Count.levelCount - 1].selector = 'test';
        await typeWriter();
        await new Promise((resolve) => setTimeout(resolve, 0));
        const updatedValue = document.querySelector('.input-strobe') as HTMLInputElement;
        expect(updatedValue.value).toBe('test');
    });

    it('should wait 200ms between appending each character', async () => {
        LEVELS[Count.levelCount - 1].selector = 'test';
        const startTime = Date.now();
        await typeWriter();
        const elapsedTime = Date.now() - startTime;
        expect(elapsedTime).toBeGreaterThan(800);
        expect(elapsedTime).toBeLessThan(1000);
    });
});
