export default function checksText(selInputs, ifChecks) {
    const inputs = document.querySelectorAll(selInputs);

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/./g, function (char) {
                if (/\p{sc=Cyrillic}| |\./u.test(char)) {
                    return char;
                } else {
                    return '';
                }
            });
        });
    });
}