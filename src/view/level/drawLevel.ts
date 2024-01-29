import { spanAll } from '../../helpers/storage';

export class Count {
    public static levelCount = 1;
}
export const spanInfoAll = document.querySelectorAll('.level li p');

export const activeLevel = (count: number) => {
    spanAll.forEach((el) => {
        spanInfoAll[Number(el.id) - 1].classList.remove('active');
        if (el.id === String(count)) {
            spanInfoAll[Number(el.id) - 1].classList.add('active');
        }
    });
};
