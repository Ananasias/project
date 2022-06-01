let number = 0;
while (true) {
    ++number;
    let value = prompt('Введите значение').toLowerCase();
    if (value === 'break') {
        break;
    }
    else if (value === 'continue') {
        continue;
    }
    alert(number);
}