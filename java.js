let button = document.getElementById("btn");
button.addEventListener('click', checkTest)

function checkTest() {
    let resul = 0;
    let vopros = document.getElementById('vopros1').value;
    if (vopros === '🍌🍌🍌' ) {
        resul++;
    }

    let vopros = document.getElementById('vopros2').value;
    if (vopros === 'потому-что' ) {
        resul++;
    }

    let vopros = document.getElementById('vopros3').value;
    if (vopros === 'ААА') {
        resul++;
    }

    alert('нуууу вот твой iq' + resul);
}
