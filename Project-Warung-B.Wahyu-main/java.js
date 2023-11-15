const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    let click = 0;
    ratingValue.value = idx + 1;
    console.log(ratingValue.value);

    allStar.forEach((i, iIdx) => {
      if (iIdx <= idx) {
        i.classList.replace('fa-regular', 'fa-solid');
        i.classList.add('active');
      } else {
        i.classList.replace('fa-solid', 'fa-regular');
        i.classList.remove('active');
      }
    });
  });
});

/*Form*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwbAqCwzyQeCpw3uTuL1Ft90QMgVB6_Mq4bH505faLKzRq66-52XrKiChXZeZdl91nD/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
