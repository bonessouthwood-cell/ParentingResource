// Parallax scrolling effect for hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = (window.pageYOffset * 0.5) + 'px';
    }
});

// Hover animations for course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Placeholder filter function (to be expanded with backend)
function filterCourses() {
    const ageFilter = document.getElementById('ageFilter')?.value || '';
    const presentationFilter = document.getElementById('presentationFilter')?.value || '';
    const courseList = document.getElementById('courseList');
    if (!courseList) return;

    // Placeholder courses (to be replaced with dynamic data)
    const courses = [
        { age: '0-5', presentation: 'anxiety', title: 'Anxiety Management for Toddlers' },
        { age: '6-11', presentation: 'adhd', title: 'ADHD Strategies for School Age' },
        { age: '12-18', presentation: 'depression', title: 'Teen Depression Support' }
    ];

    courseList.innerHTML = '';
    courses.filter(course => 
        (ageFilter === '' || course.age === ageFilter) &&
        (presentationFilter === '' || course.presentation === presentationFilter)
    ).forEach(course => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `<div class="course-card">
            <img src="https://via.placeholder.com/300x200?text=${course.title}" alt="${course.title}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-blue">${course.title}</h5>
                <p class="card-text text-white">A course for parents.</p>
                <a href="#" class="btn btn-gold">Learn More</a>
            </div>
        </div>`;
        courseList.appendChild(col);
    });
}

// Initialize filters on page load for get-started.html
document.addEventListener('DOMContentLoaded', () => {
    const ageFilter = document.getElementById('ageFilter');
    const presentationFilter = document.getElementById('presentationFilter');
    if (ageFilter && presentationFilter) {
        ageFilter.addEventListener('change', filterCourses);
        presentationFilter.addEventListener('change', filterCourses);
        filterCourses();
    }
});