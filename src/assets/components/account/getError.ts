function getError(element: HTMLElement | null) {
    element?.classList.add('error');
    element!.style.marginLeft = '0px';
    (function () {
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            if (timePassed % 2 == 0) {
                element!.style.marginLeft = '1px';
            } else {
                element!.style.marginLeft = '-1px';
            };
            if (timePassed > 200) {
                element?.classList.remove('error');
                clearInterval(timer);
                element!.style.marginLeft = '0px';
            };
        }, 20);
    })();
}
export default getError;