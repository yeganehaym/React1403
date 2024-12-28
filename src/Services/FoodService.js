import {client, setToken} from "./AppAxios";


export function GetFoods() {
return [];
}
export async function newFood(food){

    setToken()
    const data=await client.post('/addfood',food);
    return data.data;
}
export async  function newFoodByForm(food,callback){
    setToken()
    var fd=new FormData();
    fd.append("id",food.id);
    fd.append("name",food.name);
    fd.append("order",food.order);
    fd.append("file",food.file);
    fd.append("materials",food.materials);
    fd.append("price",food.price);
    fd.append("catId",food.catId);

    const startTime=new Date();

    var response= await client.post("/addfoodbyform",fd, {
        contentType: "multipart/form-data",
        onUploadProgress: e => {

            const {loaded, total} = e;

            const progress = loaded * 100 / total;
            const elapsedTime = (((new Date()) - startTime) / 1000);
            const uploadSpeed = loaded / elapsedTime;
            const remainingTime = total / uploadSpeed - elapsedTime;

            const amar = {
                progress,
                remainingTime,
                uploadSpeed,
                elapsedTime,
                loaded,
                total
            }

            console.log(amar)

            if(callback!=undefined && callback instanceof Function){
                callback(amar);
            }
        }
    });

    return response.data;
}