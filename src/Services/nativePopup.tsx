// credit to: http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html

export const openCenteredPopup = (url: string, title: string, w: number, h: number) => {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  
    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height;
  
    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
      url,
      title,
      `
        scrollbars=no,
        toolbar=no,
        location=no,
        directories=no,
        status=no,
        menubar=no,
        resizable=no,
        copyhistory=no,
        width=${w / systemZoom}, 
        height=${h / systemZoom}, 
        top=${top}, 
        left=${left}
        `,
    );
  
    newWindow?.focus();
  };
  