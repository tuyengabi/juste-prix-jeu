
//  CAROUSEL TEXT 

const carousel = document.getElementsByClassName('carousel__text')[0];
let arrLocation = Array.from(document.getElementsByClassName('carousel__location'));
let count = 0;

// FUNCTION OF CAROUSEL TEXT


function toggleClassHidden(index) {
    return arrLocation[index].classList.toggle('carousel__location--hidden');
}

function verifyCount(arr, number) {
    if (number == arr.length) {
        return count = 0;
    }
    if (number < 0) {
        return count = arr.length - 1;
    } else {
        return count;
    }
}


