export function typeWriter(element, text, speed = 40, callback) {

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if (callback) {

                callback();

            }

        }

    }

    type();

}