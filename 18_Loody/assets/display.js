
let hrefDownload = 'https://www.download-mp3-youtube.com/api/?api_key=MzM3MDQ4NTE4&format=mp3&video_id=';

function displayMusic( data ) {

  // display the div-result
  //let divRes = document.getElementById( 'divResult' );
  for ( let i = 0; i < arrayDiv.length; i++ ) {
    arrayDiv[ i ].style.display = 'inline-block';
  }

  //make all divs clickable
  for ( let i = 0; i < arrayA.length; i++ ) {
    arrayA[ i ].href = hrefDownload.concat( data[ i ][ 'videoID' ] );
  }

  // displaying all the data
  for ( let n in data ) {
    document.getElementById( `h${n}` ).innerHTML = data[ n ][ 'title' ];
    document.getElementById( `t${n}` ).src = data[ n ][ 'thumbnail' ];
    document.getElementById( `p${n}` ).innerHTML = data[ n ][ 'channel' ];
  }

}