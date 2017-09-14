 class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemEnter() {
    this.setState({hover: true});
  }

  onListItemExit() {
    this.setState({hover: false});
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (<li style={style} onMouseEnter={this.onListItemEnter.bind(this)} onMouseLeave={this.onListItemExit.bind(this)}>{this.props.item}</li>);
  }

 }

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<ul> {this.props.items.map(item => <GroceryListItem key={item} item={item} /> )} </ul>);
  }
}

ReactDOM.render(<GroceryList items={['Watermelon', 'Bread']}/>, document.getElementById('app'));