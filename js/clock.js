let name = prompt("Merhaba, isminizi giriniz: ");
let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
myName.innerHTML = name;

function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var dayNumber = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (day == 1) {
        day = "Pazartesi";
    } else if (day == 2) {
        day = "Salı";
    } else if (day == 3) {
        day = "Çarşamba";
    } else if (day == 4) {
        day = "Perşembe";
    } else if (day == 5) {
        day = "Cuma";
    } else if (day == 6) {
        day = "Cumartesi";
    } else if (day == 7) {
        day = "Pazar";
    }

    if (month == 0) {
        month = "Ocak";
    } else if (month == 1) {
        month = "Şubat";
    } else if (month == 2) {
        month = "Mart";
    } else if (month == 3) {
        month = "Nisan";
    } else if (month == 4) {
        month = "Mayıs";
    } else if (month == 5) {
        month = "Haziran";
    } else if (month == 6) {
        month = "Temmuz";
    } else if (month == 7) {
        month = "Ağustos";
    } else if (month == 8) {
        month = "Eylül";
    } else if (month == 9) {
        month = "Ekim";
    } else if (month == 10) {
        month = "Kasım";
    } else if (month == 11) {
        month = "Aralık";
    }

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    let time = `${hour}:${minute}:${second} 
    ${day}, ${dayNumber} ${month} ${year}  `
    myClock.innerHTML = time
    setTimeout(showTime, 1000);
}

showTime();