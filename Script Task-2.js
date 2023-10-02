function sortStringAlphabetically(inputString) {
    if (typeof inputString !== 'string') {
      return "Invalid input. Please provide a valid string.";
    }
    const sortedString = inputString.split('').sort().join('');
    return sortedString;
  }

  function sortAndDisplay() {
    const originalStringInput = document.getElementById('originalString');
    const sortedStringInput = document.getElementById('sortedString');

    const originalString = originalStringInput.value;
    const sortedString = sortStringAlphabetically(originalString);

    sortedStringInput.value = sortedString;
  }