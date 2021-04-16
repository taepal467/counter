let counter = 0;

const spanValue = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains('increase')) {
            counter++;
        } else if (styles.contains('decrease')) {
            counter--;
        } else {
            counter = 0;
        }
        if (counter > 0) {
            spanValue.style.color = 'green';
        } else if (counter < 0) {
            spanValue.style.color = 'red'
        } else {
            spanValue.style.color = 'black';
        }
        spanValue.textContent = counter;
    }, false);
})