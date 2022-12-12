function countDown (hours, minutes, secondes){
    this.timeH = hours
    this.timeM = minutes
    this.timeS = secondes

    this.counter = function () {
        let hours = document.getElementById('heures')
        let minutes = document.getElementById('minutes')
        let secondes = document.getElementById('secondes')

        let addHours = this.timeH;
        hours.innerHTML = addHours

        // 3 button pour ajouter : heures / minutes et secondes

        if (addHours <= 9) {
            hours.innerHTML = "0" + "<br> hours "
        }
        document.getElementById('addH').addEventListener("click", () => {
            setTimeout( () => {
                if (addHours <= 9) {
                    hours.innerHTML = "0" + (addHours += 1) + "<br> hours "
                }
                else if (10 > addHours <= 60) {
                    hours.innerHTML = (addHours += 1) + "<br> hours "
                }
                if (addHours === 60) {
                    addHours = 0
                    hours.innerHTML = "00"
                }
            }, 200)
        })

        let addMin = this.timeM;
        minutes.innerHTML = addMin

        if (addMin <= 9) {
            minutes.innerHTML = "0" + "<br> minutes "
        }
        document.getElementById('addM').addEventListener("click", () => {
            setTimeout( () => {
                if (addMin <= 9) {
                    minutes.innerHTML = "0" + (addMin += 1) + "<br> minutes "
                }
                else if (10 > addHours <= 60) {
                    minutes.innerHTML = (addMin += 1) + "<br> minutes "
                }
                if (addMin === 60) {
                    addMin = 0
                    minutes.innerHTML = "00"
                }
            }, 200)
        })

        let addSec = this.timeS;
        secondes.innerHTML = addSec

        if (addSec <= 9) {
            secondes.innerHTML = "0" + "<br> secondes "
        }
        document.getElementById('addS').addEventListener("click", () => {
            setTimeout( () => {
                if (addSec <= 9) {
                    secondes.innerHTML = "0" + (addSec += 1) + "<br> secondes "
                }
                else if (10 > addHours <= 60) {
                    secondes.innerHTML = (addSec += 1)  + "<br> secondes "
                }
                if (addMin === 60) {
                    addSec = 0
                    secondes.innerHTML = "00"
                }
            }, 200)
        })

        // variable "interval" dans ce scope, pour récupérer après
        let interval

        let count = () => {
            interval = setInterval( () => {


                // heures

                if (addMin === -1) {
                    addMin = 59
                    minutes.innerHTML = "59"
                    if (addHours < 11) {
                        hours.innerHTML = "0" + (addHours -= 1) + "<br> hours "
                    }
                    else if (10 >= addHours <= 60) {
                        hours.innerHTML = (addHours -= 1) + "<br> hours "
                    }
                }

                // ùinutes

                if (addSec === -1) {
                    addSec = 59
                    secondes.innerHTML = "59"
                    if (addMin < 11) {
                        minutes.innerHTML = "0" + (addMin -= 1) + "<br> minutes "
                    }
                    else if (10 >= addMin <= 60) {
                        minutes.innerHTML = (addMin -= 1) + "<br> minutes "
                    }
                }

                // secondes

                if (addSec < 11) {
                    secondes.innerHTML = "0" + (addSec -= 1) + "<br> seconds "
                }
                else if (10 >= addMin <= 60) {
                    secondes.innerHTML = (addSec -= 1) + "<br> seconds "
                }
                if (addMin === 0 && addHours === 0 && addSec === -1){
                    addSec = 0
                    secondes.innerHTML = "0" + "<br> seconds "
                }

            }, 1000)
        }

        // start du chrono

        document.getElementById('play').addEventListener("click", () => {
            count()
        })

        // reload de la page, et donc du compteur

        document.getElementById('reset').addEventListener("click", () => {
            location.reload();
        })

        // pause

        document.getElementById('stop').addEventListener("click", () => {
            clearTimeout(interval)
        })
    }
}

let counter1 = new countDown(0, 0, 0)
counter1.counter()