var data = [
	{ type: "diamond", color: "red", number: "A" },
	{ type: "diamond", color: "red", number: "2" },
	{ type: "diamond", color: "red", number: "3" },
	{ type: "diamond", color: "red", number: "4" },
	{ type: "diamond", color: "red", number: "5" },
	{ type: "diamond", color: "red", number: "6" },
	{ type: "diamond", color: "red", number: "7" },
	{ type: "diamond", color: "red", number: "8" },
	{ type: "diamond", color: "red", number: "9" },
	{ type: "diamond", color: "red", number: "10" },
	{ type: "diamond", color: "red", number: "J" },
	{ type: "diamond", color: "red", number: "Q" },
	{ type: "diamond", color: "red", number: "K" },
	{ type: "heart", color: "red", number: "A" },
	{ type: "heart", color: "red", number: "2" },
	{ type: "heart", color: "red", number: "3" },
	{ type: "heart", color: "red", number: "4" },
	{ type: "heart", color: "red", number: "5" },
	{ type: "heart", color: "red", number: "6" },
	{ type: "heart", color: "red", number: "7" },
	{ type: "heart", color: "red", number: "8" },
	{ type: "heart", color: "red", number: "9" },
	{ type: "heart", color: "red", number: "10" },
	{ type: "heart", color: "red", number: "J" },
	{ type: "heart", color: "red", number: "Q" },
	{ type: "heart", color: "red", number: "K" },
	{ type: "spade", color: "black", number: "A" },
	{ type: "spade", color: "black", number: "2" },
	{ type: "spade", color: "black", number: "3" },
	{ type: "spade", color: "black", number: "4" },
	{ type: "spade", color: "black", number: "5" },
	{ type: "spade", color: "black", number: "6" },
	{ type: "spade", color: "black", number: "7" },
	{ type: "spade", color: "black", number: "8" },
	{ type: "spade", color: "black", number: "9" },
	{ type: "spade", color: "black", number: "10" },
	{ type: "spade", color: "black", number: "J" },
	{ type: "spade", color: "black", number: "Q" },
	{ type: "spade", color: "black", number: "K" },
	{ type: "clover", color: "black", number: "A" },
	{ type: "clover", color: "black", number: "2" },
	{ type: "clover", color: "black", number: "3" },
	{ type: "clover", color: "black", number: "4" },
	{ type: "clover", color: "black", number: "5" },
	{ type: "clover", color: "black", number: "6" },
	{ type: "clover", color: "black", number: "7" },
	{ type: "clover", color: "black", number: "8" },
	{ type: "clover", color: "black", number: "9" },
	{ type: "clover", color: "black", number: "10" },
	{ type: "clover", color: "black", number: "J" },
	{ type: "clover", color: "black", number: "Q" },
	{ type: "clover", color: "black", number: "K" },
]

var Attributes = React.createClass({
	render: function() {
		console.log(this.props)
		var attributes = this.props.data.map(function(attribute) {
		return (
				<p> {attribute.type} {attribute.color} {attribute.number} </p> 
			);
		});
		return (
			<div class="attributes">
				{attributes}
			</div>
		);
	}
})

var Card = React.createClass({
	render: function() {
		return (
			<div class="card">
				<h1> this is a card </h1>
				<Attributes data={this.props.data} />
			</div>
		);
	}
});

	var List = React.createClass({
render: function() {
	// console.log(this.props.data)
	return (
		<div>
			<h1 className="list"> List of Cards </h1>
			<Card data={this.props.data}/>
		</div>
	);
}
});

	// only one render function is really necessary
React.render(
	<List data={data}/>,
	document.body
	)
