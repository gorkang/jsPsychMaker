// detection for touchscreen, used for css selection
var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
  } else if ('orientation' in window) {
      hasTouchScreen = true; // deprecated, but good fallback
  } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent;
      hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      );
  }
}

// se agrega el css específico para el caso de phone o pc
window.onload = function() {
  link=document.createElement('link');
  link.rel='stylesheet';
  link.type = 'text/css';
  if (!hasTouchScreen) {
    link.href='controllers/css/style.css';
  } else {
    link.href='controllers/css/style_phone.css';
  }
  document.getElementsByTagName('head')[0].appendChild(link);
}
