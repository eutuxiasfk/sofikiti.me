(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Sending…';
    fetch('https://formsubmit.co/ajax/eutuxiasfk@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d.success === 'true' || d.success === true) {
        status.className = 'form-status ok';
        status.textContent = 'Thanks! Your message was sent.';
        form.reset();
      } else {
        throw new Error(d.message || 'failed');
      }
    }).catch(function () {
      status.className = 'form-status err';
      status.textContent = 'Something went wrong. Please email me directly at eutuxiasfk@gmail.com.';
    });
  });
})();
