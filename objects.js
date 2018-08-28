var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  playlist[artistName] = 'songTitle';
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
=======
  return Object.assign({}, playlist, {['artistName']: 'songTitle'});
}

function removeFromPlaylist(playlist, artistNames) {
  return delete playlist.artistName;
>>>>>>> 4f985bc300c5e4bbb582169b4fae7f789c94ce6e
}