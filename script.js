document.addEventListener("DOMContentLoaded", function() {
        const daysEle = document.querySelector('#daysValue');
        const hrEle = document.querySelector('#hourValue');
        const minEle = document.querySelector('#minValue');
        const secEle = document.querySelector('#secValue');
        const row1=document.querySelector('#row1')
        const row2=document.querySelector('#row2')
        const p=document.querySelector('#row1 p')
 
    function countdown(){
        const currentDate=new Date();
        const targetDate=new Date("september 27, 2024 00:00:00");
        const diff=targetDate-currentDate
        
        //calculating remaining days,hours,min,seconds        
        const days=Math.floor(diff/(24*60*60*1000))
        daysEle.innerHTML=days.toString().padStart(2,0);
        console.log(days);

        //remaining hours diveded by hours 60*60*1000 gives ms in hour
        const hours=Math.floor((diff% (1000 * 60 * 60 * 24)) / (60*60*1000))
        hrEle.innerHTML=hours.toString().padStart(2,0);
        console.log(hours);

        //remaining time diveded by min.  60*1000 gives ms in one min
        const min=Math.floor((diff%(60*60*1000))/(60*1000))
        minEle.innerHTML=min.toString().padStart(2,0);
        console.log(min);

        //remaining 
        const sec=Math.floor((diff%(60*1000))/(1000))
        secEle.innerHTML=sec.toString().padStart(2,0);
        console.log(sec);  
        
        if(diff<=0){
            daysEle.innerHTML = "00";
            hrEle.innerHTML = "00";
            minEle.innerHTML = "00";
            secEle.innerHTML = "00";
            p.innerHTML="Day Is Here";
            row2.innerHTML="🎉 Happy Devara Day 🎉"

           document.body.classList.add("countdown-ended")
        //    document.body.classList.add("ended")

            return ;
        }
    }
    countdown();
    setInterval(countdown,1000);


     
    // function time(){
    //     const date = new Date();
    //     // daysEle.innerHTML = date.getDate().toString().padStart(2, '0');
    //     hrEle.innerHTML = date.getHours().toString().padStart(2, '0');
    //     minEle.innerHTML = date.getMinutes().toString().padStart(2, '0');
    //     secEle.innerHTML = date.getSeconds().toString().padStart(2, '0');
    // }

    // time();
    // setInterval(time, 1000);

});
