import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';


export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(playlistId) {
    return sendRequest(`${BASE_URL}/${playlistId}`);
}


export function add(playlist) {
    return sendRequest(BASE_URL, 'POST', playlist);
}

export function addVideoToPlaylist(playlistId, videoId) {
    return sendRequest(`${BASE_URL}/${playlistId}/videos/${videoId}`, 'PUT');
}

export function addNewVideoToPlaylist(playlistId, video) {
    return sendRequest(`${BASE_URL}/${playlistId}/videos`, 'POST', video);
}