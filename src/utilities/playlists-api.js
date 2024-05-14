import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';


export function getAll() {
    return sendRequest(BASE_URL);
}


export function add(playlist) {
    return sendRequest(BASE_URL, 'POST', playlist);
}


export function getAllVideos() {
    return sendRequest(`/api/videos`);
}


export function addVideo(playlist, video) {
    return sendRequest(`${BASE_URL}/${playlist._id}/videos`, 'POST', video);
}