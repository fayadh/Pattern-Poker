// you'll have to do something n times. 
// n is also the length of the pattern. 
// so it's actually just a timeseries of events.
// somepatterns can be natural patterns. Found in the sublime set. 

function rand(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

sublime_set = [ Math.PI, Math.E ] 
difficulty = ['easy', 'challenging', 'lulz.' ]

var pfac = function() {
	this.initial = 0;
	this.add = function(amount) { return this.initial = this.initial + amount }
	this.subtract = function(amount) { return this.initial = this.initial - amount } 
	this.multiply = function(amount) { return this.initial = this.initial * amount }
	this.divide = function(amount) { return this.intial = this.initial / amount } 
	this.keys = ['add', 'subtract', 'multiply', 'divide']
	this.operators = ['+', '-', '/', '*']
	this.possibilities = function(n1, n2) {
		operators = ['+', '-', '/', '*']
		//conditional count
		var count = 0
		var disc = []
		for (var i = 0; i < operators.length; i++) {
			for (var j = 1; j < 10; j++) {
				//the operation string
				s = n1+this.operators[i]+j+'=='+n2;
				if (eval(s) == true) {
					count++
					disc.push(s)
				}
			};
		};
		return disc
	}
	this.card = function(type) {
			//so that it creates a new card every time
			p = new pfac
			this.nbounds = 10
			keys = ['add', 'subtract', 'multiply', 'divide']
			//main card array
			card = []

			//create solutions section
			card[1] = []
			card[2] = [] 
			clean_guide = card[1]
			solution = card[2]

			//initial random element for guide
			init_rand = Math.floor(Math.random() * this.nbounds)

			//while loop testing condition
			var test_condition = 0

			//THE GUIDE
			//we need to make sure that the guide has 0 black holes. So we create a while loop, that only returns a card with 0 black holes.
			while(test_condition == 0) {
				//main variable
				card[0] = []
				var guide = card[0]

				//black holes
				var black_holes = 0

				//Create a random four element card 
				//setup a random first number and push it to the main card
				p.initial = init_rand
				guide[0] = [p.initial]
				guide[0].push("undefined")

				//append 3 random elements to the guide 
				for (var i = 1; i < 4; i++) {
					//choose a random operation set
					randk = rand(0, keys.length - 1)
					randa = rand(1, this.nbounds)

					//set operation
					op = [keys[randk], randa]

					//perform it
					p[op[0]](op[1])

					//log to the guide array
					guide[i] = [p.initial, op]

					//record all black holes
					examined_element = this.possibilities(guide[i - 1][0], guide[i][0])
					if (examined_element.length > 1) { black_holes++ }
				}
	
				//if you find a black hole, report it.
				if(black_holes !== type) {
					//reset the guide. start over.
					guide = []
				} else {
					//exit the loop
					// console.log(guide)
					// console.log(black_holes)
					test_condition = 1
				}
			}

			//choose an new random variable
			init_rand = rand(1, 10)
			solution[0] = init_rand

			//reset the inital variable
			p.initial = init_rand

			//SOLUTION SPACE
			for (var i = 1; i < 4; i++) {
				//find the specific operation
				guide = card[0]
				key = card[0][i][1][0]
				amount = card[0][i][1][1]
				op = [key, amount]

				//perform the operation
				p[key](amount)

				//append to solution set
				solution[i] = p.initial
			};

			for (var i = 0; i < card[0].length; i++) {
				clean_guide.push(card[0][i][0])
			};

			return card
	}
	this.deck = function() { 
		deck = []
		for (var i = 0; i < 3; i++) {
			w = new pfac 
			deck.push(w.card(0))
		};
		return deck 
	}
}

genP = new pfac;
keys = Object.keys(genP)
keys.shift()

var player = function(pot) {
	this.user_name = "Not Set."
	this.email = null
	this.deck = (new pfac).deck();
	this.newDeck = function() { return this.deck = (new pfac).deck() }
	this.score = 0
	this.current_choice = null
	this.pot = pot
	this.returnName = function() { return this.user_name }
}	

//this sets up a new game with everything we would want in it
var newGame = function() { 
	this.pot = 1000
	this.players = [new player(this.pot/2), new player(this.pot/2), this.pot]
	this.turn = null
	this.randStart = function() { return this.turn = rand(0, 1) }
	this.newDeck = function() {
		//reset each deck
		this.players[0].deck = (new pfac).deck();
		this.players[1].deck = (new pfac).deck();
	}
} 

var game = new newGame







