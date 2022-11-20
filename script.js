function run(){
    var input = Math.floor(Math.random() * 16) + 1
    for(let i=1; i<=16; i++){
        var tdvalue = document.getElementById("dump"+i).innerText
        var tdid = document.getElementById("dump"+i)
        if(input==tdvalue){
            tdid.style.backgroundColor="red"
            // tdid.id="ducse"
        }else{
            tdid.style.backgroundColor="white"
        }
      document.getElementById("center").innerText=input
    }
    
}
function run2(){
    var input = Math.floor(Math.random() * 16) + 1
    for(let i=1; i<=16; i++){
        var tdvalue = document.getElementById("dump2"+i).innerText
        var tdid = document.getElementById("dump2"+i)
        if(input==tdvalue){
            (tdid.style.backgroundColor="red")
        }else{
            tdid.style.backgroundColor="white"
        }
      document.getElementById("center2").innerText=input
    }

}

let fun=setInterval(run2, 200)
function start2(){
    window.location.reload()
}

function stop2(){
    clearInterval(fun)
}
