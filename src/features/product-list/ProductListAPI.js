// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
     const response = await fetch('http://localhost:8081/products');
     const data = await response.json();
     resolve({data})
  }
  );
}
export function fetchProductByFilters(filter,sort,pagination) {
  // filter ={"category":["smartphone","laptop"]}
  // sort = {_sort:"price",_order="desc"}
  //pagination = {_page:1,_limit=10}
let queryString ='';
for(let key in filter)
  {
    const categoryValues = filter[key];
    if(categoryValues.length)
      {
        const lastCategoryValue = categoryValues[categoryValues.length-1];
        queryString += `${key}=${lastCategoryValue}&`;
      }
   
   
  }
for(let key in sort)
{
  queryString += `${key}=${sort[key]}&`;
}
for(let key in pagination)
  {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async(resolve) =>{
     const response = await fetch('http://localhost:8081/products?'+queryString);
     const data = await response.json();
     resolve({data})
  }
  );
}
