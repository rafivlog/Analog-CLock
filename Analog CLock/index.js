setInterval(() => {

    d = new Date();
    document.getElementById("demooo").innerHTML = d.getDay();
    document.getElementById("demoo").innerHTML = d.getMonth();
    document.getElementById("demo").innerHTML = d.getFullYear();
   
    


    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    year  = d.getFullYear();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);