// q1 = document.getElementById('q1');
total = document.getElementById('total');
cumul = 0;

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const radios = document.querySelectorAll('input[type=radio]');

  for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', function (event) {
      if (event.target.checked) {
        cumul = cumul + parseInt(event.target.value);
        total.innerHTML = cumul + '€';
        event.target.parentNode.style.color = "green";
        event.target.parentNode.style.fontWeight = "900";
      } else {
        cumul = cumul - parseInt(event.target.value);
        total.innerHTML = cumul + '€';
        event.target.parentNode.style.color = "black";
        event.target.parentNode.style.fontWeight = "100";
      }
    });
  }
  
  a = 0;
  c = 0;
  for (const radio of radios) {
    radio.addEventListener('click', function (event) {
      if (event.target.checked) {
          a =  parseInt(event.target.value);
          total.innerHTML = a + '€';
          cumul = cumul + a -c;
          total.innerHTML = cumul + '€';

          c =  parseInt(event.target.value);
        }
        a=0;
      });
  }
}, false);

