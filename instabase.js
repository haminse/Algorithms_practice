/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
 class Container {
    constructor() {
      this.add_list = [];
    }
  
    /**
     * Adds the specified value to the container
     *
     * @param {number} value
     */
    add(value) {
      // TODO: implement this method
      this.add_list.push(value).sort();

    }
  
    /**
     * Attempts to delete one item of the specified value from the container
     *
     * @param {number} value
     * @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
      // TODO: implement this method
      if(this.add_list.length == 0){
        return false;
        }
      for(let i = 0; i < this.add_list.lenght; i++){
        if(add_list[i] == value){
          add_list.splice(i,1);
          return true;
        }
      }
    }
  
    /**
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
      // TODO: implement this method
        if(add_list.length % 2 == 0){
            return add_list[add_list.length/2 - 1];
        }
        else{
            return add_list[parseInt(add_list.length/2)];
        }
        return 0;
    }
  
  }
  
  module.exports = Container;
  