export function conversionABase64(file:File){
    //promesa es que nos devuelve un resultado en el futuro
    return new Promise((resolve,reject)=>{
      const reader= new FileReader();
      reader.readAsDataURL(file)
      reader.onload=()=>resolve(reader.result)
      reader.onerror=(error)=>reject(error)
    })
}