var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

var hellostyle = {
	color: "white"
}

function RandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function() {
  React.render(
    <HelloWorld style={hellostyle} date={new Date()} />,
    document.body
  );
}, 500);

setInterval(function() {
	document.body.style.backgroundColor = RandomColor()
}, 500)

// var ar = [ { number: 1}, { number: 5}, { number: 11}, { number: 123} ]

// var Array = React.createClass({
// 	render: function() {
// 		return (
// 			<div> 
// 				Hi look at: {this.props.data.number} 
// 			</div>
// 		)
// 	}
// })

// React.render(
// 	<Array data={ar} />,
// 	document.body
// )