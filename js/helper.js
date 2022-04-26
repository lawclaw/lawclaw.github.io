// Helper function: Clears selected div of content
function add_cookie(key, value) {
    document.cookie = key + "=" + value + ";";
}

function clear_field(selector) {
  const field = document.querySelector(selector);
  field.value = "";
}

function clearCookies() { //https://www.geeksforgeeks.org/how-to-clear-all-cookies-using-javascript/
  var cookies = document.cookie.split(';');
  
  // Add expiry date to past current date
  for (var i = 0; i < cookies.length; i++)
      document.cookie = cookies[i] + "=;expires="
      + new Date(0).toUTCString();
}

function getCookie(cname) { //https://www.w3schools.com/js/js_cookies.asp
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function clear_div(selector) {
    let div = document.querySelector(selector);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }    
}

function load_hp() {
    if (getCookie("hp")) {
        hp = getCookie("hp");
    } else {
        hp = 5;
    }
}