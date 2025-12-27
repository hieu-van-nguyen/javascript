// Create a URLSearchParams object from the current page's query string
const params = new URLSearchParams("?key=value&foo=bar");

// Retrieve specific query parameter values
const keyValue = params.get('key'); // 'value'
const fooValue = params.get('foo'); // 'bar'

// Example usage
console.log(keyValue); // Outputs: 'value'
console.log(fooValue); // Outputs: 'bar'
