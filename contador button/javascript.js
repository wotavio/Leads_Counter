// const value = document.querySelector('value');
// const plusButton = document.querySelector('plus');
// const minusButton = document.querySelector('minus');
// const resetButton = document.querySelector('reset');

// const updateValue = () => {
//     value.innerHTML = count
// }


// let count = 0;
// let intervalId = 0;

// plusButton.addEventListener('mousedown', () => {
// intervalId = setInterval(() => {
//     count += 1;
//     updateValue();
// }, 100);
// });


// minusButton.addEventListener('mousedown', () => {
//     intervalId = setInterval(() => {
//         count -= 1;
//         updateValue();
//     }, 100);
//     });


// resetButton.addEventListener('click', () => {
//         count = 0;
//         updateValue();
//     });

// document.addEventListener('mouseup', () => clearInterval(intervalId))
const counters = document.querySelectorAll('.counter');

const updateValue = (counter, count) => {
    const value = counter.querySelector('.value');
    value.innerHTML = count;
};

const startInterval = (counter, operation) => {
    const intervalId = setInterval(() => {
        let count = parseInt(counter.dataset.count);
        counter.dataset.count = operation(count);
        updateValue(counter, counter.dataset.count);
    }, 100);
    counter.dataset.intervalId = intervalId;
};

const stopInterval = (counter) => {
    clearInterval(parseInt(counter.dataset.intervalId));
};

document.addEventListener('mouseup', () => {
    counters.forEach(counter => stopInterval(counter));
});

counters.forEach(counter => {
    const plusButton = counter.querySelector('.plus');
    const minusButton = counter.querySelector('.minus');
    const resetButton = counter.querySelector('.reset');
    
    plusButton.addEventListener('mousedown', () => startInterval(counter, count => count + 1));
    
    minusButton.addEventListener('mousedown', () => startInterval(counter, count => count - 1));
    
    resetButton.addEventListener('click', () => {
        counter.dataset.count = 0;
        updateValue(counter, counter.dataset.count);
    });
});