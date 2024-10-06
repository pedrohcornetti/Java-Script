let items = [];

const form = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const newItem = itemInput.value.trim();
  if (newItem !== '') {
    items.push(newItem);
    itemInput.value = ''; 

    
    items.sort(function(a, b) {
      return a.localeCompare(b, 'pt-BR', { sensitivity: 'base' });
    });

   
    updateItemList();
  }
});


function updateItemList() {
  
  itemList.innerHTML = '';

  
  items.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}
