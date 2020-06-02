import React from 'react';
import BarElem from './BarElem';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class MultipleContainer extends React.Component{
	render(){
		return (
		<div className="multipleContainer cont">
			<div className="square">
				{this.props.array.map(elem => (
					<BarElem 
						value={elem.value * 0.35} 
						key={elem.key} 
						width={0.22}
						active={this.props.active1 === elem.key || this.props.active2 === elem.key}
					/>
				))}
				<div style={{textAlign: 'center'}}>
				<FormControl variant="filled" style={{minWidth: "16vw"}}>
				        <InputLabel id="demo-simple-select-label" >Select An Algorithm</InputLabel>
				        <Select
				          labelId="demo-simple-select-filled-label"
         				  id="demo-simple-select-filled"
				          value={this.props.algorithm}
				          onChange={(ev) => this.props.algorithmSelection(ev)}
				          name="algorithm"
				        >
				         	<MenuItem value="bubblesort">Bubble Sort</MenuItem>
				        	<MenuItem value="selectionsort">Selection Sort</MenuItem>
				        	<MenuItem value="insertionsort">Insertion Sort</MenuItem>
				        	<MenuItem value="mergesort">Merge Sort</MenuItem>
				          	<MenuItem value="heapsort">Heap Sort</MenuItem>
				          	<MenuItem value="quicksort">Quick Sort</MenuItem>
				        </Select>
			      </FormControl>
			      </div>
			</div>
			<div className="square">
			{this.props.array2.map(elem => (
				<BarElem 
					value={elem.value * 0.35} 
					key={elem.key} 
					width={0.22}
					active={this.props.active21 === elem.key || this.props.active22 === elem.key}
				/>
			))}
			<div style={{textAlign: 'center'}}>
				<FormControl variant="filled" style={{minWidth: "16vw"}}>
				        <InputLabel id="demo-simple-select-label" >Select An Algorithm</InputLabel>
				        <Select
				          labelId="demo-simple-select-filled-label"
         				  id="demo-simple-select-filled"
				          value={this.props.algorithm2}
				          onChange={(ev) => this.props.algorithmSelection(ev)}
				          name="algorithm2"
				        >
				          	<MenuItem value="bubblesort">Bubble Sort</MenuItem>
				        	<MenuItem value="selectionsort">Selection Sort</MenuItem>
				        	<MenuItem value="insertionsort">Insertion Sort</MenuItem>
				        	<MenuItem value="mergesort">Merge Sort</MenuItem>
				          	<MenuItem value="heapsort">Heap Sort</MenuItem>
				          	<MenuItem value="quicksort">Quick Sort</MenuItem>	
				        </Select>
			      </FormControl>
			      </div>
			</div>
			<div className="square">
			{this.props.array3.map(elem => (
				<BarElem 
					value={elem.value * 0.35} 
					key={elem.key} 
					width={0.22}
					active={this.props.active31 === elem.key || this.props.active32 === elem.key}
				/>
			))}
			<div style={{textAlign: 'center'}}>
				<FormControl variant="filled" style={{minWidth: "16vw"}}>
				        <InputLabel id="demo-simple-select-label" >Select An Algorithm</InputLabel>
				        <Select
				          labelId="demo-simple-select-filled-label"
         				  id="demo-simple-select-filled"
				          value={this.props.algorithm3}
				          onChange={(ev) => this.props.algorithmSelection(ev)}
				          name="algorithm3"
				        >
				          	<MenuItem value="bubblesort">Bubble Sort</MenuItem>
				        	<MenuItem value="selectionsort">Selection Sort</MenuItem>
				        	<MenuItem value="insertionsort">Insertion Sort</MenuItem>
				        	<MenuItem value="mergesort">Merge Sort</MenuItem>
				          	<MenuItem value="heapsort">Heap Sort</MenuItem>
				          	<MenuItem value="quicksort">Quick Sort</MenuItem>
				        </Select>
			      </FormControl>
			      </div>
			</div>
			<div className="square">
				{this.props.array4.map(elem => (
					<BarElem 
						value={elem.value * 0.35} 
						key={elem.key} 
						width={0.22}
						active={this.props.active41 === elem.key || this.props.active42 === elem.key}
					/>
				))}
				<div style={{textAlign: 'center'}}>
					<FormControl variant="filled" style={{minWidth: "16vw"}}>
					        <InputLabel id="demo-simple-select-label">Select An Algorithm</InputLabel>
					        <Select
					          labelId="demo-simple-select-filled-label"
	         				  id="demo-simple-select-filled"
					          value={this.props.algorithm4}
					          onChange={(ev) => this.props.algorithmSelection(ev)}
				          	  name="algorithm4"	
					        >
					          	<MenuItem value="bubblesort">Bubble Sort</MenuItem>
					        	<MenuItem value="selectionsort">Selection Sort</MenuItem>
					        	<MenuItem value="insertionsort">Insertion Sort</MenuItem>
					        	<MenuItem value="mergesort">Merge Sort</MenuItem>
					          	<MenuItem value="heapsort">Heap Sort</MenuItem>
					          	<MenuItem value="quicksort">Quick Sort</MenuItem>
						    </Select>
				    </FormControl>
				</div>
			</div>
		</div>
		);
	}
}

export default MultipleContainer;