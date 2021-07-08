let inputData = {
  "dimensions": [{
    "id": "dimension_re",
    "values": ["East", "East", "West", "West", "South"]
  }, {
    "id": "dimension_cnt",
    "values": ["London", "Italy", "Germany", "Germany", "Russia"]
  },{
    "id": "measure_sales",
    "values": [100, 156, 432, 462, 25]
  }, {
    "id": "measure_qty",
    "values": [85, 34, 153, 434, 52]
  }, {
    "id": "measure_profit",
    "values": [123, 45, 421, 465, 451]
  }],
  "metadata": [{
    "id": "dimension_re",
    "label": "Region"
  }, {
    "id": "dimension_cnt",
    "label": "County"
  }, {
    "id": "measure_sales",
    "label": "Sales"
  }, {
    "id": "measure_qty",
    "label": "Quantity"
  }, {
    "id": "measure_profit",
    "label": "Profit"
  }]
}

let expectdData =[{
    "Region": "East",
    "County": "London",
    "Sales": 100,
    "Quantity": 85,
    "Profit": 123
  }, {
    "Region": "East",
    "County": "Italy",
    "Sales": 156,
    "Quantity": 34,
    "Profit": 45
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 432,
    "Quantity": 153,
    "Profit": 421
  }, {
    "Region": "West",
    "County": "Germany",
    "Sales": 462,
    "Quantity": 434,
    "Profit": 465
  }, {
    "Region": "South",
    "County": "Russia",
    "Sales": 25,
    "Quantity": 52,
    "Profit": 451
  }]

var arrToStr = JSON.stringify(Object.assign({},inputData));
var strToObj = JSON.parse(arrToStr);
let text = "";
for (let i in strToObj){
text += strToObj[i] + ",";
}
console.log(text);


