import { URLResolver, DateResolver, DurationResolver, EmailAddressResolver } from "graphql-scalars"
import { GraphQLError } from 'graphql';

export const resolvers= {
    URL:URLResolver,
    Date: DateResolver,
    Duration: DurationResolver,
    EmailAddress: EmailAddressResolver,

    Query: {
        currentPlaylist: async (_,__,{ dataSources}) => {
            const data = await dataSources.DeezerAPI.getChart()
            console.log(data)
            const playlist = data.playlists.data
            console.log(playlist)
            const playlistLength = playlist.length
            console.log(playlistLength)
            return playlist[Math.floor(Math.random()*playlistLength)]
        },
        chart: async (_,__,{ dataSources})=>{
            return dataSources.DeezerAPI.getChart()
        },
        track: async (_,{ id }, { dataSources }) =>{
            return dataSources.DeezerAPI.getTrack(id)
        },
        artist: async (_,{ id }, { dataSources }) =>{
            return dataSources.DeezerAPI.getArtist(id)
        },
        album: async (_,{ id }, { dataSources }) =>{
            return dataSources.DeezerAPI.getAlbum(id)
        },
        playlist: async (_,{ id }, { dataSources }) =>{
            return dataSources.DeezerAPI.getPlaylist(id)
        },
        genre: async (_,{ id }, { dataSources }) => {
            return dataSources.DeezerAPI.getGenre(id)
        }
  

    },

    Chart: {
         tracks:async (_,__,{dataSources}) => {
            let data = await dataSources.DeezerAPI.getChart()
            return data.tracks.data
        },
         playlists:async (_,__,{dataSources}) => {
            let data = await dataSources.DeezerAPI.getChart()
            return data.playlists.data
        },
         albums:async (_,__,{dataSources}) => {
            let data = await dataSources.DeezerAPI.getChart()
            return data.albums.data
        }
        }
    


}