const getItems = async () => {
  const response = await fetch('https://fakestoreapi.com/products/category/electronics')
  const data = await response.json()
  return data
}


export default getHomePageItems