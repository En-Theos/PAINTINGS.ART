export default function addMask(input) {
    const inputs = document.querySelectorAll(input);

    function createMask() {
        let matrix = '+7 (___) ___ __ __';
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            if (/[_\d]/.test(a) && i < val.length) {
                return val.charAt(i++);
            } else {
                if (i >= val.length) {
                    return '';
                } else {
                    return a;
                }
            }
        });
      
        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            this.setSelectionRange(this.value.length, this.value.length);
        }
    }

    inputs.forEach(item => {
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
        item.addEventListener('blur', createMask);
    });
}