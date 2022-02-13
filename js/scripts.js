let i = 1;
function autoHover() {
  $("ul.projects").addClass("isHovering");
  let timeout = 200;
  if (i > 1) {
    timeout = 1000;
  }

  setTimeout(function () {
    $(".projectsLi").removeClass("hover");
    $(".projectsLi a").removeClass("isHovered");
    $(`.projectsLi-${i}`).addClass("hover");
    $(`.projectsLi-${i} a`).addClass("isHovered");
    if (i <= 8) {
      // 8 thẻ li
      i++;
      autoHover();
    } else {
      $(".projectsLi").removeClass("hover");
      $(".projectsLi a").removeClass("isHovered");
    }
  }, timeout);
}

function clickService () {
  if ( window.location.pathname !== '/' ){
    window.location.href = '/';
    let expiration = new Date();
    expiration.setTime(expiration.getTime() + (30*24*60*60*1000));
    setCookie('cookie_services', 1, expiration, "/");
  } else {
    if (i > 8) {
      i = 1;
    }
    if (i !== 1) {
      return;
    }
    autoHover();
  }
}

/* Set, Get, Delete cookie */
// Set cookie
function setCookie(name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) +
  ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
  ((path == null) ? "" : "; path=" + path) +
  ((domain == null) ? "" : "; domain=" + domain) +
  ((secure == null) ? "" : "; secure");
}

// Read cookie
function getCookie(name){
  var cname = name + "=";
  var dc = document.cookie;
  if (dc.length > 0) {
      begin = dc.indexOf(cname);
      if (begin != -1) {
          begin += cname.length;
          end = dc.indexOf(";", begin);
          if (end == -1) end = dc.length;
          return unescape(dc.substring(begin, end));
      }
  }
  return null;
}

//delete cookie
function eraseCookie (name,path,domain) {
  if (getCookie(name)) {
      document.cookie = name + "=" +
      ((path == null) ? "" : "; path=" + path) +
      ((domain == null) ? "" : "; domain=" + domain) +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
/* End */




