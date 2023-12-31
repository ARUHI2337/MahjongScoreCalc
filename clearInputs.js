function clearInputs() {

    let resultTextElement = document.getElementById('resultText');
    // Select elements
    var selectElements = [
        'ankerJungjangSelect', 
        'ankerYoguSelect', 
        'minkkangJungjangSelect', 
        'minkkangYoguSelect', 
        'ankkangJungjangSelect', 
        'ankkangYoguSelect', 
        'minkerJungjangSelect', 
        'minkerYoguSelect', 
        'panCountSelect'
    ];
      
      // Checkbox elements
      var checkboxElements = [
        'yukpaeCheckbox', 
        'daegiCheckbox', 
        'chitoiCheckbox', 
        'pinghuCheckbox', 
        'oyaCheckbox', 
        'menzenRonCheckbox', 
        'uleumRonCheckbox', 
        'menzenTsumoCheckbox', 
        'uleumTsumoCheckbox'
    ];

    // Reset the selected values of select elements
    for(var i = 0; i < selectElements.length; i++) {
      document.getElementById(selectElements[i]).selectedIndex = 0;
    }

    // Uncheck the checkbox elements
    for(var i = 0; i < checkboxElements.length; i++) {
      document.getElementById(checkboxElements[i]).checked = false;
    }
    resultTextElement.textContent = "";
}