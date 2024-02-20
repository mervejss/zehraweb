document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const images = [];

    // 1'den 24'e kadar olan resimleri ekleyelim
    for (let i = 1; i <= 24; i++) {
        const imageName = `r1 (${i})`;
const imagePath = `assets/${imageName}.jpeg`; // assets klasörünün altındaki resimlerin yolu zehraweb\assets\r1 (1).jpeg
images.push(imagePath);
    }
    
    // images dizisini kullanarak slayt gösterisini oluşturabilirsiniz
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
// Resme tıklama olayını ekleyelim
imgElement.addEventListener('click', () => {
    window.open(image, '_blank'); // Resmi yeni bir sekmede aç
});

slider.appendChild(imgElement);
    });

    // Animasyonun bitiminde slider'ı başa döndürme
    slider.addEventListener('animationiteration', () => {
        slider.style.transition = 'none'; // Geçişi kapat
        slider.style.transform = 'translateX(0)'; // Başa dön
        setTimeout(() => {
            slider.style.transition = ''; // Geçişi tekrar aç
        }, 0);
    });
});
