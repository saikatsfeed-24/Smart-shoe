const devices = document.querySelectorAll('.device');

devices.forEach((device) => {
  device.addEventListener('mouseover', () => {
    device.classList.add('hover');
  });

  device.addEventListener('mouseout', () => {
    device.classList.remove('hover');
  });
});
