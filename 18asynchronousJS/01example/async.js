const first = () => {
    console.log('Hey there!');
    second();
    console.log('the end');
}

const second = () => {

    setTimeout(() => {
        console.log('Async time out!');
    }, 2000);
}

first();