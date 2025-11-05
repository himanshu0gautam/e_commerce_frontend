export const setWithExpiry = (key,value,totalInDays)=>{
    const now = new Date();
    const item = {
        value : value,
        expiry : now.getTime()+totalInDays *24*60*60*1000,
    }
    localStorage.setItem(key,JSON.stringify(item))
}



export const getWithExpiry = (key)=>{
    const getItem = localStorage.getItem(key);
    if(!getItem){
        return null;
    }
    const  item = JSON.parse(getItem)
    const now =  new Date();
    if(now > item.expiry){
        localStorage.removeItem(key)
        return null;
    }
    return item.value
}