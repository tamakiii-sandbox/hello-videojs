function toggleFullScreen2() {
  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else {
        if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  } else {
    const _element = document.documentElement;
    if (_element.requestFullscreen) {
      _element.requestFullscreen();
    } else {
      if (_element.mozRequestFullScreen) {
        _element.mozRequestFullScreen();
      } else {
        if (_element.webkitRequestFullscreen) {
          _element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      }
    }
  }
};

const userAgent = window.navigator.userAgent;

const iPadSafari =
  !!userAgent.match(/iPad/i) &&     // Detect iPad first.
  !!userAgent.match(/WebKit/i) &&   // Filter browsers with webkit engine only
  !userAgent.match(/CriOS/i) &&   // Eliminate Chrome & Brave
  !userAgent.match(/OPiOS/i) &&   // Rule out Opera
  !userAgent.match(/FxiOS/i) &&   // Rule out Firefox
  !userAgent.match(/FocusiOS/i);    // Eliminate Firefox Focus as well!

function iOS() {
  if (userAgent.match(/ipad|iphone|ipod/i)) {
    const iOS = {};
    iOS.majorReleaseNumber = +userAgent.match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace('OS ', '');
    return iOS;
  }
}


// --

function toggleFullScreen1() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

// --

function toggleFullScreen3()
{
  if (document.webkitFullscreenElement) {
    document.webkitCancelFullScreen();
  } else {
    const el = document.documentElement;
    el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
}

// --

function toggleFullScreen4() {
  console.log('called');
}

// --

function main (event) {
  const button = document.querySelector('#full-screen');
  // button.addEventListener('click', toggleFullScreen1, false);
  // button.addEventListener('click', toggleFullScreen3, false);
  button.addEventListener('click', toggleFullScreen4, false);
  console.log('hello');
};
