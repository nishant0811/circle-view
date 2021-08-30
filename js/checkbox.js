let tasks = document.getElementsByClassName('check');

for(let i = 0; i<tasks.length ; i++){
  tasks[i].addEventListener('click',function (e){
    let element = this.parentElement;
    if(element.classList.contains('active')){
      element.classList.remove('active');
      e.currentTarget.src = 'assets/check.png'
    }
    else{
      element.classList.add('active');
      e.currentTarget.src = 'assets/checkActive.png'
    }

    element.getElementsByTagName('input')[0].click();
  })
}
