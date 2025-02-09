let memory = require('./memory');
memory= new memory;

class Array {

    constructor() {

        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
        
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value)
        this.length++;
        
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);

        this.length--;
     
        return value;
    }
}
Array.SIZE_RATIO = 3;
module.exports = Array;