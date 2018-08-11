// link to download the video in mp3 / mp4 format
let hrefDownload = 'https://www.download-mp3-youtube.com/api/?api_key=MzM3MDQ4NTE4&format=mp3&video_id=';

function displayMusic( data ) {

  // display the div-result
  for ( let i = 0; i < arrayDiv.length; i++ ) {
    // display all divs
    arrayDiv[ i ].style.display = 'inherit';
    // adding the sliding animation when they appear
    arrayDiv[ i ].classList.add( 'entry' );
    // and a listener when this animation ends
    arrayDiv[ i ].addEventListener( 'animationend', AnimationListener, false );
  }

  // make all divs clickable with their respective url
  for ( let i = 0; i < arrayA.length; i++ ) {
    arrayA[ i ].href = hrefDownload.concat( data[ i ][ 'videoID' ] );
  }

  // displaying all the data in the correct DOM element
  for ( let n in data ) {
    document.getElementById( `h${n}` ).innerHTML = data[ n ][ 'title' ];
    document.getElementById( `t${n}` ).src = data[ n ][ 'thumbnail' ];
    document.getElementById( `p${n}` ).innerHTML = data[ n ][ 'channel' ];
  }

}


function AnimationListener() {
  // remove the entry animation so it doesn't repeat it over and over again
  this.classList.remove( 'entry' );
  // we don't neeed the listener anymore since the animation is finished
  this.removeEventListener( 'animationend', AnimationListener, false );
  // :hover animation applyed after to avoid double animation at the same time
  this.classList.add( 'hoverDiv' );

  // notHoverDiv only applyed after hovering the div the first time
  // Otherwise, this animation was starting right after the entry finished
  this.onmouseover = function() {
    // we add the class only one time
    if ( !this.classList.contains( 'notHoverDiv' ) ) {
      this.classList.add( 'notHoverDiv' );
    }
  }
}