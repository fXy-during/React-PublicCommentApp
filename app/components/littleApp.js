import React from 'react';


class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.onHandleKeyUp = this.onHandleKeyUp.bind(this);
        this.onHandleRadioCheck = this.onHandleRadioCheck.bind(this);
    }
    onHandleKeyUp(filterText){
        this.setState({
            filterText: filterText
        })
    }
    onHandleRadioCheck(inStockOnly){
        alert("ing ");
        this.setState({
            inStockOnly: inStockOnly
        })
    }
    render(){
        return(
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onHandleKeyUp={this.onHandleKeyUp}
                    onHandleRadioCheck={this.onHandleRadioCheck}/>

                <ProductTable 
                    data={PRODUCTS}
                    inStockOnly={this.state.inStockOnly}
                    filterText={this.state.filterText}/>
            </div>
        )
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyup = this.handleKeyup.bind(this);
        this.handleRadioCheck = this.handleRadioCheck.bind(this);
    }
    handleKeyup(e){
        this.props.onHandleKeyUp(e.target.value);
    }

    handleRadioCheck(e){
        this.props.onHandleRadioCheck(e.target.checked);
    }

    render(){
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;
        return(
            <div>
                <input 
                 type='text' 
                 placeholder='Search...'
                 onChange={this.handleKeyup}
                 value={filterText} />
                 <p>
                 <input 
                 type='checkbox'
                 onChange={this.handleRadioCheck} 
                 checked={inStockOnly}/>
                 <label>Only show products in stock</label>
                 </p>
            </div>
        )
    }
}


class ProductTable extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let rows = [];
        let lastCategory = null;
        this.props.data.forEach(function(item, index){
            if (item.category !== lastCategory) {
                rows.push(<ProductCategoryRow 
                    category={item.category} 
                    key={item.category} /> );
            }

            rows.push(<ProductRow product={item} key={item.name} />);
            lastCategory = item.category;
        })

        return(
           <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>           

        )
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        return(
            <tr><th colSpan='2'>{this.props.category}</th></tr>
        )
    }
}

class ProductRow extends React.Component{
    render(){
        let name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default FilterableProductTable;