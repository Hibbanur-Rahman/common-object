const objectOptions = document.querySelectorAll('.object-option');
const submitButton = document.querySelector('.submit-button');


let chosenObject;
objectOptions.forEach(option => {
    option.addEventListener('click', () => {
        objectOptions.forEach(option => {
            option.classList.remove('selected');
        });
        option.classList.add('selected');
        chosenObject = option.style.backgroundColor;
    });
});


