new Vue({
    el: '#scale'
})
new Vue({
    el: '#head-group'
})


$(document).on("mousemove", function() {
    var now = new Date().getTime()
    $("body").removeClass("cursor-hide")
    setTimeout(function() {
        (function(time) {
            if (time == lastCursorUpdateTime) {
                $("body").addClass("cursor-hide")
            }
        })(now)
    }, 3000)
    lastCursorUpdateTime = now
})

function update() {
    var date = new Date()
    var second = date.getSeconds()
    var minute = date.getMinutes()
    var hour = date.getHours()
    var secondDeg = second * 6
    var minuteDeg = minute * 6 + secondDeg / 60
    var hourDeg = hour * 30 + minuteDeg / 12
    var strSecond = second.toString().padStart(2, '0')
    var strMinute = minute.toString().padStart(2, '0')
    var strHour = hour.toString().padStart(2, '0')
    $("#second").css("transform", `rotate(${secondDeg}deg)`)
    $("#minute").css("transform", `rotate(${minuteDeg}deg)`)
    $("#hour").css("transform", `rotate(${hourDeg}deg)`)
    $("#time").html(`${strHour}:${strMinute}:${strSecond}`)

    var centreDeg = secondDeg * 2
    $("#centre-a").css("transform", `rotate(${centreDeg}deg)`)
    $("#centre-b").css("transform", `rotate(${-centreDeg}deg)`)
}
update()
setInterval(update, 1000)