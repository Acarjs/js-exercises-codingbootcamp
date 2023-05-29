class AudioPlayer {

    constructor() {
        this.currentSong = null;
        this.currentArtist = null;
        this.currentArtwork = null;
        this.songLength = null;
        this.songLyrics = null;
        this.playlist = [];
        this.previousSong = null;
        this.nextSong = null;
        this.playbackDevice = null;
        this.repeat = false;
        this.shuffle = false;
        this.volume = 0;
        this.currentTime = 0; // 150000; // in ms how far in the song are we
        this.minimized = false;
    }

    /**
     * play a specific song
     *
     * enqueue it and start playback
     */
    playSong(song) {

        this.currentSong = song;

        this.displayArtistName(this.currentSong.artist)
        this.displayArtwork(this.currentSong.artwork)

        // do internal preparation for playback to begin
        this.loadSongData();
        this.loadLyrics();
    }

    /**
     * pause the currently playing song (if there is one)
     */
    pause() {

    }

    /**
     * skip to the next track
     */
    skipTrack() {
        const nextSong = this.getNextSong();

        this.playSong(nextSong);
    }

    /**
     * choose a different random song
     */
    shuffle() {

    }

    /**
     * set the repeat status on the player so that when
     * the song ends it should start again
     */
    repeat() {
        this.repeat = !this.repeat;
    }

    /**
     * add the "like" status to the song and the current user
     */
    likeSong(song = null) {
        if (song === null) {
            // argument was left out - like the current song
        }
    }

    /**
     * add a song to the current queue
     */
    enqueue(song) {

    }

    /**
     * chooses a specific song from the playlist
     */
    chooseSong(song) {

    }

    /**
     * ↓↓↓↓ INTERNAL METHODS ↓↓↓↓
     */

    /**
     * display the given artist name in the correct element
     */
    displayArtistName(artistName) {
        document.querySelector('.artist-name').innerHTML = artistName;
    }

    displayArtwork(artwork) {

    }

    /**
     * loads binary song data so that playback can begin
     */
    loadSongData() {

    }

    /**
     * internally contacts lyrics.com and pulls the lyrics
     * to the current song
     */
    loadLyrics() {

    }

    /**
     * finds the next song in the playlist if there is one
     */
    getNextSong() {

    }
}

