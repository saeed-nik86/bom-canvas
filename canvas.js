//canvas
let canvas = document.querySelector("canvas");
let c = getContext("2d");
//replec position
c.translate()
//write text
c.font = ""
c.fillText()
//draw rect
c.fillStyle = "red"
c.fillRect()
//or
c.strokeStyle = "red"
c.strokeRect()
// draw line
c.beginPath()
c.lineTo(100, 100);
c.lineTo(200, 200)
c.lineTo(700, 400)
c.lineTo(500, 500)
c.closePath()
c.fillStyle = "red"
c.fill()

//or
c.beginPath()
c.lineTo(100, 100);
c.lineTo(200, 200)
c.lineTo(700, 400)
c.lineTo(500, 500)
c.closePath()
c.strokeStyle = "red"
c.stroke()
//draw circel
c.beginPath()
c.arc(100, 100, 20, 0, Math.PI)
c.fillStyle = "red"
c.fill
//or
c.beginPath()
c.arc(100, 100, 20, 0, Math.PI)
c.strokeStyle = "red"
c.stroke()
//clear
c.clearRect()
//Animation
requestAnimationFrame("function")