import { RESTDataSource } from '@apollo/datasource-rest';

export class DeezerAPI extends RESTDataSource {
   
    override baseURL ='https://api.deezer.com/'
    

    async getChart(){
        return this.get('chart')
    }
    
async getGenre(genreId){
    return this.get(`genre/${genreId}`)
}


    async getTrack(trackId){
        return this.get(`track/${trackId}`)
    }
    async getAlbum(albumId){
        return this.get(`album/${albumId}`)
    }
    async getArtist(artistId){
        return this.get(`artist/${artistId}`)
    }
    async getPlaylist(playlistId){
        return this.get(`playlist/${playlistId}`)
    }

}