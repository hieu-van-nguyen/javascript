function a() {
    console.log('A!');
    return function() {
        console.log('B!');
    }
}

const newFunc = a();
newFunc();