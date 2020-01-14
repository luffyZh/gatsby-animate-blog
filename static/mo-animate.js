window.onload = function() {
  const SWIRL_OPTS = {
    position: 'fixed',
    left: 0,
    top: 0,
    duration: 'rand(600, 1000)',
    radius: 'rand(10, 20)',
    pathScale: 'rand(.5, 1)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)',
  }

  const rainbow_r = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#BA55D3'
  });  
    
  const rainbow_o = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#9400D3',
    direction: -1
  });
  
  const rainbow_y = new mojs.ShapeSwirl({
    fill: '#9932CC',
    ...SWIRL_OPTS
  });
    
  const rainbow_g = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#800080',
    direction: -1
  });
  
  const rainbow_b = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#8A2BE2',
  });

  const rainbow_i = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#8B00FF',
    direction: -1
  });

  const rainbow_p = new mojs.ShapeSwirl({
    ...SWIRL_OPTS,
    fill: '#9370DB',
    direction: -1
  });

  /* 彩虹色配色 */
  [rainbow_b, rainbow_g, rainbow_i, rainbow_o, rainbow_p, rainbow_r, rainbow_y].forEach(item => {
    // 要不设置 zIndex 会被隐藏，在配置里设置没有用
    item.el.style.zIndex = 999;
  });

  document.addEventListener('click', function (e) {
    const x = e.pageX,
          y = { [e.pageY]: e.pageY-150 };
    [rainbow_b, rainbow_g, rainbow_i, rainbow_o, rainbow_p, rainbow_r, rainbow_y].forEach(item => {
      item.tune({ x, y })
      .generate()
      .replay();
    });   
  });
}