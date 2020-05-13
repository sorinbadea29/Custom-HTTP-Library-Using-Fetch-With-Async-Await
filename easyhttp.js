class EasyHTTP{
  async get(url){
    let response = await fetch(url);
    let resData  = await response.json();
    return resData
  }

  async post(url, data){
    let response = await fetch(url, {
      method: 'post',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data)
    })
    let resData  = await response.json();
    return resData
  }

  async put(url, data){
    let response = await fetch(url, {
      method: 'put',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(data)
    })
    let resData = await response.json();
    return resData;
  }

  async delete(url){
    let response = await fetch(url, {
      method: 'delete',
      headers: {'content-type' : 'application/json'},
    })
    let resData = await 'User deleted';
    return resData;
  }
}






















