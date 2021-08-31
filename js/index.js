const swiper = new Swiper('.swiper-container', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'false',
    },
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#btn_top').forEach(function(tabs) {
        tabs.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
           
            document.querySelectorAll('.how-we-work__content').forEach(function(content) {
                content.classList.remove('how-we-work__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__content-active')
        })
    });

    document.querySelectorAll('#btn_top').forEach(function(Btn) {
        Btn.addEventListener('click', function(eve1) {
        const path = eve1.currentTarget.dataset.path

        document.querySelectorAll('#btn_top').forEach(function(rem) {
            rem.classList.remove('is-active')
        })
        document.querySelector(`[data-target_btn="${path}"]`).classList.add('is-active')
    })
    });

    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
        document.querySelector('#burger').classList.toggle('is-active')
    });
});

$( function() {
    $( "#accordion" ).accordion();
 }
);