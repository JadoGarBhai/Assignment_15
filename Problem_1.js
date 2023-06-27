function job(callback1, callback2) {
    function callback1(){
        console.log("Print 1 time after 2 seconds")
    };

    function callback2(){
        console.log("Print 3 times with an interval of 1 second.")
    };
    
    let interval1 = setInterval(callback1, 2000)
    let interval2 = setInterval(callback2, 1000);

    setTimeout(callback3, 3000);
    function callback3(){
        clearInterval(interval1);
    };

    setTimeout(callback4, 4000);
    function callback4() {
        clearInterval(interval2);
    };
};

module.exports = job;
console.log(module.exports);