const counters = document.querySelectorAll('.counter');
const totalValue = document.querySelector('.total-value');

function updateTotal() {
    let total = 0;
    counters.forEach(counter => {
        total += parseInt(counter.querySelector('.value').textContent);
    });
    totalValue.textContent = total;
}

function updateCounter(counter, operation) {
    let count = parseInt(counter.dataset.count);
    counter.dataset.count = operation(count);
    counter.querySelector('.value').textContent = counter.dataset.count;
    updateTotal();
}

function startInterval(counter, operation) {
    const intervalId = setInterval(() => {
        updateCounter(counter, operation);
    }, 100);
    counter.dataset.intervalId = intervalId;
}

function stopInterval(counter) {
    clearInterval(parseInt(counter.dataset.intervalId));
}

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
        counter.querySelector('.value').textContent = counter.dataset.count;
        updateTotal();
    });
});