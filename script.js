function volume_sphere() {
     const radius = document.getElementById("radius").value;
    
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 'NaN';
    } else {
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        const roundedVolume = volume.toFixed(4);
        document.getElementById("volume").value = roundedVolume;
    }
   return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
