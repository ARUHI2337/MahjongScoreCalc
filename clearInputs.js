function clearInputs() {
    // Select elements
    var selectElements = [
        'ankerJungjangSelect', 
        'ankerYoguSelect', 
        'minkkangJungjangSelect', 
        'minkkangYoguSelect', 
        'ankkangJungjangSelect', 
        'ankkangYoguSelect', 
        'minkeJungjangSelect', 
        'minkeYoguSelect', 
        'panCountSelect'
    ];
      
      // Checkbox elements
      var checkboxElements = [
        'yukpaeCheckbox', 
        'deagiCheckbox', 
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
}