$(document).ready(()=>{
  $('#artistSearch').focus()
  $('#artistSearch').focusout()
  $('#buttonSearch').click(()=>{
    if($('input').val()==null||$('input').val()==undefined||$('input').val()==''){
      alert('Enter a Artist and Song Title')
    }
    else{
      getResponse();
    }
  })
})
  // ajax call to api
let getResponse=()=>{
  var artistName=document.getElementById('artistSearch').value
  var titleOfSong=document.getElementById('titleSearch').value
  $.ajax({
    type:'GET',
    datatype:'JSON',
    async:true,
    url:`https://api.lyrics.ovh/v1/${artistName}/${titleOfSong}`,
    success:(response)=>{
      console.log(response)
      $('.cardArtist').text(`${artistName}`)
      $('.cardTitle').text(`${titleOfSong}`)
      $('.cardLyrics').text(response.lyrics)
      $('.mainPageView').addClass('hide')
      $('.contentView').addClass('show')
    },
    error:(response)=>{
      alert('Request Timed Out/Enter Valid Artist+Songtitle')
    },
    timeout:3000
  })
}
