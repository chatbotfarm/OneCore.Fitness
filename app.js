(function(){
  const openBtn = document.querySelector('[data-open-drawer]');
  const closeBtn = document.querySelector('[data-close-drawer]');
  const overlay = document.querySelector('[data-drawer-overlay]');
  const drawerLinks = document.querySelectorAll('.drawer a');

  function openDrawer(){
    document.body.classList.add('drawer-open');
  }
  function closeDrawer(){
    document.body.classList.remove('drawer-open');
  }

  if(openBtn) openBtn.addEventListener('click', openDrawer);
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if(overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(a => a.addEventListener('click', closeDrawer));

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeDrawer();
  });
})();
