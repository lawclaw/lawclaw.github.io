// Helper function: Clears selected div of content
function add_cookie(key, value) {
    document.cookie = key + "=" + value + ";";
}   

// TODO: function to clear all cookies
// function clearCookies() {

function clear_field(selector) {
  let field = document.querySelector(selector);
  field.value = "";
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