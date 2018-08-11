
// retrieve the data needed from the JSON response
// and put everything in an array

function _filter( res ) {

  let items = res[ 'items' ];
  let arrayRes = [];

  for (let n in items) {
    let videoID   = items[ n ][ 'id' ][ 'videoId' ];
    let title     = items[ n ][ 'snippet' ][ 'title' ];
    //if ( title.length > 45 ) { title = title.substring(0, 45).concat( '...' ) } // in case the title is too big to fit properly inside the div
    let channel   = items[ n ][ 'snippet' ][ 'channelTitle' ];
    //if ( channel.length > 18 ) { channel = channel.substring(0, 18).concat( '...' ) }
    let thumbnail = items[ n ][ 'snippet' ][ 'thumbnails' ][ 'high' ][ 'url' ];

    arrayRes.push(
      {
        'videoID': videoID,
        'title': title,
        'channel': channel,
        'thumbnail': thumbnail
      }
    );
  }

  return arrayRes;
}