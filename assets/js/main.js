/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

/*=============== SIGNUP ===============*/
const signupClose = document.getElementById('signup-close')
//       signupBtn = document.getElementById('signup-btn'),

// /* login hidden */
// loginClose.addEventListener('click', () =>{
//    login.classList.remove('show-login')
// })

// /* signup show */
// signupBtn.addEventListener('click', () =>{
//    signup.classList.add('show-signup')
// })

/* signup hidden */
signupClose.addEventListener('click', () =>{
   signup.classList.remove('show-signup')
})

/*=============== GOTO LOGIN ===============*/
const gotoLoginBtn = document.getElementById('goto-login-btn')

/* goto login */
gotoLoginBtn.addEventListener('click', () =>{
   signup.classList.remove('show-signup')
   login.classList.add('show-login')
})


/*=============== GOTO SIGNUP ===============*/
const gotoSignupBtn = document.getElementById('goto-signup-btn')

/* goto signup */
gotoSignupBtn.addEventListener('click', () =>{
   login.classList.remove('show-login')
   signup.classList.add('show-signup')
})
