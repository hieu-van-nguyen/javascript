const a = '1';
let result = '';
switch (a) {
    case 1:
        result = 'Number 1';
        break;
    case '1':
        result = 'String 1';
        break;
    default:
        result = 'I don\'t know';
        break;    
}

console.log(result);