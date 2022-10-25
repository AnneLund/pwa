//serviceworker registrering

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
        console.log('sw registreret!')
        
    }).catch(error => {
        console.log('sw ikke registeret!');
        console.log(error);
    })
} else {
    alert('ServiceWorker ikke understøttet!')
}