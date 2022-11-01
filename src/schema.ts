export const typeDefs = `#graphql
    scalar URL
    scalar Date
    scalar Duration
    scalar EmailAddress


    type Query {
    chart:Chart!
    currentPlaylist:Playlist!
    genre(id:ID!): Genre!
    track(id:ID!): Track!
    tracks:[Track!]!
    playlists:[Playlist!]!
    albums:[Album!]!
    album(id:ID!): Album!
    artist(id:ID!): Artist!
    playlist(id:ID!): Playlist!
  }

"An Album object"
  type Album{
    "The Deezer album id"
    id:	ID!
    "The album title"
    title:String!
    "The album UPC"
    upc:String
    "The URL of the album on Deezer"
    link:URL
    "The share link of the album on Deezer"
    share:URL
    "The URL of the album's cover. Add 'size' parameter to the URL to change size. Can be 'small', 'medium', 'big', 'xl'"
    cover:URL
    "The URL of the album's cover in size small."
    coverSmall:URL
    "The URL of the album's cover in size medium.	"
    coverMedium:URL
    "The URL of the album's cover in size big."
    coverBig:URL
    "The URL of the album's cover in size xl."
    coverXl: URL
    md5_image:String
    "The album's first genre id (You should use the genre list instead). NB : -1 for not found"
    genreId:Int
    "List of genre object"
    genres:[Genre]
    "The album's label name"
    label:String
    "The album   numbers"
    numbersOfTracks:Int!
    "The album's duration (seconds)"
    duration:Duration
    "The number of album's Fans"
    fans:Int
    "The album's release date"
    releaseDate:Int
    "The record type of the album (EP / ALBUM / etc..)"
    recordType: String
    "Avalility of album in area"
    available:Boolean
    "Link to the tracklist of this album"
    tracklistAPI: URL
    "Whether the album contains explicit lyrics"
    explicitLyrics: Boolean
    """artist object containing : id, name, picture, picture_small, picture_medium, picture_big, picture_xl	object
    tracks	list of track"""
    artist:Artist
    "list of tracks"
    tracks:[Track]!
  }

  type Genre{
    "The genre's Deezer id"
    id: ID!
    "The genre's name"
    name: String
    "The url of the genre picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'"
    picture: URL

  }

  type Artist{
    "The artist's Deezer id"
    id: ID!
    "The artist's name"
    name: String
    "The url of the artist on Deezer"
    link:URL
    "The share link of the artist on Deezer"
    share: URL
    "The url of the artist picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'"
    picture: URL
    "The url of the artist picture in size small."
    pictureSmall: URL
    "The url of the artist picture in size medium."
    pictureMedium: URL
    "The url of the artist picture in size big."
    pictureBig:URL
    "The url of the artist picture in size xl."
    pictureXl: URL
    "The number of artist's albums	"
    nb_album: Int
    "The number of artist's fans"
    numberOfFans: Int
    "API Link to the top of this artist"
    tracklist: URL

  }
  type Track{
    "The track's Deezer id"   
    id: Int
    "The track's fulltitle"
    title: String
    "The track's short title	"
    titleShort:	String
    "The track version"
    titleVersion: String
    "The track isrc"
    isrc: String
    "The url of the track on Deezer"
    link: URL
    "The share link of the track on Deezer"
    share: URL
    "The track's duration in seconds"
    duration: Duration
    "The position of the track in its album"
    trackPosition: Int
    "The track's album's disk number"
    diskNumber: Int
    "The track's Deezer rank"
    rank: Int
    "The track's release date"
    releaseDate: Date
    "Beats per minute"
    bpm:Int
    "Signal strength"
    gain:Int
    "Return a list of contributors on the track"
    contributors:Artist
    "artist object containing : id, name, link, share, picture, picture_small, picture_medium, picture_big, picture_xl, nb_album, nb_fan, radio, tracklist, role"
    artist:	Artist
    "album object containing : id, title, link, cover, cover_small, cover_medium, cover_big, cover_xl, release_date"
    album: Album
  }

  "A playlist object"
  type Playlist{
    "The playlist's Deezer id"   
    id: Int
    "The playlist's fulltitle"
    title: String
    "The playlist description"
    description: String
   "If the playlist is public or not"
    public:Boolean
    "If the playlist is the love tracks playlist"
    isLovedTrack:Boolean
    "If the playlist is collaborative or not"
    collaborative: Boolean
    "user object containing id, name"
    creator: User
    "list of track"
    tracks:[Track]!
    "The url of the playlist on Deezer"
    link: URL
    "The share link of the playlist on Deezer"
    share: URL
    "The playlist's duration in seconds"
    duration: Duration
    "The number of playlist fans"
    fans: Int
    "The playlist's Deezer rank"
    rank: Int
    "The playlist's release date"
    releaseDate: Date
    "Beats per minute"
    bpm:Int
    "Signal strength"
    gain:Int
    "The url of the playlist picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'"
    picture: URL
    "The url of the playlist picture in size small."
    pictureSmall: URL
    "The url of the playlist picture in size medium."
    pictureMedium: URL
    "The url of the playlist picture in size big."
    pictureBig:URL
    "The url of the playlist picture in size xl."
    pictureXl: URL


  }


  "User Object"
  type User{
    "The user's Deezer id"
    id: ID!
    "The user's name"
    name: String
    "The user last name"
    lastName: String
    "The user first name"
    firstName: String
    "The user's email"
    email:	EmailAddress
    "The user's status"	
    status:Int
    "The user's birthday"
    birthday: Date
    "The user's inscription date"
    inscriptionDate: Date
    "The url of the user on Deezer"
    link:URL
    "The share link of the user on Deezer"
    share: URL
    "The url of the user picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'"
    picture: URL
    "The url of the user picture in size small."
    pictureSmall: URL
    "The url of the user picture in size medium."
    pictureMedium: URL
    "The url of the user picture in size big."
    pictureBig:URL
    "The url of the user picture in size xl."
    pictureXl: URL

  }

  type Chart{
    tracks:[Track]!
    albums:[Album]!
    playlists:[Playlist]!
}

`