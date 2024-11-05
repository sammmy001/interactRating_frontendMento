//switch within tabs
function openTab(pageName){
    var  container = document.getElementsByClassName("container");
    //initially hide both tabs
    for (i = 0 ; i < container.length; i++ ){
         container[i].style.display = "none";
    }
    //opens one (with an opposite relation)
    document.getElementById(pageName).style.display = "block";
}


    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            //gets data of button toggled
          const targetId = this.getAttribute('data-target');
          document.getElementById('demo').innerText = targetId;

          //toggles button individually at a time
        buttons.forEach(btn => btn.classList.remove('btnToggle'));
        button.classList.add('btnToggle');
        })
        })

   
     
