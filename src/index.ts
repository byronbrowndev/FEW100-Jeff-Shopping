const addButton = document.getElementById('addButton') as HTMLInputElement;
const itemToAdd = document.getElementById('itemToAdd') as HTMLInputElement;
const list = document.getElementById('list') as HTMLUListElement;
let items: ShoppingtItem[] = [];


const saveIt = () => {
    localStorage.setItem('shopping-list', JSON.stringify(items));
};

const createItemInDom = (item: ShoppingtItem)  => {
    const li = document.createElement('li') as HTMLLIElement;
    li.classList.add('list-group-item');
    const text = document.createTextNode(item.description);
    li.appendChild(text);
    list.insertBefore(li, list.firstChild);
};

const addTheItem = () => {
    const item = itemToAdd.value;
    const thingToAdd: ShoppingtItem = { description: item }
    items = [...items, thingToAdd];
    createItemInDom(thingToAdd);
    itemToAdd.value = '';
    itemToAdd.focus();
    saveIt();
};

const storedItems = localStorage.getItem('shopping-list');
if (storedItems) {
    items = JSON.parse(storedItems);
    items.forEach(createItemInDom);
}

addButton.addEventListener('click', addTheItem);
itemToAdd.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTheItem();
    }
});

interface ShoppingtItem {
    description: string;
}

