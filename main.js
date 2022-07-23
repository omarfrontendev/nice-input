function animatedForm() {
    
    let arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextParent = parent.nextElementSibling;

            if (input.type === 'text') {

                validateUser(input, parent, nextParent);

            } else if (input.type === 'email') {

                validateEmail(input, parent, nextParent)
                
            } else if (input.type === 'password') {
                
                validateUser(input, parent, nextParent)

            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = ''
            })
        });

    });

};

function validateUser(user, parent, nextParent) {
    if (user.value.length < 6) {

        error('rgb(189, 87 , 87)');
        parent.style.animation = 'shake .5s ease';

    } else {

        error('rgb(87, 189 , 130)');
        parent.classList.add('innactive');
        parent.classList.remove('active');
        nextParent.classList.add('active');
    }
}
function validateEmail(email, parent, nextParent) {
    
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email.value)) {

        error('rgb(87, 189 , 130)');
        parent.classList.add('innactive');
        parent.classList.remove('active');
        nextParent.classList.add('active')

    } else {

        error('rgb(189, 87 , 87)');
        parent.style.animation = 'shake .5s ease';

    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();

function finish() {
    
    const hearts = document.querySelectorAll('.fa-heart');

    hearts.forEach(heart => {
        heart.addEventListener('click', () => {

            const lastParent = heart.parentElement;
            lastParent.style.animation = 'shake-two 1s linear';

            lastParent.addEventListener('animationend', () => {
                lastParent.style.animation = ''
            })
        })
    })
};

finish();