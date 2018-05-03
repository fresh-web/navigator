(function() {
  init();

  function init() {
    render();
  }

  function checkSupports(fns) {
    return fns.filter(fn => navigator[fn] === undefined);
  }

  function render() {
    const { onLine, connection, deviceMemory, vibrate, getBattery } = navigator;

    document.getElementById('navigator-app').innerHTML = '';

    // you are online
    // you are connection
    // your device memory
    // your battery status is
    // if you click me i can vibrate

    // {
    //   onLine,
    // }
  }
})();
