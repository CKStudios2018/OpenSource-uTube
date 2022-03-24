window.onload = function(){
  const loginD = document.getElementById('login-icons');
  const user = firebase.auth().currentUser; 
  if(user){
    store.collection('c').doc(user.uid).get().then(doc => {
      const html =
      `
      <utd-topbar-menu-button-renderer class="style-scope utd-masthead" use-keyboard-focused="">
<button id="avatar-btn" aria-haspopup="true" class="style-scope utd-topbar-menu-button-renderer" aria-label="Account profile photo">
<ut-img-shadow height="32" width="32" class="style-scope utd-topbar-menu-button-renderer no-transition" style="background-color: transparent;" loaded="">
  <img id="img" href="/login.html" class="style-scope ut-img-shadow" alt="Avatar image" src="https://tallerthanshort.github.io/ut3.ggpht/icons/${doc.data().img}" width="32" height="32">
</ut-img-shadow>
</button>
<dom-if class="style-scope utd-topbar-menu-button-renderer">
<template is="dom-if"></template>
</dom-if>
<div id="button" class="style-scope utd-topbar-menu-button-renderer"></div>
</utd-topbar-menu-button-renderer>
      `;
      
      loginD.innerHTML = html;
    })
  
  } else{
    console.log("user not logged in");
  }
}

function loginFunction() {
    const loginD = document.getElementById('login-icons');
    
    const user = firebase.auth().currentUser; 
    if(user){
          store.collection('c').doc(user.uid).get().then(doc => {
            const html =
            `
            <utd-topbar-menu-button-renderer class="style-scope utd-masthead" use-keyboard-focused="">
  <button id="avatar-btn" aria-haspopup="true" class="style-scope utd-topbar-menu-button-renderer" aria-label="Account profile photo">
    <ut-img-shadow height="32" width="32" class="style-scope utd-topbar-menu-button-renderer no-transition" style="background-color: transparent;" loaded="">
        <img id="img" href="/login.html" class="style-scope ut-img-shadow" alt="Avatar image" src="https://tallerthanshort.github.io/ut3.ggpht/icons/${doc.data().img}" width="32" height="32">
    </ut-img-shadow>
  </button>
<dom-if class="style-scope utd-topbar-menu-button-renderer">
    <template is="dom-if"></template>
</dom-if>
<div id="button" class="style-scope utd-topbar-menu-button-renderer"></div>
</utd-topbar-menu-button-renderer>
            `;
            
            loginD.innerHTML = html;
      })
        
    } else{
      location.href="/login.html"
  }
}