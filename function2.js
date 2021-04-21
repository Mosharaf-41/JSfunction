// call back function .........

function explain_callback(name, age, task) {
    console.log('Hello', name);
    console.log('your age ', age);
    task();
}

function washHand() {
    console.log('wash hand with soap');
}

function takeShower() {
    console.log('Take shower');
}
function sFace() {
    console.log("Scroll Facebook but don't like any post" );
}
explain_callback('Sogir uddin', 17, washHand);
explain_callback('Siam', 15, takeShower);
explain_callback('Ayman',7,sFace);