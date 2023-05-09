function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ['rock', 'paper', 'scissors'];
console.log(random_item(items));