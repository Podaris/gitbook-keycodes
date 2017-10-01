"use strict";

module.exports =
{
  hooks: {
    "page": function(page) {
      page.content += `<script>
  var bookBody = document.body.getElementsByClassName('book-body')[0];
  if (bookBody) {
    bookBody.innerHTML = bookBody.innerHTML.replace(/<span class="keycode">shift<\\/span>/g,'<span class="keycode">&#x21E7; SHIFT</span>');
    bookBody.innerHTML = bookBody.innerHTML.replace(/<span class="keycode">shift\\+/g,'<span class="keycode">&#x21E7;</span>+<span class="keycode">');
    if (navigator.platform === 'MacIntel') {
      bookBody.innerHTML = bookBody.innerHTML.replace(/<span class="keycode">ctrl\\+/g,'<span class="keycode">&#x2318;</span>+<span class="keycode">');
    } else {
      bookBody.innerHTML = bookBody.innerHTML.replace(/<span class="keycode">ctrl\\+/g,'<span class="keycode">ctrl</span>+<span class="keycode">');
    }
  }
</script>`;
      return page;
    }
  }
};
