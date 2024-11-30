import {client} from "./AppAxios";

export async function GetCats(filter)
{
    var result=await client.get("/CatList");
    return result.data;
}

export async function NewCat(cat)
{
    var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJtZW51IiwiaXNzIjoibWVudS5jb20iLCJpYXQiOjE3MzI5ODYzNzYsIm5hbWVpZCI6IjEiLCJuYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3NlcmlhbG51bWJlciI6ImQzMDBiMGY1LWIiLCJuYmYiOjE3MzI5ODYzNzYsImV4cCI6MTczMjk4ODE3NiwiYXVkIjoiYW55In0._yjPQ0zp5UULQbFAlnXn8E2WmCnkwQVNhDp0h2-6724";
   var response= await client.post("/addorupdatecategory",cat)
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