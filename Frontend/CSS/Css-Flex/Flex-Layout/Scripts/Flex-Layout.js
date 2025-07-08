// Get the flex container
  const flexContainer = document.querySelector('.container');
  // Get the dropdowns
  const justifyContentDropdown = document.getElementById('justify-content');
  const flexWrapDropdown = document.getElementById('flex-wrap');
  const alignItemsDropdown = document.getElementById('align-items');
  const alignContentDropdown = document.getElementById('align-content');

  // Set the initial values
  flexContainer.style.justifyContent = justifyContentDropdown.value;
  flexContainer.style.flexWrap = flexWrapDropdown.value;
  flexContainer.style.alignItems = alignItemsDropdown.value;
  flexContainer.style.alignContent = alignContentDropdown.value;

  // Add event listeners to the dropdowns
  justifyContentDropdown.addEventListener('change', (event) => {
    flexContainer.style.justifyContent = event.target.value;
  });

  flexWrapDropdown.addEventListener('change', (event) => {
    flexContainer.style.flexWrap = event.target.value;
  });

  alignItemsDropdown.addEventListener('change', (event) => {
    flexContainer.style.alignItems = event.target.value;
  });

  alignContentDropdown.addEventListener('change', (event) => {
    flexContainer.style.alignContent = event.target.value;
  });