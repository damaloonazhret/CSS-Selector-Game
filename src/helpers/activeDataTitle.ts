export const dataTitle = (element: HTMLDivElement, target: HTMLDivElement) => {
    element.classList.add('active');
    target.classList.add('active');
    target.addEventListener('mouseout', () => {
        element.classList.remove('active');
        target.classList.remove('active');
    });
};
