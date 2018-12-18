
import React from 'react';

//商品类别 如：Sporting Goods
class ProductCategoryRow extends React.Component{
    render(){
        return (
            <tr>
                <th colSpan='2'>{this.props.category}</th>
            </tr>
        );
    }
}

//某个商品信息 如 Football $49.99
class ProductRow extends React.Component{
    render(){
        var name = this.props.product.stocked ?
            this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
JSON.st

//展示所有商品的列表
class ProductTable extends React.Component{
    
    render(){
        var rows = [];
        var lastCategory = null;
        console.log('this.props.inStockOnly---'+this.props.inStockOnly);

        this.props.products.forEach((product)=>{
            console.log('lastCategory---'+lastCategory);

            if (product.name.indexOf(this.props.filterText) === -1 ||
                (!product.stocked&&this.props.inStockOnly)
            ){
                return
            }
            if (product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;

        });
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}
//搜索框
class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }
    handleFilterTextInputChange(e){
        this.props.onInFilterTextInput(e.target.value);

    }
    handleInStockInputChange(e){
        this.props.onInStockInput(e.target.checked);

    }
    render(){
        return (
            <form>
                <input type='text' placeholder='Search...'
                       value={this.props.filterText} onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input type='checkbox'
                           checked={this.props.inStockOnly}
                           onChange={this.handleInStockInputChange}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
//一个商品检索组件
class FilterProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText:'',
            inStockOnly:false,
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText){
        this.setState({
            filterText:filterText,
        });

    }
    handleInStockInput(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly,
        });
    }
    render(){
       return (
           <div>
               <SearchBar filterText={this.state.filterText}
                          inStockOnly={this.state.inStockOnly}
                          onInFilterTextInput={this.handleFilterTextInput}
                          onInStockInput={this.handleInStockInput}
               />
               <ProductTable products={this.props.products}
                             filterText={this.state.filterText}
                             inStockOnly={this.state.inStockOnly}
               />

           </div>
       );
   }
}
var products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

//根据数据开始渲染组件
class HqProductTable extends React.Component{

    render(){
        return (
            <FilterProductTable products={products}/>
        );
    }
}
export default HqProductTable;