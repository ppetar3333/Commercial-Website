const request = new XMLHttpRequest();
const sliderRight = document.getElementById('slider_right');
const sliderLeft = document.getElementById('slider_left');
const li_one = document.querySelector('.slide_one');
const li_four = document.querySelector('.slide_four');
sliderLeft.classList.add('disabled');

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const pictures = JSON.parse(request.responseText);
        for (id in pictures) {
            const picture = pictures[id];
            fillInData(picture);
        }
    }
}
request.open('GET', 'https://great-app-94e7d-default-rtdb.firebaseio.com' + '/pictures/' + '.json');
request.send();

const fillInData = (picture) => {
    document.querySelector('.base_photo').setAttribute('src', picture.slide_one + '.png');
    document.querySelector('.second_photo').setAttribute('src', picture.slide_two + '.png');
    document.querySelector('.third_photo').setAttribute('src', picture.slide_three + '.png');
    document.querySelector('.fourth_photo').setAttribute('src', picture.slide_four + '.png');
}

sliderRight.addEventListener('click', () => {
    const { current_slide, current_dot } = currentSlideAndDot();
    const next_slide = current_slide.nextElementSibling;
    next_slide.classList.add('current_slide_photo');
    next_slide.style.display = 'block';
    const next_dot = current_dot.nextElementSibling;
    next_dot.classList.add('current_slide_dots');
    if (next_slide.className === li_four.className) {
        sliderRight.classList.add('disabled');
    } else if (current_slide.className === li_one.className) {
        sliderLeft.classList.remove('disabled');
    } else {
        sliderRight.classList.remove('disabled');
    } 
});
sliderLeft.addEventListener('click', () => {
    const { current_slide, current_dot } = currentSlideAndDot();
    const previous_slide = current_slide.previousElementSibling;
    previous_slide.classList.add('current_slide_photo');
    previous_slide.style.display = 'block';
    const previous_dot = current_dot.previousElementSibling;
    previous_dot.classList.add('current_slide_dots');
    if (previous_slide.className === li_one.className) {
        sliderLeft.classList.add('disabled');
    } else if (current_slide.className === li_four.className) {
        sliderRight.classList.remove('disabled');
    } else {
        sliderLeft.classList.remove('disabled');
    } 
});
const currentSlideAndDot = () => {
    const current_slide = document.querySelector('.current_slide_photo');
    current_slide.classList.remove('current_slide_photo');
    current_slide.style.display = 'none';
    const current_dot = document.querySelector('.current_slide_dots');
    current_dot.classList.remove('current_slide_dots');
    return { current_slide, current_dot };
}