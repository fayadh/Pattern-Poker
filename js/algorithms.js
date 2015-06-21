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
			for (var j = 0; j < 10; j++) {
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
	this.linear = function() {
			//so that it creates a new card every time
			p = new pfac
			this.nbounds = 10
			keys = ['add', 'subtract', 'multiply', 'divide']
			//main series array
			series = []

			//solutions
			series[1] = []
			solution = series[1]

			init_rand = Math.floor(Math.random() * this.nbounds)

			//Dumps Main
			var series_operators = [] 
			var test_condition = 0

			//THE GUIDE
			//we need to make sure that the guide has 0 black holes. So we create a while loop, that only returns a series with 0 black holes.
			while(test_condition == 0) {
				//main variable
				series[0] = []
				var guide = series[0]

				//black holes
				var black_holes = 0

				//Create a random four element series 
				//setup a random first number and push it to the main series
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
				if(black_holes > 0) {
					//reset the guide. start over.
					guide = []
				} else {
					//exit the loop
					console.log(guide)
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
				guide = series[0]
				key = series[0][i][1][0]
				amount = series[0][i][1][1]
				op = [key, amount]

				//perform the operation
				p[key](amount)

				//append to solution set
				solution[i] = p.initial
			};
		}
	}

genP = new pfac;
keys = Object.keys(genP)
keys.shift()

var cardTypes = ['linear','single','multiple']

//here's the issue. I need things of varying difficulty. let's start with the hardest first.
// var pat = function() {
// 	var output = []
// 	var _pattern_d1 = function pattern() {
// 		p = new pfac
// 		keys = Object.keys(p)
// 		keys.shift()
// 		keys.pop()
// 		nsteps = keys.length - 1
// 		nlength = 4
// 		nrounds = 2
// 		nbounds = 10
// 		this.main = []


// 		// the pattern factory has to be able to produce three different patterns types. linear, single, and multiple.
// 		// each pattern is produced with one function. 
// 		// the deck has three cards
// 		// so we run three the creation loop three times.

// 		// function filter() {
// 		// 	pfac = new pfac 
// 		// 	loop = 10
// 		// 	alpha = 
// 		// 	for (var i = 0; i < loop; i++) {
// 		// 		for (var j = 0; j < loop; j++) {
					
// 		// 		};
// 		// 	};
// 		// }

// 		// //here we setup the rules of the pattern
// 		// var pattern = []
// 		// for (var j = 0; j < nlength; j++) {
// 		// 	randk = rand(0, nsteps)
// 		// 	randa = rand(1, nbounds)
// 		// 	// console.log(randk)
// 		// 	console.log(randk, randa)
// 		// 	pattern.push([keys[randk], randa])
// 		// };
// 		// output.push(pattern)

// 		// //here we execute the damn thing
// 		for (var i = 0; i < nrounds; i++) {
// 			for(var k = 0; k < output[0].length; k++) {
// 				//key
// 				_k = output[0][k][0]
// 				//amount
// 				_a = output[0][k][1]
// 				// debugger	
// 				this.main.push(p[_k](_a))
// 			}
// 		};
// 		return this.main


// 	};
// 	return new _pattern_d1
// }

// add(rand) ; add(rand2) ; subtract(rand3) ; multiply(rand4) 

// var player = function() {
// 	this.user_name = null
// 	this.email = null
// 	this.deck = [new pat, new pat, new pat];
// 	this.score = 0
// 	this.current_choice = null
// 	this.returnDeck = function() { return this.deck } 
// 	this.returnName = function() { return this.user_name }
// }	

// //this sets up a new game with everything we would want in it
// var newGame = function() { 
// 	this.players = [new player, new player]
// 	this.turn = null
// 	this.randStart = function() { return this.turn = rand(0, 1) }
// 	this.newDeck = function() {
// 		//cycle through players 
// 		this.players[0].patterns = [new pat, new pat, new pat]
// 		this.players[1].patterns = [new pat, new pat, new pat]
// 	}
// } 

// var game = new newGame

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// The game itself








