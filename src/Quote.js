import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import './Quote.css';

class Quote extends Component {
	constructor (props) {
		super(props)
		this.state ={
			quote: '',
			author: ''
		}
	}

	componentDidMount(){
		this.getQuote();
	}

	getQuote(){
		let url='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		axios.get(url)
			.then(resp => {
				let data = resp.data.quotes
				let quoteNum = Math.floor(Math.random() * data.length)
				let randomQuote = data[quoteNum]

				this.setState({
					quote: randomQuote['quote'],
					author: randomQuote['author']
				})
			})
	}

	getAnotherQuote = () => {
		this.getQuote();
	}

	render () {
		const {quote, author} = this.state;

		return (
			<div id='wrapper'>
			<h1 className='title'>Your daily inspirational quote</h1>
				<div id='quote-box'>
				<div id='the-quote'><p>{quote}</p></div>
				<div id='author'><h5>{author}</h5></div>
				<button id='another-quote' className='buttons' onClick={this.getAnotherQuote}>Another Quote</button>
				</div>
			</div>
			)
	}
}

export default Quote;