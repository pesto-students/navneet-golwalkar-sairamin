function createStack() {
    var items = [];
    return function stack(items) {
        return {
            push : function(item){
                items.push(item);
            },
            pop : function(item){
                items.pop(item);
            },
            getItems : function(){
                return items;
            }
        }
        
    }
}
var stack = createStack();
var stack1 = stack([5, 7]);
stack1.push(10);
stack1.push(20);
console.log(stack1.getItems());
console.log(stack.items);
