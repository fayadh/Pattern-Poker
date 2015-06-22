//To allow for mobile touch experiences 
React.initializeTouchEvents(true)

document.body.style.backgroundColor = "black"
document.body.style.color = "white"

function RandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setPot() {
  game.players[0].pot = document.getElementById("pot1").value 
}
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------
// var Deck = React.createClass({
//   render: function() {
//     return (

//     )
//   }
// })

var Info = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  },
  handleClick: function() {
    this.state.players[0].pot = prompt('New Pot: ')
  },
  render: function() {

    return (
      <div>
        <img src="Images/Pattern_Poker.png" height="100px" />

        <span>
        Hello, <input type="text" placeholder="Your name here" />! <br></br> 
        Time: {this.props.date.toTimeString()} <br></br> 
        POT: {game.pot} bitcoins. <br></br> 
        </span>

        <br></br> 

        <span>
        Player 1: <br></br> 
        Set user: <br></br> 
        User Name: {game.players[0].user_name} <br></br> 
        Pot: {game.players[0].pot} <br></br> 
        Deck: 
        </span>

        <br></br> 
        <br></br> 

        <span>
        Player 2: <br></br> 
        User Name: {game.players[1].user_name} <br></br> 
        Pot: {game.players[1].pot} <br></br> 
         <button onClick={this.handleClick}> set </button>
        </span>
        <br></br> 
      </div>
    );
  }
});

//game clock
setInterval(function() {
  React.render(
    <Info date={new Date()} props={game} />,
    document.body
  );
}, 500);



var Player1 = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  }, 
  render: function() {
    return (
      <div> 
        {this.state.players[0].deck.map(function(e) { 
          return (
            <span> e </span>
          )
        })}
      </div>
    )
  },
})

React.render(
  <Player1 />,
  document.body
)










// setInterval(function() {
// 	document.body.style.backgroundColor = RandomColor()
// }, 500)