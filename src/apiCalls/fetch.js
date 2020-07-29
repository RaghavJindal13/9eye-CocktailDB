export const apiCall = async (url) => {
  let data = await (await fetch(
    url,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "1449ea4641msh88c1f86bb1da891p1911eajsnbc0f722ea8f4"
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
  )
  
  return data;
}

export const getCategories = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?c=list");
export const getGlasses = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?g=list");
export const getAlcoholic = () => apiCall("https://the-cocktail-db.p.rapidapi.com/list.php?a=list");