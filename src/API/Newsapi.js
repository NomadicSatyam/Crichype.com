export const getNews=()=>{
    
    return fetch('http://127.0.0.1:8000/api/news/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token eeeff5b508142166aab321b5c35ea52a153770f6' 
        
      }
    })
    .then(resp => resp.json())
    .catch(error=>console.log('error',error));
    
}

export const ModifyNews=(news_id, body)=> {

  return fetch(`http://127.0.0.1:8000/api/news/${news_id}/`, {
     'method':'PUT',
     headers: {
         'Content-Type':'application/json',
         'Authorization':`Token eeeff5b508142166aab321b5c35ea52a153770f6` 
       }, 
       body:JSON.stringify(body)

  }).then(resp => resp.json())


 }

 export const InsertNews=(body)=> {

  return fetch('http://127.0.0.1:8000/api/news/', {
    'method':'POST',
    headers: {
        
        'Authorization':`Token eeeff5b508142166aab321b5c35ea52a153770f6` 
      }, 
      body:body

  }).then(resp => resp.json())

}

export const DeleteNews=(news_id)=> {

  return fetch(`http://127.0.0.1:8000/api/news/${news_id}/`, {
    'method':'DELETE',
    headers: {
        'Content-Type':'application/json',
        'Authorization':`Token eeeff5b508142166aab321b5c35ea52a153770f6` 
      }

 })

}
