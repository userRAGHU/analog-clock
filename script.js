let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');
 //  digital clock style
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
//text
let txt = document.querySelector('#text');

   setInterval (() => {

        let day = new Date();
        let ss = day.getSeconds() * 6;
        let mm = day.getMinutes() * 6;
        let hh = day.getHours() * 30;
    
        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
        //  digital clock style
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM";
        //greeting txt message
        let greeting = h < 12 ? "Good Morning" : h >= 12 && h < 18 ? "Good Afternoon" : "Good evening";
        // convert 24hr to 12hr clock
        if(h > 12) {
        h = h - 12;
        } else if(h == 0){
          h = 12;
        }
        // add zero before single digit
        h = (h < 10) ? "0" + h : h
        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;
        txt.innerHTML = greeting;
        
        // (optional)
        //  let hour = new Date().getHours();
        //  let welcomeTypes = ['Good Morning', 'Good afternoon', 'Good evening'];
        //  let welcomeText = '';
        //  if (hour < 12) welcomeText = welcomeTypes[0];
        //  else if (hour < 12 && hour < 18) welcomeText = welcomeTypes[1];
        //  else welcomeText = welcomeTypes[2];
        //  txt.innerHTML = welcomeText;
   })

   