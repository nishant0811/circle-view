function fileUpload() {
  document.getElementById('file').click()
}

// function setActive(profile){
//   let profiles = document.getElementsByClassName('profile')
//   for(let i =1 ; i<profiles.length ; i++){
//     profiles[i].classList.remove('active')
//   }
//   profile.forEach(profile =>{
//     document.getElementById(profile).classList.add('active')
//   })
// }


function setActive(num){
  let profileBox =   document.getElementById('userProfiles');
  profileBox.innerHTML = `

  `;

  for(let i = 0 ; i<num ; i++){
    profileBox.innerHTML +=
    `
    <div class="profile ">
    <div class="background">

    </div>
    <div class="image">
      <img src="https://allinonetrickz.com/wp-content/uploads/2019/05/Girls-Trending-Profile-Pic-2019.png" alt="">
    </div>
    <div class="details">
      <h2 class="name">PAULINA GAYOSO</h2>
      <p class="position">Position</p>
    </div>
  </div>
    `;
  }

  document.getElementsByClassName('profile')[1].classList.add('active');
}


let dropdown = document.getElementsByClassName('dropdown_menu');
for(let i = 0 ; i < dropdown.length ;  i ++){
  dropdown[i].addEventListener('click' , function () {
    let dropdownItems = this.nextElementSibling;

    if(dropdownItems.style.maxHeight){

      dropdownItems.style.maxHeight = null;
    }
    else {

      dropdownItems.style.maxHeight = dropdownItems.scrollHeight + "px";
  }
})
}


function addUserShow(){
  document.getElementById('addUser').classList.toggle('active')
}

function addUser() {
  document.getElementById('userProfiles').innerHTML += `
  <div class="profile ">
  <div class="background">

  </div>
  <div class="image">
    <img src="https://allinonetrickz.com/wp-content/uploads/2019/05/Girls-Trending-Profile-Pic-2019.png" alt="">
  </div>
  <div class="details">
    <h2 class="name">PAULINA GAYOSO</h2>
    <p class="position">Position</p>
  </div>
</div>
  `;
}
