const playlist = ["Song A", "Song B", "Song C", "Song D"];

function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

console.log(addSong("Song E")); 
console.log(removeLastSong()); 
console.log(moveSongs()); 
console.log(combinePlaylists(["Song F", "Song G"])); 