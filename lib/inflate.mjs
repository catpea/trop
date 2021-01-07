import contextualize from './contextualize.mjs';
export default inflate;

// inflate is for adding new lines to the result, it includes an automatic all to contexualize to update previous and next with newly added information.
function inflate(incoming){

  const outgoing = [];

  for(let line of incoming){


    if(line.previous.startsWith('text:blank') && line.next.startsWith('text:blank') ){
      outgoing.push({raw:'<div class="section">', type:'html', data:`<div class="section">`});
      outgoing.push(line);
      outgoing.push({raw:'</div>', type:'html', data:'</div>'});
    }else if(line.previous.startsWith('text:blank') ){
      outgoing.push({raw:'<div class="section">', type:'html', data:`<div class="section">`});
      outgoing.push(line);

    // }else if(line.previous.startsWith('html:blank') && line.next.startsWith('html:blank') ){
    //   outgoing.push({raw:'<div class="section">', type:'html', data:`<div class="section">`});
    //   outgoing.push(line);
    //   outgoing.push({raw:'</div>', type:'html', data:'</div>'});
    // }else if(line.previous.startsWith('html:blank') ){
    //   outgoing.push({raw:'<div class="section">', type:'html', data:`<div class="section">`});
    //   outgoing.push(line);



    }else if(line.next.startsWith('text:blank') ){
      outgoing.push(line);
      outgoing.push({raw:'</div>', type:'html', data:'</div>'});
    }else{
      outgoing.push(line);
    }
  }

  // note the recontextualization of the outgoing
  return contextualize(outgoing);
}
