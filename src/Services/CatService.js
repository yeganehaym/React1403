export function GetCats(filter)
{
    if(filter===1)
    return [
        {
            id:1,
            title:'پیتزا ایتالیایی',
            image:'1.jpg'
        },
        {
            id:2,
            title:'سالاد',
            image:'f2.jpg'
        },
        {
            id:3,
            title:'فست فود',
            image:'2584ao0ei.jpg'
        },
        {
            id:4,
            title:'غذای ایرانی',
            image:'f3.jpg'
        },
        {
            id:5,
            title:'کافه',
            image:'f5.jpg'
        }
    ]

    if(filter==2)
        return [
            {
                id:1,
                title:'خورشت سبزی',
                image:'1.jpg'
            },
            {
                id:2,
                title:'سالاد ماکارونی',
                image:'f2.jpg'
            },
            {
                id:3,
                title:'سالاد سزار',
                image:'2584ao0ei.jpg'
            },

        ]
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