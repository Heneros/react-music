import { combineReducers } from 'redux';

const songsReducer = () =>{
    return[
        { title: 'Все идет по плану', duration: '4:23'},
        { title: 'Звезда по имени Солнце', duration: '3:53'},
        { title: 'Young Turks', duration: '5:05'},
        { title: 'Friends Theme song', duration: '3:12'},
    ]
}

const selectedSongReducer = ( selectedSong = null, action) =>{
   if(action.type === 'SONG_SELECTED'){
       return action.payload;
   }
   return selectedSong;
}; 


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});