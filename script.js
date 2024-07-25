document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function showCourse(index) {
        courses.forEach((course, i) => {
            if (i === index) {
                course.style.transform = 'translateX(0)';
            } else if (i < index) {
                course.style.transform = 'translateX(-100%)';
            } else {
                course.style.transform = 'translateX(100%)';
            }
        });
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % courses.length;
        showCourse(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + courses.length) % courses.length;
        showCourse(currentIndex);
    });

    showCourse(currentIndex);
});
