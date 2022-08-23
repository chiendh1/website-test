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

function clickService() {
  if (window.location.pathname !== '/') {
    window.location.href = '/';
    let expiration = new Date();
    expiration.setTime(expiration.getTime() + (30 * 24 * 60 * 60 * 1000));
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
function getCookie(name) {
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
function eraseCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
      ((path == null) ? "" : "; path=" + path) +
      ((domain == null) ? "" : "; domain=" + domain) +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
/* End */

// Contact submit
$('body').on('click', '.wrap-form .button', function (e) {
  const parent = $(this).closest('.wrap-form');
  let validate = false;
  const firstName = parent.find('.firstName').val();
  const lastName = parent.find('.lastName').val();
  const email = parent.find('.email').val();
  const company = parent.find('.company').val() || '';
  const message = parent.find('textarea').val() || '';
  if (!firstName) {
    validate = true;
    parent.find('.firstNameError').html('First Name is required').addClass('show');
  } else {
    parent.find('.firstNameError').empty().removeClass('show');
  }
  if (!lastName) {
    validate = true;
    parent.find('.lastNameError').html('Last Name is required').addClass('show');
  } else {
    parent.find('.lastNameError').empty().removeClass('show');
  }
  if (!email) {
    validate = true;
    parent.find('.emailError').html('Email Address is required').addClass('show');
  } else {
    const validEmail = validateEmail(email);
    if (!validEmail) {
      validate = true;
      parent.find('.emailError').html('Email Address is not valid. Email addresses should follow the format user@domain.com.').addClass('show');
    } else {
      parent.find('.emailError').empty().removeClass('show');
    }
  }
  if (validate) {
    return false;
  }
  const body = `<p>Full Name: ${firstName} ${lastName}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Message: ${message}</p>`;
  const params = {
    email: email,
    body: body,
    fullName: `${firstName} ${lastName}`,
  };
  sendEmail(params);
  // $.ajax({
  //   type: "GET",
  //   url: "/send-email/index.php",
  //   data: params,
  //   success: function(res)
  //   { 
  //   }
  // });
  $('body').addClass('showSendMailSuccess');
  // document.getElementById("formContact").reset();
});

$('body').on('keyup', '.wrap-form .firstName', function () {
  const value = $(this).val();
  const parent = $(this).closest('.wrap-form');
  if (value) {
    parent.find('.firstNameError').empty().removeClass('show');
  }
})

$('body').on('keyup', '.wrap-form .lastName', function () {
  const value = $(this).val();
  const parent = $(this).closest('.wrap-form');
  if (value) {
    parent.find('.lastNameError').empty().removeClass('show');
  }
})

$('body').on('keyup', '.wrap-form .email', function () {
  const value = $(this).val();
  const parent = $(this).closest('.wrap-form');
  if (value) {
    parent.find('.emailError').empty().removeClass('show');
    const validEmail = validateEmail(value);
    if (!validEmail) {
      parent.find('.emailError').html('Email Address is not valid. Email addresses should follow the format user@domain.com.').addClass('show');
    } else {
      parent.find('.emailError').empty().removeClass('show');
    }
  }
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
  const latlng = { lat: 40.704172, lng: -73.98490649999997 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    zoom: 12,
    // mapTypeId: "roadmap",
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });

  const marker = new google.maps.Marker({
    position: latlng,
    map,
    title: "18 Bridge Street, Brooklyn, NY 11201",
  });

  // Add a click listener for each marker, and set up the info window.
  marker.addListener("click", () => {
    window.open(`https://www.google.com/maps?sll=40.704172,-73.984906&q=18+Bridge+Street+Brooklyn,+NY,+11201,+United+States&z=3`);
  });
}

$('body').on('click', '.a-contact', function (e) {
  window.location.href = '/contact/';
})

$('body').on('click', '.a-about', function (e) {
  window.location.href = '/about/';
})

function sendEmail(params) {
  console.log("Send Feedback Email")
  Email.send({
    Host: "smtp.mandrillapp.com",
    Username: "MagicCo",
    Password: "fUDcob_UhFoJjiH9UOUMyQ",
    To: 'hongchien192@gmail.com',
    From: "noreply.magicco@gmail.com",
    Subject: "Contact from Magiccollc",
    Body: `${params.body}`
  }).then(
    message => console.log(message)
  ).catch(err => {
    console.log(err)
  });
}

$(document).ready(function () {
  removeFeint();
})

function removeFeint() {
  // if ( window.location.pathname !== '/' ){
  //   $('#feint').addClass('none');
  // } else {
  //   $('#feint').removeClass('none');
  // }

  $('#feint').addClass('none');
}


