(function(){
   
   var accordeonBtn = document.querySelectorAll('[data-accor]')

   for(var i = 0; i <= accordeonBtn.length; i++) {
      accordeonBtn[i].onclick = e => {
         e.preventDefault()
         var element = e.target
         var index = element.getAttribute('data-accor')
         var desc = document.querySelector(`[data-desc="${index}"]`)
         
         document.querySelectorAll('[data-desc]')[0].style.display = 'none'
         document.querySelectorAll('[data-desc]')[1].style.display = 'none'
         document.querySelectorAll('[data-desc]')[2].style.display = 'none'
         
         var display = window.getComputedStyle(desc).display

         if(display == 'block') {
            desc.style.display = 'none'
         } else {
            desc.style.display = 'block'
         }
      }
   }

})()