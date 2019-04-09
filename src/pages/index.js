import { Component } from "react"
import {connect} from 'dva'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			num: ''
		}
	}

	handleClick = () => {
		this.props.dispatch({
			type: 'index/handle'
		})
	}

	handleState = () => {
		this.setState({
			num: this.state.num + 1
		})
	}

	render() {
		console.log(this.props)
		return (
			<div style={{width: 500, textAlign: 'center', margin: '0 auto'}}>
				<button onClick={this.handleClick}>点击调用</button>
				<button onClick={this.handleState}>改变state1111</button>
			</div>
		);
	}
}

export default connect(state => state)(App)