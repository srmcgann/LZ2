LZ2 = str =>{
  str = str.replaceAll('\\','\\\\')
  let maxBuffer = 50
  let l=str.split('')
  let mind, test
  out=[]
  for(j=0; j<l.length;){
    let mind=-1, pos=[]
    for(let k=1;k<Math.min(maxBuffer,l.length/2);k++){
      for(g=j;g<l.length-j-k;g++){
        test1 = ''
        test2 = ''
        for(let i=0; i<k; i++){
          test1 += l[j+i]
          test2 += l[j+i+k+g]
        }
        if(test1==test2 && k>mind){
          mind=k
          pos=[j,k,k+g+j]
        }
      }
    }
    if(pos.length && pos[1]>1){
      out=[...out, [pos[1], pos[2]]]
    } else {
      out=[...out, [1,j]]
    }
    j+=pos.length&&pos[1]>1?pos[1]:1
  }
  let f=''
  out.map((v,i)=>{
    f+=v[0]>1?String.fromCharCode(0)+String.fromCharCode(l.length-v[1])+String.fromCharCode(v[0]):l[v[1]]
  })
  return f.replaceAll('"','\"')
}
