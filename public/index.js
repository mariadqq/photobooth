const video = document.getElementById('camera-stream')
const btn_capture = document.querySelector('#capture');
const btn_saveas = document.querySelector('#saveas');
const btn_trash = document.querySelector('#trash');
const hidden_canvas = document.querySelector('#canvas')
const image = document.querySelector('#image')

navigator.getMedia = (navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia);

navigator.getMedia( { video: true }, (stream) => {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  },
  (err) => {
    console.error(err);
  }
);



btn_capture.addEventListener('click', (e) => {
	console.log('Capture')
  	e.preventDefault();

  	const pic = takeSnapshot()
  	image.setAttribute('src',  pic)
  	image.classList.add('visible')

  	btn_saveas.setAttribute('href' , pic)
  	//btn_saveas.setAttribute('download', 'snap.png')
})


btn_trash.addEventListener('click', (e) => {

	console.log('Trash')
  	e.preventDefault();

  	image.setAttribute('src', '')
  	btn_saveas.setAttribute('href', '')


})

function takeSnapshot() {
	console.log('takeSnapShot')
	var width= video.videoWidth
	var height = video.videoHeight
	const context = hidden_canvas.getContext('2d')

	console.log('width: ' + width + ' height: ' + height)

	hidden_canvas.width = width
	hidden_canvas.height = height
	context.drawImage(video, 0, 0, width, height)
		
	return hidden_canvas.toDataURL('image/png')

	


}