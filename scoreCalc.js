document.addEventListener('DOMContentLoaded', function() {
    let pinghuCheckbox = document.getElementById('pinghuCheckbox');
    let chitoiCheckbox = document.getElementById('chitoiCheckbox');
    let minkerJungjangSelect = document.getElementById('minkerJungjangSelect');
    let minkerYoguSelect = document.getElementById('minkerYoguSelect');
    let ankerJungjangSelect = document.getElementById('ankerJungjangSelect');
    let ankerYoguSelect = document.getElementById('ankerYoguSelect');
    let minkkangJungjangSelect = document.getElementById('minkkangJungjangSelect');
    let minkkangYoguSelect = document.getElementById('minkkangYoguSelect');
    let ankkangJungjangSelect = document.getElementById('ankkangJungjangSelect');
    let ankkangYoguSelect = document.getElementById('ankkangYoguSelect');
    let yukpaeCheckbox = document.getElementById('yukpaeCheckbox');
    let doubleWindCheckbox = document.getElementById('doubleWindCheckbox');
    let daegiCheckbox = document.getElementById('daegiCheckbox');

    minkerJungjangSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    minkerYoguSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    ankerJungjangSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    ankerYoguSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    minkkangJungjangSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    minkkangYoguSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    ankkangJungjangSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    ankkangYoguSelect.addEventListener('change', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("커쯔를 설정할 수 없는 역입니다.");
            this.value = "";
        }
    });

    yukpaeCheckbox.addEventListener('click', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("머리 형태를 설정할 수 없는 역입니다.");
            this.checked = false;
        }
    });

    doubleWindCheckbox.addEventListener('click', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("머리 형태를 설정할 수 없는 역입니다.");
            this.checked = false;
        }
    });

    daegiCheckbox.addEventListener('click', function() {
        if (pinghuCheckbox.checked || chitoiCheckbox.checked) {
            alert("대기 형태를 설정할 수 없는 역입니다.");
            this.checked = false;
        }
    });
});

function scoreCalc() {

    let resultTextElement = document.getElementById('resultText');

    const bodyElements = [
        document.getElementById('minkerJungjangSelect'),
        document.getElementById('minkerYoguSelect'),
        document.getElementById('ankerJungjangSelect'),
        document.getElementById('ankerYoguSelect'),
        document.getElementById('minkkangJungjangSelect'),
        document.getElementById('minkkangYoguSelect'),
        document.getElementById('ankkangJungjangSelect'),
        document.getElementById('ankkangYoguSelect')
    ];

    let bodySum = 0;
    let ankSum = 0;
    let kangSum = 0;
    for (let i = 0; i < bodyElements.length; i++) {
        let value = bodyElements[i].value;
        if (value !== "") {
            let intValue = parseInt(value);
            bodySum += intValue;
            if ([2, 3, 6, 7].includes(i)) {
                ankSum += intValue;
            }
            if (i > 3) {
                kangSum += intValue;
            }
        }
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

    if (ankSum > 2 && panCountValue < 2) {
        alert("산안커가 포함된 역에 1판은 불가능한 조합입니다.");
        resultTextElement.textContent = "";
        return;
    }

    if (kangSum > 2 && panCountValue < 2) {
        alert("산깡즈가 포함된 역에 1판은 불가능한 조합입니다.");
        resultTextElement.textContent = "";
        return;
    }

    const hwaryoCheckboxElements = [
        document.getElementById('menzenRonCheckbox'),
        document.getElementById('uleumRonCheckbox'),
        document.getElementById('menzenTsumoCheckbox'),
        document.getElementById('uleumTsumoCheckbox')
    ];

    const ePicCheckboxElements = [
        document.getElementById('chitoiCheckbox'),
        document.getElementById('pinghuCheckbox')
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

    const headElements = [
        document.getElementById('yukpaeCheckbox'),
        document.getElementById('doubleWindCheckbox')
    ];

    let headCheckboxCount = 0;
    for (let i = 0; i < headElements.length; i++) {
        if (headElements[i].checked) {
            headCheckboxCount++;
        }
    }

    if (headCheckboxCount >= 2) {
        alert("머리 형태는 하나만 설정 가능합니다.");
        resultTextElement.textContent = "";
        return;
    }



    const daegiElement = document.getElementById('daegiCheckbox');

    const oyaElement = document.getElementById('oyaCheckbox');

    let score = 20;

    let resultText = "";

    // 치또이 25부 고정
    if (ePicCheckboxElements[0].checked) {
        if (daegiElement.checked) {
            alert("치또이의 대기는 단기 취급하지 않습니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (headElements[0].checked || headElements[1].checked) {
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
        if (hwaryoCheckboxElements[1].checked || hwaryoCheckboxElements[3].checked) {
            alert("치또이는 멘젠으로만 화료할 수 있습니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (panCountValue < 2) {
            alert("치또이 1판은 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (panCountValue < 5) {
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
            resultTextElement.textContent = "(25) " + resultText;
            return;
        }

    }

    // 핑후쯔모 20부 고정
    if (ePicCheckboxElements[1].checked) {
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
        if (headElements[0].checked || headElements[1].checked) {
            alert("핑후쯔모에 역패 머리는 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        if (bodySum > 0) {
            alert("핑후쯔모에 슌쯔 이외의 몸통은 불가능한 조합입니다.");
            resultTextElement.textContent = "";
            return;
        }
        
        if (panCountValue < 5) {
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
            resultTextElement.textContent = "(20) " + resultText;
            return;
        }
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

    if (headElements[0].checked) {
        score += 2;
    } else if (headElements[1].checked) {
        score += 4;
    }

    if (daegiElement.checked) {
        score += 2;
    }

    if (score === 20) {
        score = 30;
    }

    score = Math.ceil(score / 10) * 10;

    if (score > 110) {
        score = 110;
    }

    if (panCountValue > 4 || panCountValue === 4 && score >= 40 || panCountValue === 3 && score >= 70) {
        if (panCountValue > 5 && panCountValue < 8) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '18000';
                } else {
                    resultText = '6000 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '12000';
                } else {
                    resultText = '3000 / 6000';
                }
            }
        } else if (panCountValue > 7 && panCountValue < 11) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '24000';
                } else {
                    resultText = '8000 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '16000';
                } else {
                    resultText = '4000 / 8000';
                }
            }
        } else if (panCountValue > 10 && panCountValue < 13) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '36000';
                } else {
                    resultText = '12000 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '24000';
                } else {
                    resultText = '6000 / 12000';
                }
            }
        } else if (panCountValue > 12) {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '48000';
                } else {
                    resultText = '16000 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '32000';
                } else {
                    resultText = '8000 / 16000';
                }
            }
        } else {
            if (oyaElement.checked) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '12000';
                } else {
                    resultText = '4000 ALL';
                }
            } else {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '8000';
                } else {
                    resultText = '2000 / 4000';
                }
            }
        }
        resultTextElement.textContent = resultText;
        return;
    }

    if (score === 30) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '1500';
                } else {
                    resultText = '500 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2900';
                } else {
                    resultText = '1000 ALL';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5800';
                } else {
                    resultText = '2000 ALL';
                }
            } else if (panCountValue === 4) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '11600';
                } else {
                    resultText = '3900 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '1000';
                } else {
                    resultText = '300 / 500';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2000';
                } else {
                    resultText = '500 / 1000';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3900';
                } else {
                    resultText = '1000 / 2000';
                }
            } else if (panCountValue === 4) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '7700';
                } else {
                    resultText = '2000 / 3900';
                }
            }
        }
    } else if (score === 40) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2000';
                } else {
                    resultText = '700 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3900';
                } else {
                    resultText = '1300 ALL';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '7700';
                } else {
                    resultText = '2600 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '1300';
                } else {
                    resultText = '400 / 700';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2600';
                } else {
                    resultText = '700 / 1300';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5200';
                } else {
                    resultText = '1300 / 2600';
                }
            }
        }
    } else if (score === 50) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2400';
                } else {
                    resultText = '800 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '4800';
                } else {
                    resultText = '1600 ALL';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '9600';
                } else {
                    resultText = '3200 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '1600';
                } else {
                    resultText = '400 / 800';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3200';
                } else {
                    resultText = '800 / 1600';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '6400';
                } else {
                    resultText = '1600 / 3200';
                }
            }
        }
    } else if (score === 60) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2900';
                } else {
                    resultText = '1000 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5800';
                } else {
                    resultText = '2000 ALL';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '11600';
                } else {
                    resultText = '3900 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2000';
                } else {
                    resultText = '500 / 1000';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3900';
                } else {
                    resultText = '1000 / 2000';
                }
            } else if (panCountValue === 3) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '7700';
                } else {
                    resultText = '2000 / 3900';
                }
            }
        }
    } else if (score === 70) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3400';
                } else {
                    resultText = '1200 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '6800';
                } else {
                    resultText = '2300 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2300';
                } else {
                    resultText = '600 / 1200';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '4500';
                } else {
                    resultText = '1200 / 2300';
                }
            }
        }
    } else if (score === 80) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3900';
                } else {
                    resultText = '1300 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '7700';
                } else {
                    resultText = '2600 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2600';
                } else {
                    resultText = '700 / 1300';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5200';
                } else {
                    resultText = '1300 / 2600';
                }
            }
        }
    } else if (score === 90) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '4400';
                } else {
                    resultText = '1500 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '8700';
                } else {
                    resultText = '2900 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '2900';
                } else {
                    resultText = '800 / 1500';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5800';
                } else {
                    resultText = '1500 / 2900';
                }
            }
        }
    } else if (score === 100) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '4800';
                } else {
                    resultText = '1600 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '9600';
                } else {
                    resultText = '3200 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3200';
                } else {
                    resultText = '800 / 1600';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '6400';
                } else {
                    resultText = '1600 / 3200';
                }
            }
        }
    } else if (score === 110) {
        if (oyaElement.checked) {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '5300';
                } else {
                    resultText = '1800 ALL';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '10600';
                } else {
                    resultText = '3600 ALL';
                }
            }
        } else {
            if (panCountValue === 1) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '3600';
                } else {
                    resultText = '9000 / 1800';
                }
            } else if (panCountValue === 2) {
                if (hwaryoCheckboxElements[0].checked || hwaryoCheckboxElements[1].checked) {
                    resultText = '7100';
                } else {
                    resultText = '1800 / 3600';
                }
            }
        }
    }
    resultTextElement.textContent = "("+ score +") " + resultText;
    return;

}