//To allow for mobile touch experiences 
React.initializeTouchEvents(true)

document.body.style.backgroundColor = "black"
document.body.style.color = "white"
document.body.style.fontFamily = 'Lato'
document.body.style.fontWeight = '100'

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

var Info = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  },
  handleClick: function() {
    this.state.players[0].pot = prompt('New Pot: ')
  },
  handleUser: function() {
    this.state.players[0].user_name = prompt('New User Name: ')
  },
  handleClick2: function() {
    this.state.players[1].pot = prompt('New Pot: ')
  },
  handleUser2: function() {
    this.state.players[1].user_name = prompt('New User Name: ')
  },
  render: function() {
    image_style = {
      position: "absolute",
      display: "block"  
    };

    h1_style = {
      fontFamily: 'Big Caslon'
    }

    info_style = {
      backgroundColor: "black",
      opacity: "0.4",
      display: "inline-block",
      position: "absolute",
      padding: "1em"
    }
    return (
      <div style={info_style}>
        <img src="Images/Pattern_Poker.png" height="100px" /> <br></br> 

        <span>
        <h1 style={h1_style}> Pattern Poker </h1> <br></br> 
        Time: {this.props.date} <br></br> 
        POT: {game.pot} bitcoins. <br></br> 
        </span>

        <br></br> 

        <span>
        <strong> Player 1: </strong> <br></br> 
        User Name: {game.players[0].user_name} <br></br> 
        Pot: {game.players[0].pot}  <br></br> 

        <button onClick={this.handleUser}> Set User Name </button> <button onClick={this.handleClick}> Set Pot </button>
        </span>

        <br></br> 
        <br></br> 

        <span>
        <strong> Player 2: </strong>  <br></br> 
        User Name: {game.players[1].user_name} <br></br> 
        Pot: {game.players[1].pot} <br></br> 
        <button onClick={this.handleUser2}> Set User Name </button> <button onClick={this.handleClick2}> Set Pot </button>
        </span>
        <br></br> 
      </div>
    );
  }
});
//game clock
// setInterval(function() {
//   React.render(
//     <Info date={new Date()} props={game} />,
//     document.getElementById(info)
//   );
// }, 500);

// estyle = { 
//   padding: "1em"
// }
// // create a card class. Loop over the card class, 

// var Guide = React.createClass({
//   getInitialState: function() {
//     return {players: game.players}
//   }, 
//   render: function() {
//     var guide = [];
//     var messages = {}
//     console.log(x = this.props)
//     guide_in_array = this.props.props.props.deck;
//     for (var i = 0; i < guide_in_array.length; i++) {
//       s = guide_in_array[i][1].toString() + ""
//       guide.push(<div className={'m'} style={estyle}> {s} </div>)
//     }
//     return (
//       <div> 
//         {guide}
//       </div>
//     )
//   },
// })

// var Solution = React.createClass({
//   getInitialState: function() {
//     return {players: game.players}
//   }, 
//   render: function() {
//     var guide = [];
//     var messages = {}
//     console.log(x = this.props)
//     guide_in_array = this.props.props.props.deck;
//     for (var i = 0; i < guide_in_array.length; i++) {
//       s = guide_in_array[i][2].toString() + ""
//       guide.push(<div className={'m'} style={estyle}> {s} </div>)
//     }
//     return (
//       <div> 
//         {guide}
//       </div>
//     )
//   },
// })

// var Card = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Guide props={this.props} /> 
//         <Solution props={this.props} /> 
//       </div>
//     )
//   }
// })

// for(var i = 1; i < 3; i++) {
//   React.render(
//     <Card props={game.players[i-1]} />,
//     document.getElementById('player' + (i))
//   );
// }

var Deck = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  },
  render: function() {
      var card = []

      card_style = {
        backgroundColor: "white",
        display: "inline-block",
        width: "200px",
        marginLeft: "2em",
        marginRight: "2em",
        borderRadius: "5px",
        fontFamily: "Andale Mono",
        boxShadow: "0px 3px 10px 5px #888888"
      }

      guide_style = {
        color: "black",
        backgroundColor: RandomColor(),
        textAlign: "center",
        padding: "1em",
        borderTopRightRadius: "100px",
        borderTopLeftRadius: "5px"
      }

      solution_style = {
        color: "black",
        textAlign: "center",
        padding: "1em"
      }

      deck_style = {
        position: "absolute",
        top: "20%",

        left: "25%",
        right: "25%",
        width: "100%",
      }

      i = 0; 
      while(i < 3) { 
        card.push(
        <div style={card_style}>
          <div style={guide_style}> { (game.players[0].deck[i][1]+" ") + ""} </div>
          <div style={solution_style}> {game.players[0].deck[i][2] + ""} </div>
        </div>) 
        i++;
      }
      return (
        <div style={deck_style}> {card} </div>
      )
    }
})

var Deck2 = React.createClass({
  getInitialState: function() {
    return {players: game.players}
  },
  render: function() {
      var card = []

      card_style = {
        backgroundColor: "white",
        display: "inline-block",
        width: "200px",
        marginLeft: "2em",
        marginRight: "2em",
        borderRadius: "5px",
        fontFamily: "Andale Mono",
        boxShadow: "0px 3px 10px 5px #888888"
      }

      guide_style = {
        color: "black",
        backgroundColor: "white",
        textAlign: "center",
        padding: "1em",
        borderTopRightRadius: "100px",
        borderTopLeftRadius: "5px"
      }

      solution_style = {
        color: "black",
        textAlign: "center",
        padding: "1em"
      }

      deck_style = {
        position: "absolute",
        bottom: "20%",

        left: "25%",
        right: "25%",
        width: "100%",
      }

      i = 0; 
      while(i < 3) { 
        card.push(
        <div style={card_style}>
          <div style={guide_style}> { (game.players[1].deck[i][1]+" ") + ""} </div>
          <hr></hr>
          <div style={solution_style}> {game.players[1].deck[i][2] + ""} </div>
        </div>) 
        i++;
      }
      return (
        <div style={deck_style}> {card} </div>
      )
    }
})

var Main = React.createClass({
  render: function() {
    d = new Date() 
    h = d.getHours()
    m = d.getMinutes() 
    s = d.getSeconds()
    st = h + ":" + m + ":" + s
    return (
      <div>
        <Deck />
        <Deck2 />
        <Info date={st} props={game}/>
      </div>
    )
  }
})

setInterval(function() { 
  React.render(
    <Main />,
    document.getElementById('player1')
  )
}, 500)

// setInterval(function() {
// 	document.body.style.backgroundColor = RandomColor()
// }, 500)