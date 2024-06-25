// BOM
//propey windoe
length
close
navigator
innerHeight
innerWidth
pageXOffset
pageYOffset
screenX
screenTop
screenY
screenLeft
//metod window
alert()
confirm()
prompt()
open()
opener()
focus()
close()
print()
stop()
setInterval()
setTimeout()
clearInterval()
clearTimeout()
matchMedia()
//metod console 
console.log()
console.warn()
console.error()
console.clear()
console.table()
console.count()
console.time()
console.timeEnd()
//propery loction
location.protocol
location.hostname
location.port
location.pathname
location.hash
location.search
location.href
location.origin
location.host
// metot location
location.assign()
location.replace()
location.reload()
// property history
history.length
history.state
// mettod histpry
history.back()
history.forward()
history.go()
history.pushState()
// proprty screen
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.orientation.type
//cookie
document.cookie
document.cookie = "name=saeed;epires=Sat, 01 Feb 2025 20:30:00 GMT"
// local storeg metod
localStorage.setItem("name", "saeed")
localStorage.getItem("name")
localStorage.removeItem("name")
localStorage.clear()
// setion storege metod
sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()
//find location
navigator.geolocation.getCurrentPosition((p)=> console.log(`${p.coords.latitude}, ${p.coords.longitude}`))
//---------------------------------------------------------------------------------------------------------------
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