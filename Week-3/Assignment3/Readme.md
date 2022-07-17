Code
====

``function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
    const[increment,log] = createIncrement();
    increment();
    increment();
    increment();
    log();// What is logged?
    ``

Explanation
===========

log() will print "Count is 0", because the message varible is only run once under the parent function createIncrement() and it is not under the increment function. We have index.js whic is a js file reference to this function.
