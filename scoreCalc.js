function scoreCalc() {

    let resultTextElement = document.getElementById('resultText');

    const bodyElements = [
        document.getElementById('ankerJungjangSelect'),
        document.getElementById('ankerYoguSelect'),
        document.getElementById('minkkangJungjangSelect'),
        document.getElementById('minkkangYoguSelect'),
        document.getElementById('ankkangJungjangSelect'),
        document.getElementById('ankkangYoguSelect'),
        document.getElementById('minkeJungjangSelect'),
        document.getElementById('minkeYoguSelect'),
    ];

    let bodySum = 0;
    for (let i = 0; i < bodyElements.length; i++) {
        let value = bodyElements[i].value;
        bodySum += value === "" ? 0 : parseInt(value);
    }

    if (bodySum >= 5) {
        alert("몸통 수는 최대 4개까지 설정 가능합니다.");
        resultTextElement.textContent = "";
        return;
    }

    const panCountElement = document.getElementById('panCountSelect');

    if (panCountElement.value === "") {
        alert("판 수를 선택하지 않았습니다.");
        resultTextElement.textContent = "";
        return;
    }

    let panCountValue = parseInt(panCountElement.value);

    const hwaryoCheckboxElements = [
        document.getElementById('menzenRonCheckbox'),
        document.getElementById('uleumRonCheckbox'),
        document.getElementById('menzenTsumoCheckbox'),
        document.getElementById('uleumTsumoCheckbox')
    ];

    const ePicCheckboxElements = [
        document.getElementById('chitoiCheckbox'),
        document.getElementById('pinghuCheckbox'),
    ];

    let hwaryoCheckboxCount = 0;
    for (let i = 0; i < hwaryoCheckboxElements.length; i++) {
        if (hwaryoCheckboxElements[i].checked) {
            hwaryoCheckboxCount++;
        }
    }

    if (hwaryoCheckboxCount >= 2 || hwaryoCheckboxCount == 0) {
        alert("화료 종류는 반드시 하나만 설정해야 합니다.");
        resultTextElement.textContent = "";
        return;
    }

    let ePicCheckboxCount = 0;
    for (let i = 0; i < ePicCheckboxElements.length; i++) {
        if (ePicCheckboxElements[i].checked) {
            ePicCheckboxCount++;
        }
    }

    if (ePicCheckboxCount >= 2) {
        alert("특수 부수의 역은 하나만 설정 가능합니다.");
        resultTextElement.textContent = "";
        return;
    }

    const headElement = document.getElementById('yukpaeCheckbox');

    const daegiElement = document.getElementById('daegiCheckbox');

    const oyaElement = document.getElementById('oyaCheckbox');

    let score = 20;

    let resultText = "";

    // 치또이 25부 고정
    if (ePicCheckboxElements[0].checked && panCountValue < 5) {
        if (daegiElement.checked) {
            alert("치또이의 대기는 단기 취급하지 않습니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (headElement.checked) {
            alert("치또이는 특수역이라 머리를 설정하지 않습니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (bodySum > 0) {
            alert("치또이는 몸통이 없는 특수역입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (panCountValue < 3 && hwaryoCheckboxElements[2].checked) {
            alert("치또이에 멘젠쯔모로 2판 이하는 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (hwaryoCheckboxElements[1].checked || hwaryoCheckboxElements[3].checked ) {
            alert("치또이는 멘젠으로만 화료할 수 있습니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (panCountValue < 2) {
            alert("치또이 1판은 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }

        if (panCountValue == 2) {
            if (oyaElement.checked) {
                resultText = '2400';
            } else {
                resultText = '1600'
            }
        } else if (panCountValue == 3) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked) {
                    resultText = '4800';
                } else {
                    resultText = '1600 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked) {
                    resultText = '3200';
                } else {
                    resultText = '800 / 2600';
                }
            }
        } else if (panCountValue == 4) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked) {
                    resultText = '9600';
                } else {
                    resultText = '3200 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked) {
                    resultText = '6400';
                } else {
                    resultText = '1600 / 3200';
                }
            }
        }
        resultTextElement.textContent = resultText;
        return;

    }

    // 핑후쯔모 20부 고정
    if (ePicCheckboxElements[1].checked && panCountValue < 5) {
        if (!hwaryoCheckboxElements[2].checked) {
            alert("핑후쯔모에 멘젠쯔모 이외의 화료는 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (daegiElement.checked) {
            alert("핑후쯔모의 대기는 양면만 가능합니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (headElement.checked) {
            alert("핑후쯔모에 역패 머리는 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (bodySum > 0) {
            alert("핑후쯔모에 슌쯔 이외의 몸통은 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (panCountValue == 1) {
            alert("핑후쯔모 1판은 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        } else if (panCountValue == 2) {
            if (oyaElement.checked) {
                resultText = '700 ALL';
            } else {
                resultText = '400 / 700'
            }
        } else if (panCountValue == 3) {
            if (oyaElement.checked) {
                resultText = '1300 ALL';
            } else {
                resultText = '700 / 1300'
            }
        } else if (panCountValue == 4) {
            if (oyaElement.checked) {
                resultText = '2600 ALL';
            } else {
                resultText = '1300 / 2600'
            }
        }
        resultTextElement.textContent = resultText;
        return;
    }

    if (hwaryoCheckboxElements[0].checked) {
        score += 10;
    }

    if (hwaryoCheckboxElements[2].checked) {
        score += 2;
    }

    if (hwaryoCheckboxElements[3].checked) {
        score += 2;
    }

    let scoreMultipliers = [2, 4, 4, 8, 8, 16, 16, 32];

    for (let i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i].value !== "") {
            score += parseInt(bodyElements[i].value) * scoreMultipliers[i];
        }
    }

    if (headElement.checked) {
        score += 2;
    }

    if (daegiElement.checked) {
        score += 2;
    }

    if (score === 20) {
        score = 30;
    }

}