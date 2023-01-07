class clock {
    constructor() {
        this.time = new Date()
    }

    print_time(id) {
        var span = document.getElementById(id)

        var d = this.time
        var s = d.getSeconds()
        var m = d.getMinutes()
        var h = d.getHours()

        let TextContext = 
        ("0" + h).substring(-2) + ":" +
        ("0" + m).substring(-2) + ":" +
        ("0" + s).substring(-2)

        span.innerHTML = TextContext
    }

    printtime() {
        setInterval(print_time(id), 1000)
    }
}

var myclock1 = new clock()
console.log(myclock1)

export default clock