

export function getDates (date){
  const dates = date.map((items)=> items.Date)
  return  dates
}
export function getClose (date){
    const closes = date.map((items)=> items.Close)
    return  closes
  }


  export function dateandvalues(data) {
    const dates = Object.keys(data);
    const values = Object.values(data);
  
    return [dates, values];
  }