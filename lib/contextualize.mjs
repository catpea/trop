export default contextualize;

// this only deals with previus next, whenever lines are added to the result set it must be allowed to update said paths.
function contextualize(lines){
  let index = 0;
  for(let line of lines){
    line.previous = line.type+':'+lines.slice(0,index).map(i=>i.type).slice(-4).reverse().join(".");
    line.next = line.type+':'+lines.slice(index+1).map(i=>i.type).join(".");
    index++;
  }
  return lines;
}
