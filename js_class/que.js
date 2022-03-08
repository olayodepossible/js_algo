class Queue {
    constructor(){
        this.collection = [];
    }
    
    print = () => console.log(this.collection);
    enqueue = (el) => this.collection.push(el);
    dequeue = (el) => this.collection.shift(el);
    front = () => this.collection[0];
    size = () => this.collection.length;
    isEmpty = () => this.collection.length === 0;

}

// Priority Que
class PriorityQueue {
    constructor(){
        this.collection = [];
    }
    
    print = () => console.log(this.collection);
    enqueue = (el) => {
        if (this.isEmpty()) {
             this.collection.push(el)   
        } else {
            let isAdded = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (el[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, el);
                    isAdded = true;
                    break
                }
                
            }
            if (isAdded) {
                this.collection.push(el);
            }
        }
        this.collection.push(el);
    }

    dequeue = (el) => {
        let val = this.collection.shift();
        return val[0];
    } 
    
    front = () => this.collection[0];
    size = () => this.collection.length;
    isEmpty = () => this.collection.length === 0;

}

const que = new Queue();

que.enqueue('a')
que.enqueue('b')
que.enqueue('c')
que.print()
que.dequeue('a')
console.log(que.front());
que.print()
