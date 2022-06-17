

const stars = document.querySelectorAll('.star');
// const output = document.querySelectorAll('.output');
const output = document.getElementById("output");

for(x=0;x<stars.length;x++){

    stars[x].starValue = (x+1);
    // stars[x].addEventListener('click',function(){
    //         console.log("I am Clicked");
    //  })

    ["click","mouseover","mouseout"].forEach(function(e){
        stars[x].addEventListener(e,showRating);
    })
}

function showRating(e){
    let type = e.type;
    // console.log(type);

    let starValue = this.starValue;

    if(type === 'click'){
        if(starValue > 1){
            output.innerHTML = " You Rated This " + starValue + " Stars.";
            console.log(starValue);
        }
    }
    // console.log(starValue);

    stars.forEach(function(element,index){

        if(type === 'click'){
            if(index < starValue){
                element.classList.add("orange");
            }else{
                element.classList.remove("orange");
            }
        }
        if(type === 'mouseover'){
            if(index < starValue){
                element.classList.add("yellow");
            }else{
                element.classList.remove("yellow");
            }
        }
        if(type === 'mouseout'){
            
                element.classList.remove("yellow");
           
            
        }
    })
}

 function nextPage(){
    window.location.reload();
 }