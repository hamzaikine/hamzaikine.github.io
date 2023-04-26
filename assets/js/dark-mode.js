
	// changing the main page background
	const mw = document.querySelector('.main-wrapper');
	const heading = document.querySelectorAll('.blog-list');
	// listen to change in toggle
	const toggle = document.querySelector('.checkbox');

    // set theme and localStorage on page load
    setCheckedState();

    function setCheckedState() {
      // checks if localStorage has a "checked" value set at all
      if (!(localStorage.checked === undefined)) {
        // if it does, it sets the state of the toggle accordingly
        toggle.checked = isTrue(localStorage.getItem('checked'));
        // after setting the toggle state, the theme is adjusted according to the checked state
        toggleTheme();
      }
    }

   function toggleTheme() {

     	if (toggle.checked){
            mw.setAttribute('class', 'main-wrapper theme-bg-dark');
            for (let i = 0; i < heading.length; i++) {
            	 heading[i].style.color = "white"
            }


     	} else {
     		mw.setAttribute('class', 'main-wrapper theme-bg-light'); 
     		     for (let i = 0; i < heading.length; i++) {
            	 heading[i].style.color = "black"
            } 
     	}

          // set the value of the "checked" key in localStorage
           updateLocalStorage();

     	
   }

   function updateLocalStorage() {
     localStorage.setItem('checked', toggle.checked);
   }

   function isTrue(value) {
     // convert string to boolean
     return value === 'true';
   }


   // Toggle theme any time the state of the checkbox changes
    toggle.addEventListener('change', toggleTheme);