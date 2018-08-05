
const xhr = new XMLHttpRequest();
const API_KEY = 'AIzaSyABMSzlY77dVOt5Gs43GyLaLF9nNrNw-Bk'

function searchMusic() {
  // clear divResult
  for ( let i = 0; i < arrayDiv.length; i++ ) {
    if ( arrayDiv[i].style.display === 'inline-block' ) {
      arrayDiv[i].style.display = 'none';
    }
  }

  // get the input value
  let keywords = encodeURIComponent(
    document.getElementById( 'input' ).value
  );
  // using youtube api url to retrieve videos
  let searchUrl = [
    'https://www.googleapis.com/youtube/v3/search?',
    'part=snippet',
    '&maxResults=5',
    '&type=video',
    `&key=${API_KEY}`,
    `&q=${keywords}`
  ].join( '' );
  // making the request
  xhr.open( 'GET', searchUrl );
  // get the response
  xhr.addEventListener( 'readystatechange', function() {
    if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 ) {
      let jsonRes = JSON.parse( xhr.responseText );
      var filteredResponse = _filter( jsonRes );
      displayMusic( filteredResponse );
    }
  } );
  xhr.send( null );
}





