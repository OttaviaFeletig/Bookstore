function loadData () {
    
    fetch ('https://api.myjson.com/bins/udbm5', {
        method: 'GET'
    })
    .then(function (response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    })
}
loadData();

