console.log("Connected!");
let arr = [];

window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const text = document.querySelector('.container>p');
    const count = document.getElementById('count');

    if (audio) {
        key.classList.add("playing");
        audio.currentTime = 0; //make audio play over and over again
        audio.play();
        //console.log(arr);
        //console.log(e.key);
        arr.push(e.key);
        //console.log(arr);
        text.innerHTML = text.innerHTML + e.key + ' ';
        count.innerHTML = arr.length;
        if(arr.length%50==0) {
            text.innerHTML+='<hr>';
        }
    }

});

window.addEventListener("keyup", function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.remove("playing");
    }
});