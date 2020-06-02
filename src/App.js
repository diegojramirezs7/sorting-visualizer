import React from 'react';
import './App.css';
import SingleContainer from './components/SingleContainer';
import DoubleContainer from './components/DoubleContainer';
import MultipleContainer from './components/MultipleContainer';
import Header from './components/Header';
//import bubblesort from './algorithms/bubblesort';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//const requestAnimationFrame = window.requestAnimationFrame

class App extends React.Component {
  state = {
    array: [], 
    array2: [],
    array3: [],
    array4: [],
    auxArray: [],
    active1: 101,
    active2: 101,
    active21: 101,
    active22: 101,
    active31: 101,
    active32: 101,
    active41: 101,
    active42: 101,
    algorithm: 'heapsort',
    algorithm2: 'heapsort',
    algorithm3: 'heapsort',
    algorithm4: 'heapsort',
  }

  handleNewArray = () => {
    const arr = [];
    for (var i = 0; i<100; i++){
      var rand = Math.ceil(Math.random() * 100);
      arr.push({key: i, value: rand});
    }
    this.setState({
      array: arr.slice(), 
      array2: arr.slice(),
      array3: arr.slice(),
      array4: arr.slice()
    })
  }

  componentDidMount(){
    this.handleNewArray();
  }

  algorithmSelection = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  timer = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  //bubble sort
  bubblesort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square); 
    const length = list.length;
    for(var i = length - 1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        
        if(list[j-1].value > list[j].value){
          let temp = list[j-1];
          list[j-1] = list[j];
          list[j] = temp;
        }
        this.setState({
          [array]: list,
          [active1]: list[j-1].key,
          [active2]: list[j].key
        })
        await this.timer(25);
      }
      this.setState({
        [active1]: 101,
        [active2]: 101
      })
    }
    return list
  }

  selectionsort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    let length = list.length;
  
    for(var i = 0; i < length; i++) {
        
        var min = i;
        for(var j = i + 1; j < length; j++) {
            // Executing statement comparison
            if(list[min].value > list[j].value) {
                // Updating our current min index to iterate
                min = j;
            }
            this.setState({
              [array]: list,
              [active1]: list[j].key,
              [active2]: list[min].key
            })
            await this.timer(25)
        }
        
        // Swaping values
        if(min !== i) {
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
    }
    this.setState({
      [active1]: 101,
      [active2]: 101
    })
  
    return list;
  }

  insertionsort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    let auxArray = list.slice();
    let length = auxArray.length;
    
    for (let i = 1; i < length; i++) {
        let key = list[i];
        let j = i - 1;
        while (j >= 0 && auxArray[j].value > key.value) {
          this.setState({
            [array]: auxArray,
            [active1]: auxArray[j].key,
            [active2]: auxArray[i].key
          })
          await this.timer(25);
          auxArray[j + 1] = auxArray[j];
          auxArray[j] = {key: 100, value: auxArray[j].value};
          j--;
        }
        auxArray[j + 1] = key;
    }
    
    //get rid of active "red" bars
    this.setState({
      [array]: auxArray,
      [active1]: 101,
      [active2]: 101
    })
  }

  mergesort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    var n = list.length;
    var m = 1;
    var right;
    var left;
    var sorted; 
    var maxIndex;
    var x;
    var y;

    while (m < n){
      var i = 0;
      while(i< n - m){
        //slice
        left = list.slice(i, i+m);
        maxIndex = Math.min(i+2*m, n);
        right = list.slice(i+m, maxIndex);
        sorted = [];
        //auxArray = [];

        //merge
        while(left.length && right.length){
          //await this.timer(15);

          x = list.slice(0, i);
          y = list.slice(maxIndex, list.length);
          var tempList = x.concat(sorted, left, right, y);
         
          await this.timer(25);
          this.setState({
            [array]: tempList,
            [active1]: left[0].key,
            [active2]: right[0].key
          });
          
          if(left[0].value <= right[0].value){
            sorted.push(left.shift());
          }else{
            sorted.push(right.shift());
          }
          //sorted + left + right
        }

        while(left.length){
          sorted.push(left.shift());
        }

        while(right.length){
          sorted.push(right.shift());
        }

        //recreate list, with sorted part
        x = list.slice(0, i);
        y = list.slice(maxIndex, list.length);
        list = x.concat(sorted, y);
        
        await this.timer(25);
        this.setState({
          [array]: list,
          [active1]: list[i].key,
          [active2]: list[maxIndex-1].key
        });

        i = i + 2*m
      }
      m = m * 2;

      this.setState({
        [active1]: 101,
        [active2]: 101
      })
    }
    return list
  }


  swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }


  heapsort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);

    for (var i = 1; i<list.length; i++){
      //if child is bigger than parent
      if(list[i].value > list[parseInt((i-1)/2)].value){
        var j = i;

        //while parent is smaller, swap child and parent
        while(list[j].value > list[parseInt((j-1)/2)].value){
          var temp = list[j];
          list[j] = list[parseInt((j-1)/2)];
          list[parseInt((j-1)/2)] = temp;

          this.setState({
            [array]: list,
            [active1]: i,
            [active2]: j
          });
          j = parseInt((j - 1) / 2);
          await this.timer(25)
        }
      }
    }
   
    var length = list.length;

    for(i = length - 1; i>0; i--){
      //swap value of first index with last index
      temp = list[0];
      list[0] = list[i];
      list[i] = temp;

      //maintaining heap property, after each swap 
      j = 0;
      var index;

      while(true){
        await this.timer(25);
        
        index = 2*j+1;

        //if left child is smaller than right child, point index to right child
        if(index < (i - 1) && list[index].value < list[index + 1].value){
          index++;
        }

        //if parent is smaller than child, swap them with child having higher value
        if(index < i && list[j].value < list[index].value){
          temp = list[j];
          list[j] = list[index];
          list[index] = temp;
        }
        this.setState({
          [array]: list,
          [active1]: list[i].key,
          [active2]: list[j].key
        });

        j = index;
        if(index >= i){
          break;
        }
      }
    }
    this.setState({
      [array]: list,
      [active1]: 101,
      [active2]: 101
    });
  }


  quicksort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    var low = 0;
    var high = list.length - 1;
    var size = high - low + 1;

    //create auxiliary stack
    var stack = new Array(size);

    //initialize top of the stack
    var top = -1;

    //push initial values of high and low to the stack
    stack[++top] = low;
    stack[++top] = high;

    while(top >= 0){
      high = stack[top--];
      low = stack[top--];

      //set pivot element in its correct position, in sorted array

      // partition method
      var p = list[high];
      var i = low - 1;

      for(var j = low; j<=high-1; j++){
        if(list[j].value <= p.value){
          i++;
          await this.timer(25);
          this.swap(list, i, j);
          

          this.setState({
            [array]: list,
            [active1]: p.key,
            [active2]: j
          })          
        }
      } 

      this.swap(list, i+1, high);
      var pivot = i + 1;

      //end of partition 

      await this.timer(25);
      this.setState({
        [array]: list,
        [active1]: high,
        [active2]: low
      })

      //if there are elements on left side of pivot, push left side to stack
      if (pivot - 1 > low){
        stack[++top] = low;
        stack[++top] = pivot - 1;
      }

      //if there are elements on right side of pivot, push right side to stack
      if (pivot+1 < high){
        stack[++top] = pivot + 1;
        stack[++top] = high;
      }
    }
    this.setState({
      [array]: list,
      [active1]: 101,
      [active2]: 101
    })
    return stack;
  }

  getUpdateables = (ind) => {
    if (ind === 1){
      return ['active1', 'active2', 'array'];
    }else if (ind === 2){
      return ['active21', 'active22', 'array2'];
    }else if(ind === 3){
      return ['active31', 'active32', 'array3'];
    }else if (ind === 4){
      return ['active41', 'active42', 'array4'];
    }
  }


  onStart = () => {
    let algorithm = this.state.algorithm;
    let algorithm2 = this.state.algorithm2;
    let algorithm3 = this.state.algorithm3;
    let algorithm4 = this.state.algorithm4;

    if(algorithm === 'bubblesort'){
      this.bubblesort(this.state.array, 1)
    }else if (algorithm === 'selectionsort') {
      this.selectionsort(this.state.array, 1);
    }else if(algorithm === 'insertionsort'){
      this.insertionsort(this.state.array, 1);
    }else if(algorithm === 'mergesort'){
      this.mergesort(this.state.array, 1);
    }else if(algorithm === 'heapsort'){
      this.heapsort(this.state.array, 1);
    }else if(algorithm === 'quicksort'){
      this.quicksort(this.state.array, 1);
    }

    if(algorithm2 === 'bubblesort'){
      this.bubblesort(this.state.array2, 2);
    }else if (algorithm2 === 'selectionsort') {
      this.selectionsort(this.state.array2, 2);
    }else if(algorithm2 === 'insertionsort'){
      this.insertionsort(this.state.array2, 2);
    }else if(algorithm2 === 'mergesort'){
      this.mergesort(this.state.array2, 2);
    }else if(algorithm2 === 'heapsort'){
      this.heapsort(this.state.array2, 2);
    }else if(algorithm2 === 'quicksort'){
      this.quicksort(this.state.array2, 2);
    }

    if(algorithm3 === 'bubblesort'){
      this.bubblesort(this.state.array3, 3);
    }else if (algorithm3 === 'selectionsort') {
      this.selectionsort(this.state.array3, 3);
    }else if(algorithm3 === 'insertionsort'){
      this.insertionsort(this.state.array3, 3);
    }else if(algorithm3 === 'mergesort'){
      this.mergesort(this.state.array3, 3);
    }else if(algorithm3 === 'heapsort'){
      this.heapsort(this.state.array3, 3);
    }else if(algorithm3 === 'quicksort'){
      this.quicksort(this.state.array3, 3);
    }

    if(algorithm4 === 'bubblesort'){
      this.bubblesort(this.state.array4, 4);
    }else if (algorithm4 === 'selectionsort') {
      this.selectionsort(this.state.array4, 4);
    }else if(algorithm4 === 'insertionsort'){
      this.insertionsort(this.state.array4, 4);
    }else if(algorithm4 === 'mergesort'){
      this.mergesort(this.state.array4, 4);
    }else if(algorithm4 === 'heapsort'){
      this.heapsort(this.state.array4, 4);
    }else if(algorithm4 === 'quicksort'){
      this.quicksort(this.state.array4, 4);
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header handleNewArray={this.handleNewArray} onStart={this.onStart} />
          <Switch>
            <Route path='/doubleContainer'> 
              <DoubleContainer 
                array={this.state.array} 
                array2={this.state.array2}
                active1={this.state.active1}
                active2={this.state.active2}
                active21={this.state.active21}
                active22={this.state.active22}
                algorithm={this.state.algorithm}
                algorithm2={this.state.algorithm2}
                algorithmSelection={this.algorithmSelection}
              />
            </Route>
            <Route path='/multipleContainer'> 
              <MultipleContainer 
                array={this.state.array} 
                array2={this.state.array2}
                array3={this.state.array3} 
                array4={this.state.array4}
                active1={this.state.active1}
                active2={this.state.active2}
                active21={this.state.active21}
                active22={this.state.active22}
                active31={this.state.active31}
                active32={this.state.active32}
                active41={this.state.active41}
                active42={this.state.active42}
                algorithm={this.state.algorithm}
                algorithm2={this.state.algorithm2}
                algorithm3={this.state.algorithm3}
                algorithm4={this.state.algorithm4}
                algorithmSelection={this.algorithmSelection}
              />
            </Route>
            <Route path='/'> 
              <SingleContainer array={this.state.array} 
                active1={this.state.active1}
                active2={this.state.active2}
                algorithm={this.state.algorithm}
                algorithmSelection={this.algorithmSelection}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
