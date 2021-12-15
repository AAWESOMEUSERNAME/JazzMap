
declare type AsyncStatus = 'loading' | 'succeeded' | 'failed' | 'idle'

declare namespace DTO {
    interface MusicianDTO {
        id: number,
        name: string,
        birth: string,
        death: string,
        photoPath: string,
        intro: string,
        profileKey: string
    }

    interface SongDTO {
        id: number,
        name: string,
        ablumId: number
    }

    interface AlbumDTO {
        id: number,
        name: string
    }
}