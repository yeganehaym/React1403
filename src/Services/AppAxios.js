import axios from 'axios'
import {  toast } from 'react-toastify';
const instance = axios.create({
    baseURL: 'https://reactapi.aliyeganeh.ir/api'
});



instance.interceptors.response.use(null,error=>{
    console.log(error.response);

    if(error.response && (error.response.status==403 || error.response.status==401))
    {
        alert("شما اعتبارسنجی نشده اید. ابتدا لاگین کنید تا توکن جدید دریافت شود");
        return;
    }
    else if(error.response && error.response.status==404)
    {
        alert('پیدا نشد');
        return;
    }
    alert('خطای اتصال به سرور')
})
const token=localStorage.getItem('token');
instance.defaults.headers.common["authorization"]="Bearer " + token;

export const client={
    get:instance.get,
    post:instance.post,
    put:instance.put,
    delete:instance.delete
}