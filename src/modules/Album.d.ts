interface Album {
    id: number,
    name: string,
    songs: Song[]
}

declare type AlbumBase = Omit<Album, 'songs'>