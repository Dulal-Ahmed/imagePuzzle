
 storeImageId = null;
 storeImageClass = null;
 dragAllowimg = false;
 let seconds = 100;
 let setTimeId = null;

 let timerDisplay = document.getElementById('time_s');

// when image come over div , div will allow drop events to
let divAllowDropEvent = (catchEvent)=>{
    catchEvent.preventDefault(); 
}
// when image start drug this function will run
let strastImageDrag = (catchEvent)=>{
    storeImageId = catchEvent.target.id;
    catchEvent.dataTransfer.setData("text", storeImageId);
    storeImageClass = document.getElementById(storeImageId).className;
}
// when won the puzzle this function will be called
let winningFunction =()=>{
    dragAllowimg = false;
    clearTimeout(setTimeId);
    document.getElementById('time_s').textContent ="";
    document.getElementById("result").textContent = `Congratulations Your Solve the puzzle within ${seconds} Seconds. and Remain ${100 - seconds} Seconds`; 
}

// when drop image this function will run 
let whenimageDrop = (catchEvent)=>{
    catchEvent.preventDefault();
  
 const currentTargetImageId = catchEvent.target.id;
 const currentTargetImageClass = document.getElementById(currentTargetImageId).className;
  
   // console.log(currentTargetImageId ,currentTargetImageClass, "||||", storeImageId,storeImageClass);
    if(currentTargetImageId && storeImageId && dragAllowimg == true){

        const currentTargetImage = document.getElementById(currentTargetImageId);
        const storeImage = document.getElementById(storeImageId);

        const PreStoreImage = storeImage.src;
        const PreStoreImageClass = storeImageClass;
        storeImage.className = currentTargetImageClass;
        currentTargetImage.className = PreStoreImageClass;
        storeImage.src = currentTargetImage.src;
        currentTargetImage.src = PreStoreImage;

        storeImageId = null;
     if(
          document.getElementById('imagePiece1').className == 'imagePiece1'
       && document.getElementById('imagePiece2').className == 'imagePiece2'
       && document.getElementById('imagePiece3').className == 'imagePiece3'
       && document.getElementById('imagePiece4').className == 'imagePiece4'
       && document.getElementById('imagePiece5').className == 'imagePiece5'
       && document.getElementById('imagePiece6').className == 'imagePiece6'
       && document.getElementById('imagePiece7').className == 'imagePiece7'
       && document.getElementById('imagePiece8').className == 'imagePiece8'
       && document.getElementById('imagePiece9').className == 'imagePiece9'
     ){ winningFunction() }
    }

} 

//// timer counter 

 let timeUpdater = ()=>{
    timerDisplay.textContent = seconds;
    seconds--;
   if(seconds >= 0){
   setTimeId =  setTimeout(timeUpdater, 1000);
   }else{
    timerDisplay.textContent = "Times Up ";
    dragAllowimg = false;
   }
 } 
 // triger function for display time and allow drag image
 let startTimer =()=>{
     dragAllowimg = true;
    if(!setTimeId){
        timeUpdater();
    }
 }
// testing section 
 