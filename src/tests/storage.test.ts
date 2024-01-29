import {
    localStorageHelpSave,
    localStorageSave,
    localStorageSaveCheckCount,
    localStorageSaveCurrentLevel,
} from '../helpers/storage';

describe('localStorageSave', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should save levelNumber in localStorage', () => {
        const levelNumber = '1';
        localStorageSave(levelNumber);

        expect(localStorage.getItem(`level${levelNumber}`)).toBe(levelNumber);
    });

    it('should overwrite existing value in localStorage', () => {
        const levelNumber = '1';
        localStorage.setItem(`level${levelNumber}`, 'oldValue');
        localStorageSave(levelNumber);

        expect(localStorage.getItem(`level${levelNumber}`)).toBe(levelNumber);
    });
});

describe('localStorageHelpSave', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should save levelNumber in localStorage with prefix "levelHelp"', () => {
        const levelNumber = '1';
        localStorageHelpSave(levelNumber);

        expect(localStorage.getItem(`levelHelp${levelNumber}`)).toBe(levelNumber);
    });

    it('should overwrite existing value in localStorage', () => {
        const levelNumber = '1';
        localStorage.setItem(`levelHelp${levelNumber}`, 'oldValue');
        localStorageHelpSave(levelNumber);

        expect(localStorage.getItem(`levelHelp${levelNumber}`)).toBe(levelNumber);
    });
});

describe('localStorageSaveCurrentLevel', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should save current level in localStorage with key "levelCurrent"', () => {
        const level = '1';
        localStorageSaveCurrentLevel(level);

        expect(localStorage.getItem('levelCurrent')).toBe(level);
    });

    it('should overwrite existing value in localStorage', () => {
        const oldLevel = '1';
        const newLevel = '2';

        localStorage.setItem('levelCurrent', oldLevel);
        localStorageSaveCurrentLevel(newLevel);

        expect(localStorage.getItem('levelCurrent')).toBe(newLevel);
    });
});

describe('localStorageSaveCheckCount', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should save count in localStorage with key "levelCheckedCount"', () => {
        const count = '5';
        localStorageSaveCheckCount(count);

        expect(localStorage.getItem('levelCheckedCount')).toBe(count);
    });

    it('should overwrite existing value in localStorage', () => {
        const oldCount = '5';
        const newCount = '10';

        localStorage.setItem('levelCheckedCount', oldCount);
        localStorageSaveCheckCount(newCount);

        expect(localStorage.getItem('levelCheckedCount')).toBe(newCount);
    });
});
