function showGoalForm(){
  document.getElementById('goalPopUP').classList.toggle('active');

}

function showKpiForm(){
  document.getElementById('kpiPopUP').classList.toggle('active');
}

function showTaskForm(){
  document.getElementById('taskPopUP').classList.toggle('active');
}

function showKpiForm2(){
  document.getElementById('kpiPopUP2').classList.toggle('active');
}

function showTracking(){
  document.getElementsByClassName('tracking__container')[0].classList.toggle('active');
}

function showConfig(){

  document.getElementsByClassName('config__container')[0].classList.toggle('active');
  document.getElementsByClassName('tracking__container')[0].classList.remove('active');
}

let charts = Array.from(document.getElementsByClassName('chart'));
charts.forEach((item, i) => {
  item.addEventListener('contextmenu' , function(event){
    event.preventDefault();
    let x = event.offsetX + 'px';
    let y = event.offsetY + 'px';
    console.log(x,y);
    Array.from(document.getElementsByClassName('contextmenu__container')).forEach((menu, i) => {
      menu.classList.remove('active')
    });
    let cm = item.getElementsByClassName('contextmenu__container')[0];
    cm.style.top = y;
    cm.style.left = x;
    cm.classList.add('active');
  })
});

window.addEventListener('click', function(event){
  Array.from(document.getElementsByClassName('contextmenu__container')).forEach((menu, i) => {
    menu.classList.remove('active')
  });
})
