import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';


export function getAll() {
    return sendRequest(BASE_URL);
}

