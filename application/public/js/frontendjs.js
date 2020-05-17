if(document.cookie.includes('csid')){
    console.log('user is logged in');
    let logButton = document.getElementById('liss');
    logButton.innerHTML = "Log Out";
    logButton.removeAttribute('href');
    logButton.onclick = logoutClick;
} else {
    let logButton = document.getElementById('lis');
    logButton.innerHTML = "Log In";
    logButton.setAttribute('href','/login');
}