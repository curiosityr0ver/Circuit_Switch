let switches = Array(8).fill(false);

function toggleSwitch(index) {
    switches[index - 1] = !switches[index - 1];
    document.getElementById(`switch${index}`).classList.toggle('on');
    updateCircuit();
}

function updateCircuit() {
    // Level 1 logic
    const andInput1 = switches[0];
    const andInput2 = switches[1];
    const andOutput1 = andInput1 && andInput2;
    document.getElementById('andOutput1').innerText = andOutput1 ? '1' : '0';

    const xorInput1 = switches[2];
    const xorInput2 = switches[3];
    const xorOutput1 = xorInput1 !== xorInput2;
    document.getElementById('xorOutput1').innerText = xorOutput1 ? '1' : '0';

    const norInput1 = switches[4];
    const norInput2 = switches[5];
    const norOutput1 = !(norInput1 || norInput2);
    document.getElementById('norOutput1').innerText = norOutput1 ? '1' : '0';

    const nandInput1 = switches[6];
    const nandInput2 = switches[7];
    const nandOutput1 = !(nandInput1 && nandInput2);
    document.getElementById('nandOutput1').innerText = nandOutput1 ? '1' : '0';

    // Level 2 logic
    const andOutput2 = andOutput1 && xorOutput1;
    document.getElementById('andOutput2').innerText = andOutput2 ? '1' : '0';

    const xorOutput2 = norOutput1 !== nandOutput1;
    document.getElementById('xorOutput2').innerText = xorOutput2 ? '1' : '0';

    const norOutput2 = !(andOutput1 || xorOutput2);
    document.getElementById('norOutput2').innerText = norOutput2 ? '1' : '0';

    // Level 3 logic
    const nandOutput2 = !(andOutput2 && xorOutput2);
    document.getElementById('nandOutput2').innerText = nandOutput2 ? '1' : '0';

    const andOutput3 = norOutput2 && nandOutput2;
    document.getElementById('andOutput3').innerText = andOutput3 ? '1' : '0';

    // Level 4 logic
    const notOutput4 = !andOutput3;
    document.getElementById('notOutput4').innerText = notOutput4 ? '1' : '0';

    // Final output
    const finalOutput = notOutput4 && andOutput2; // Ensuring a harder winning condition
    document.getElementById('finalOutput').innerText = finalOutput ? '1' : '0';

    if (finalOutput) {
        document.getElementById('message').classList.remove('hidden');
    } else {
        document.getElementById('message').classList.add('hidden');
    }
}

function navigateToCongratulations() {
    window.location.href = "congratulations.html";
}

// Initialize circuit state
updateCircuit();
