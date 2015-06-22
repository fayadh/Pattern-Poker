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

// //game clock
// setInterval(function() {
//   React.render(
//     <Info date={new Date()} props={game} />,
//     document.body
//   );
// }, 500);

estyle = { 
  padding: "1em"
}
// create a card class. Loop over the card class, 
  
// var Guide = React.createClass({
//   render: function() {
//     return (

//     )
//   }
// })

// var Solution = React.createClass({
//   render: function() {
//     return (

//     )
//   }
// })

// var Card = React.creatClass({
//   render: function() {
//     return (
//       <div>
//         <Guide />
//         <Solution />
//       </div>
//     )
//   }
// })

var Guide = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  }, 
  render: function() {
    var guide = [];
    var messages = {}
    console.log(x = this.props)
    guide_in_array = this.props.props.props.deck;
    for (var i = 0; i < guide_in_array.length; i++) {
      s = guide_in_array[i][1].toString() + ""
      guide.push(<div className={'m'} style={estyle}> {s} </div>)
    }
    return (
      <div> 
        {guide}
      </div>
    )
  },
})

var Solution = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  }, 
  render: function() {
    var guide = [];
    var messages = {}
    console.log(x = this.props)
    guide_in_array = this.props.props.props.deck;
    for (var i = 0; i < guide_in_array.length; i++) {
      s = guide_in_array[i][2].toString() + ""
      guide.push(<div className={'m'} style={estyle}> {s} </div>)
    }
    return (
      <div> 
        {guide}
      </div>
    )
  },
})

var Card = React.createClass({
  render: function() {
    return (
      <div>
        <Guide props={this.props} /> 
        <Solution props={this.props} /> 
      </div>
    )
  }
})

  React.render(
    <Card props={game.players[0]} />,
    document.getElementById('player1')
  );

  React.render(
    <Card props={game.players[1]} />,
    document.getElementById('player2')
  );



// <Card /> 

// <Card>
//   <Guide />
//   <Solution />
// <Card>










// setInterval(function() {
// 	document.body.style.backgroundColor = RandomColor()
// }, 500)