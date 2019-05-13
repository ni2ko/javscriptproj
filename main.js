class Node
{ 
  constructor(value) 
  { 
    this.value = value; 
    this.next = null;
  } 
}

class LinkedList 
{ 
  constructor() 
  { 
    this.head = null; 
    this.size = 0; 
  } 

  
// functions to be implemented 
  add(value) 
  {
    var newNode = new Node(value);
    var temp;
    if(this.head == null)
      this.head = newNode;
    else
    {
      temp = this.head;
      while(temp.next)
      {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.size++;
  }

  insertAt(value, location)
  {
    if (location > 0 && location > this.size) 
      return false; 
    else 
    {
      var node = new Node(value); 
      var temp, prev; 
      temp = this.head; 
      if (location == 0) 
      { 
        node.next = this.head; 
        this.head = node; 
      } 
      else 
      { 
         temp = this.head; 
          var num = 0; 
          while (num < location) 
          { 
            num++; 
            prev = temp; 
            temp = temp.next; 
          } 
          node.next = temp; 
          prev.next = node; 
        } 
        this.size++; 
    } 
  }

  removeFrom(location) 
  {
    if (location > 0 && location > this.size) 
        return -1; 
    else 
    { 
      var temp, prev, num = 0; 
      temp = this.head; 
      prev = temp; 
      if (location == 0) 
      { 
        this.head = temp.next; 
      } 
      else 
      { 
        while (num < location) 
        { 
          num++; 
          prev = temp; 
          temp = temp.next; 
        } 
        prev.next = temp.next; 
      } 
      this.size--; 
      return temp.element; //optional return value
    } 
  }

  removeThis(value) 
  { 
    var temp = this.head; 
    var prev = null; 
  
    // iterate over the list 
    while (temp != null) 
    { 
      if (temp.value == value) 
      { 
        if (prev == null) 
        { 
          this.head = temp.next; 
        } 
        else
        { 
          prev.next = temp.next; 
        } 
        this.size--; 
        return temp.element; 
      } 
      prev = temp; 
      temp = temp.next; 
    } 
    return -1; 
  }  

  // Helper Methods 
  isEmpty() 
  { 
    return this.size == 0; 
  } 

  size_of_list()
  { 
    console.log(this.size); 
  }  

  printList()
  { 
    var temp = this.head; 
    //var output = ""; 
    while (temp) 
    { 
      //output += temp.element + " "; 
      console.log(temp.value); 
      temp = temp.next; 
    } 
  } 
}

var list = new LinkedList(); 
console.log("Is list Empty?");
console.log(list.isEmpty()); 
list.add(10); 
list.add(20); 
list.printList();
list.removeThis(10);
console.log("Is 10 Removed?");
list.printList();
{
  for(x = 1; x < 5; x++)
{
  list.add(x);
}
}
x++;
list.add(x);
console.log("Check for what's added;");
list.printList();
list.add('yes'); 
console.log("Can add dissimalr value to list?");
list.printList();
list.removeFrom(1);
console.log("Remove list at certain index;");
list.printList();
list.insertAt(100, 0);
console.log("Add value to head of list;");
list.printList();
console.log("Size of list;");
console.log(list.size_of_list());  
