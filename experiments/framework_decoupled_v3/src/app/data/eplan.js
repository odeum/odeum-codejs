import axios from 'axios'
import {List} from 'immutable'
var axiosInstance= axios.create({
    baseURL:'http://horsenskp.dev.webhouse.dk/',
    timeout:10000,
    headers:{'Content-Type': 'application/json',
                'Accept': 'application/json' }
})
export async function getAppendixConfig(){
    var data=[]
    await axiosInstance.get('/rest/eplan/kpt/appendix/config')
    .tehn(function(response){
        data = data.concat(response.data)
    })
    return data
}
export async function getAppendixList()
{  var data = []
   await axiosInstance.get('/rest/eplan/kpt/appendix/list')
    .then(function(response){
    data = data.concat(response.data)
   // data = data.concat([{appendixId:99999999999,name:"This is a very loooooooooong nameThis is a very loooooooooong nameThis is a very loooooooooong nameThis is a very loooooooooong name"}])
})
    const dataList = List(data)
    return dataList
}

export async function getAppendixById(id)
{
    var appendix =[]
    await axiosInstance.get('rest/eplan/kpt/appendix/'+id)
    .then(function(response){
        console.log(response)
        appendix = appendix.concat(response.data)
    })
    return appendix
}