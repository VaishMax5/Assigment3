function calculateVolume() {
    const radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius)) {
        document.getElementById('result').textContent = 'Please enter a valid radius.';
    } else {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('result').textContent = `The volume of the sphere is approximately ${volume.toFixed(2)}`;
       
        const sphere = document.querySelector('.sphere');
        sphere.style.display = 'block';
        const sphereSize = (Math.cbrt(volume) * 20) + 'px'; 
        sphere.style.width = sphereSize;
        sphere.style.height = sphereSize;
    }
}
