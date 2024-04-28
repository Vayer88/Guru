document.addEventListener('keydown', function(event) {
    if (event.key === 'f') {
        var video = document.getElementById('video');
        if (video.requestFullscreen) {
        video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
        }
    }
    });

    