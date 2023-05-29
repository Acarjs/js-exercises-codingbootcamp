<?php

class AudioTrack
{
    public ?string $title = null;
    public ?int $length = null;
    public ?Artist $artist = null;
    public ?string $artworkUrl = null;

    public function setArtist(Artist $artist) : self
    {
        $this->artist = $artist;

        return $this;
    }

    public function getLength() : int
    {
        return $this->length;
    }

    public function addToPlaylist(Playlist $playlist) : void
    {

    }

    public function getArtworkUrl() : ?string
    {
        return $this->artworkUrl;
    }
}