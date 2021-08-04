(function () {
  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.setRequestHeader("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36");
    xmlHttp.setRequestHeader("X-Requested-With", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36");  xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  var html = httpGet("https://www3.fbox.to/user/watchlist?sort=name");

  var el = document.createElement("html");

  el.innerHTML = html;

  var watchlist = el.getElementsByClassName("bl-2")[0];

  var container = document.getElementsByClassName("slider-sm")[0];
  // container.insertAdjacentHTML("beforebegin", watchlist.innerHTML);
  container.insertAdjacentHTML("afterend", watchlist.innerHTML);

  document.getElementById("filter-toggler").remove();
  document.getElementsByTagName("h1")[0].remove();
  document.getElementsByTagName("p")[0].remove();
  var max = setTimeout(function () {
    /* Empty function */
  }, 1);
  for (var i = 1; i <= max; i++) {
    window.clearInterval(i);
    window.clearTimeout(i);
    if (window.mozCancelAnimationFrame) window.mozCancelAnimationFrame(i); // Firefox
  }

})();

