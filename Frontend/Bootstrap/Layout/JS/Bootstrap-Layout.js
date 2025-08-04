// Bootstrap Layout Exercise Scripts

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('JavaScript loaded and DOM ready');
});

// Ensure functions are available globally
window.applyTest1 = function() {
  try {
    const userCode = document.getElementById('test-1-code').value;
    const test1 = document.getElementById('test1');
    if (test1 && userCode) {
      test1.innerHTML = userCode;
      console.log('Test 1 applied successfully');
    } else {
      console.error('Could not find elements for test 1');
    }
  } catch (error) {
    console.error('Error in applyTest1:', error);
  }
}

window.applyTest2 = function() {
  try {
    const userCode = document.getElementById('test-2-code').value;
    const test2 = document.getElementById('test2');
    if (test2 && userCode) {
      test2.innerHTML = userCode;
      console.log('Test 2 applied successfully');
    } else {
      console.error('Could not find elements for test 2');
    }
  } catch (error) {
    console.error('Error in applyTest2:', error);
  }
}

window.applyTest3 = function() {
  try {
    const userCode = document.getElementById('test-3-code').value;
    const test3 = document.getElementById('test3');
    if (test3 && userCode) {
      test3.innerHTML = userCode;
      console.log('Test 3 applied successfully');
    } else {
      console.error('Could not find elements for test 3');
    }
  } catch (error) {
    console.error('Error in applyTest3:', error);
  }
}
