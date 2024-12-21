import {client} from "./AppAxios";

export async function GetCats(filter)
{
    var result=await client.get("/CatList");
    return result.data;
}

export async function NewCat(cat,callback)
{
    var fd=new FormData();
    fd.append("id",cat.id);
    fd.append("name",cat.name);
    fd.append("order",cat.order);
    fd.append("file",cat.file);

    const startTime=new Date();

   var response= await client.post("/addorupdatecategorybyform",fd,{
       contentType:"multipart/form-data",
       onUploadProgress:e=>{

           const {loaded,total}=e;

           const progress=loaded*100/total;
           const elapsedTime=(((new Date())-startTime)/1000);
           const uploadSpeed=loaded/elapsedTime;
           const remainingTime=total/uploadSpeed - elapsedTime;

           const amar={
               progress,
               remainingTime,
               uploadSpeed,
               elapsedTime,
               loaded,
               total
           }

           console.log(amar)
           callback(amar);
       }

   })
    return response.data;
}

export function GetFilters(){

    return [
        {id:1,
        title:'گروه ها'
        },
        {id:2,
            title:'غذاها'
        }
    ]
}

export async function removeCat(id){

    var result=await client.post("/deleteCat?id="+id);
    return result.data.success==true;
}

export async function getCat(id){
    var items=await GetCats();

    var oneItem=items.find(item=>item.id==id);
    return oneItem;
}