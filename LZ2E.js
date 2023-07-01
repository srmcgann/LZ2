LZ2E = data => {
  let ret = ''
  data=data.split('')
  for(i=0;i<data.length;++i){
    let cur = data[data.length-i-1]
    ret = cur + ret
    if(i>2 && cur == String.fromCharCode(255)){
      ofx = ret[2].charCodeAt(0)
      ofy = ret[1].charCodeAt(0)
      ret=ret.split('').filter((v,i)=>i>2).join('')
      for(let j=ofx; j--;) ret = ret[ret.length-ofy+j] + ret
    }
  }
  return ret
}
