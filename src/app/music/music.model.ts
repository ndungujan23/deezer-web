export interface Artist {
    id?: number;
    name?: string;
    link?: string;
    share?: string;
    picture?: string;
    picture_small?: string;
    picture_medium?: string;
    picture_big?: string;
    picture_xl?: string;
    nb_album?: number;
    nb_fan?: number;
    radio?: boolean;
    tracklist?: string;
    type?: string;
}

// export interface Album {
//     id: number;
//     title: string;
//     upc: string;
//     link: string;
//     share: string;
//     cover: string;
//     cover_small: string;
//     cover_medium: string;
//     cover_big: string;
//     cover_xl: string;
//     md5_image: string;
//     genre_id: number;
//     genres: Genres;
//     label: string;
//     nb_tracks: number;
//     duration: number;
//     fans: number;
//     release_date: string;
//     record_type: string;
//     available: boolean;
//     tracklist: string;
//     explicit_lyrics: boolean;
//     explicit_content_lyrics: number;
//     explicit_content_cover: number;
//     contributors: Contributor[];
//     artist: Artist;
//     type: string;
//     tracks: Tracks;
// }

// export interface Genres {
//     data: Datum[];
// }

// export interface Datum {
//     id: number;
//     name: string;
//     picture: string;
//     type: string;
// }

// export interface Contributor {
//     id: number;
//     name: string;
//     link: string;
//     share: string;
//     picture: string;
//     picture_small: string;
//     picture_medium: string;
//     picture_big: string;
//     picture_xl: string;
//     radio: boolean;
//     tracklist: string;
//     type: string;
//     role: string;
// }

// export interface Datum2 {
//     id: number;
//     readable: boolean;
//     title: string;
//     title_short: string;
//     title_version: string;
//     link: string;
//     duration: number;
//     rank: number;
//     explicit_lyrics: boolean;
//     explicit_content_lyrics: number;
//     explicit_content_cover: number;
//     preview: string;
//     md5_image: string;
//     artist: Artist2;
//     album: Album;
//     type: string;
// }

// export interface Tracks {
//     data: Datum2[];
// }
