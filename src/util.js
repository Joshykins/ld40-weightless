
//Searches if something is in x radius.
function withinRadius(cx,cy,x,y,r){
  return Math.sqrt(Math.pow(cx -x, 2) + Math.pow(cy - y, 2)) < r
}
