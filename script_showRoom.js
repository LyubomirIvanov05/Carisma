const bookmarkIcon = document.querySelectorAll('.bookmark');

bookmarkIcon.forEach((bookmarkIcon) => {
    bookmarkIcon.addEventListener('click', () => {
        if (bookmarkIcon.classList.contains('fa-regular')) {
            bookmarkIcon.classList.remove('fa-regular');
            bookmarkIcon.classList.add('fa-solid');
        } else {
            bookmarkIcon.classList.remove('fa-solid');
            bookmarkIcon.classList.add('fa-regular');
        }
    });
});

