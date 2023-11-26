export const getCookiesByName = (name) =>{
    const cookie = document.cookie.split(';')
    for(let i = 0; i < cookie.length; i++){
        const cookies = cookie[i].trim()
        if(cookies.startsWith(name+ "=")){
            return cookies.substring(name.length + 1)
        }
    }
    return null
}