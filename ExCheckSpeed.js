

function checkspeed(speed){

    speedLimit = 70;
    speedperpiont = 5;

    if(speed<=speedLimit + speedperpiont) 
        console.log("ok")
    else{ 
        const points = Math.floor(((speed-speedLimit)/speedperpiont))

        if(points >=12)
            console.log("License suspended")
        else
            console.log("point",points)
    }


    // const speedInt = Math.floor(speed);

    // if(speedInt<75) {
    //     console.log("ok")
    // }
    // else if(speedInt >=75 && speedInt<80) {
    //     console.log("ponit 1")
    // } else if(speedInt >=80 && speedInt<85) {
    //     console.log("ponit 2")
    // }else if(speedInt >=85 && speedInt<90) {
    //     console.log("ponit 3")
    // }else if(speedInt >=90 && speedInt<95) {
    //     console.log("ponit 4")
    // }else if(speedInt >=95 && speedInt<100) {
    //     console.log("ponit 5")
    // }else if(speedInt >=100 && speedInt<105) {
    //     console.log("ponit 6")
    // }
}
checkspeed(71)