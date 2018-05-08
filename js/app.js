document.querySelector('.main span').style.display = "none";
// document.querySelector('.main span').classList.add('bouncing-loader');
// document.querySelector('.bouncing').style.display = "none";

setTimeout(function(){
    // document.querySelector('.bouncing').style.display = "initial";
    document.querySelector('#bouncing').classList.add('bouncing-loader');
},4000);

setTimeout(function(){
    document.querySelector('#bouncing').classList.remove('bouncing-loader');
    document.querySelector('.main span').style.display = "block";
},5000);
