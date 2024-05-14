import sendRequest from "./send-request";
const BASE_URL = '/api/videos';



export function getAllVideos() {
    return sendRequest(BASE_URL);
}

export function addVideoToPlaylist(playlist) {
    sendRequest(BASE_URL, 'POST', playlist);
}
