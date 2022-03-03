const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element and then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch the error
    }
}


button.addEventListener('click', async () => {
    // Disable Button
    button.disable = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
})




// on Load
selectMediaStream();