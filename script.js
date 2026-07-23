document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-btn');

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('show');
        }, 600 + (index * 150)); 
    });
});