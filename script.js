const buttonTag=document.querySelector(".forbutton");
const cancelResult=document.querySelector(".forCancel")


const openToastAlert=(date)=>{
    cancelResult.innerHTML="";
    const currentDate=new Date();
    currentDate.setHours(currentDate.getHours()+24);
    const currentTime=currentDate.getTime();
    
    if(currentTime < date){    
    cancelResult.classList.add("toastAlert")
    cancelResult.append("Cancel Successful");
    time();
    }
    else{
    cancelResult.classList.add("toastAlert")
    cancelResult.append("Cancel Unsuccessful");
    time();

    }
    
   
}

const time=()=>{
    setTimeout(()=>{
        cancelResult.style.bottom=`0px`;
    }, 100);
    setTimeout(()=>{
        cancelResult.style.bottom=`-40px`;
    }, 4000);
}

buttonTag.addEventListener("click", ()=>{
    //                                |
    //                                |
    //                                .

    const orderDate=new Date(2023, 4, 14);
    const date=orderDate.getTime();
    openToastAlert(date);
})