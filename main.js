    var tempblock;

document.addEventListener("DOMContentLoaded", function(){
    var rightcard = false
    flowy(document.getElementById("canvas"), drag, release, snapping);
    


    function snapping(drag, first) {
        return true;
    }
    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;

    }
    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
            setTimeout(() => {
                var divs = document.querySelectorAll("#canvas .blockelem");
                divs.forEach(el => el.addEventListener('click', event => {
                  doneTouch(event)
                }));

            }, 150)

        }
    }


    document.getElementById("close").addEventListener("click", function(){
       if (rightcard) {
           rightcard = false;
           document.getElementById("properties").classList.remove("expanded");
           setTimeout(function(){
                document.getElementById("propwrap").classList.remove("itson"); 
           }, 300);
            tempblock.classList.remove("selectedblock");
       } 
    });
// removeblock
    document.getElementById("removeblock").addEventListener("click", function(){
        var processorName = document.getElementById("processName").value;
        tempblock.querySelector(".blocktitle").textContent = processorName;
        console.log(processorName);
   if (rightcard) {
       document.getElementById("properties").classList.remove("expanded");
       document.getElementById("processName").value = "";
       tempblock.querySelector(".blockdesc").style = "visibility: hidden";
       
       setTimeout(function(){
            document.getElementById("propwrap").classList.remove("itson"); 
       }, 300);
        tempblock.classList.remove("selectedblock");
   } 
});
var doneTouch = function (event) {
    tempblock = event.target.closest(".block");
    var whatToDisp = "processor-" + tempblock.querySelector(".blockelemtype").value.toString();
    console.log(document.getElementById(whatToDisp), whatToDisp)
    document.querySelectorAll(".processor").forEach((el) => {

        el.classList.add("noshow");
    });
    document.getElementById(whatToDisp).classList.remove("noshow");
    document.getElementById("propwrap").classList.remove("itson");
    rightcard = true;
    setTimeout(function(){
        document.querySelectorAll("#canvas .selectedblock").forEach((el) => {
            el.classList.remove("selectedblock");
        })
        document.getElementById("properties").classList.add("expanded");
        document.getElementById("propwrap").classList.add("itson");
        tempblock.classList.add("selectedblock");
    }, 150);
    
    }
});
