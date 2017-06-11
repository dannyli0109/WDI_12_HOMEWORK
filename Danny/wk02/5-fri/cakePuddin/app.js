var A_KEY_CODE = 97;
var Z_KEY_CODE = 122;
var ZERO_KEY_CODE = 48;
var NINE_KEY_CODE = 57;
var ENTER_KEY_CODE = 13;
var DELETE_KEY_CODE = 8;
var SETTING_STATE = 0;
var START_STATE = 1;
var FINISH_STATE = 2;


var game = {
  length: 0,
  state: 0,
  alphabets: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  guessedChar: [],
  display: [],
  MAX_LIFE: 5,
  life: 5,
  lifeText: "",
  word: "",
  log: [],
  wordArray: "able about account acid across act addition adjustment advertisement after again against agreement air all almost among amount amusement and angle angry animal answer ant any apparatus apple approval arch argument arm army art as at attack attempt attention attraction authority automatic awake baby back bad bag balance ball band base basin basket bath be beautiful because bed bee before behaviour belief bell bent berry between bird birth bit bite bitter black blade blood blow blue board boat body boiling bone book boot bottle box boy brain brake branch brass bread breath brick bridge bright broken brother brown brush bucket building bulb burn burst business but butter button by cake camera canvas card care carriage cart cat cause certain chain chalk chance change cheap cheese chemical chest chief chin church circle clean clear clock cloth cloud coal coat cold collar colour comb come comfort committee common company comparison competition complete complex condition connection conscious control cook copper copy cord cork cotton cough country cover cow crack credit crime cruel crush cry cup cup current curtain curve cushion damage danger dark daughter day dead dear death debt decision deep degree delicate dependent design desire destruction detail development different digestion direction dirty discovery discussion disease disgust distance distribution division do dog door doubt down drain drawer dress drink driving drop dry dust ear early earth east edge education effect egg elastic electric end engine enough equal error even event ever every example exchange existence expansion experience expert eye face fact fall false family far farm fat father fear feather feeble feeling female fertile fiction field fight finger fire first fish fixed flag flame flat flight floor flower fly fold food foolish foot for force fork form forward fowl frame free frequent friend from front fruit full future garden general get girl give glass glove go goat gold good government grain grass great green grey grip group growth guide gun hair hammer hand hanging happy harbour hard harmony hat hate have he head healthy hear hearing heart heat help high history hole hollow hook hope horn horse hospital hour house how humour I ice idea if ill important impulse in increase industry ink insect instrument insurance interest invention iron island jelly jewel join journey judge jump keep kettle key kick kind kiss knee knife knot knowledge land language last late laugh law lead leaf learning leather left leg let letter level library lift light like limit line linen lip liquid list little living lock long look loose loss loud love low machine make male man manager map mark market married mass match material may meal measure meat medical meeting memory metal middle military milk mind mine minute mist mixed money monkey month moon morning mother motion mountain mouth move much muscle music nail name narrow nation natural near necessary neck need needle nerve net new news night no noise normal north nose not note now number nut observation of off offer office oil old on only open operation opinion opposite or orange order organization ornament other out oven over owner page pain paint paper parallel parcel part past paste payment peace pen pencil person physical picture pig pin pipe place plane plant plate play please pleasure plough pocket point poison polish political poor porter position possible pot potato powder power present price print prison private probable process produce profit property prose protest public pull pump punishment purpose push put quality question quick quiet quite rail rain range rat rate ray reaction reading ready reason receipt record red regret regular relation religion representative request respect responsible rest reward rhythm rice right ring river road rod roll roof room root rough round rub rule run sad safe sail salt same sand say scale school science scissors screw sea seat second secret secretary see seed seem selection self send sense separate serious servant sex shade shake shame sharp sheep shelf ship shirt shock shoe short shut side sign silk silver simple sister size skin skirt sky sleep slip slope slow small smash smell smile smoke smooth snake sneeze snow so soap society sock soft solid some son song sort sound soup south space spade special sponge spoon spring square stage stamp star start statement station steam steel stem step stick sticky stiff still stitch stocking stomach stone stop store story straight strange street stretch strong structure substance such sudden sugar suggestion summer sun support surprise sweet swim system table tail take talk tall taste tax teaching tendency test than that the then theory there thick thin thing this thought thread throat through through thumb thunder ticket tight till time tin tired to toe together tomorrow tongue tooth top touch town trade train transport tray tree trick trouble trousers true turn twist umbrella under unit up use value verse very vessel view violent voice waiting walk wall war warm wash waste watch water wave wax way weather week weight well west wet wheel when where while whip whistle white who why wide will wind window wine wing winter wire wise with woman wood wool word work worm wound writing wrong year yellow yes yesterday you young".toLowerCase().split(" "),
  currentWordArray: [],
  startGame: function(length) {
    game.display = [];
    game.setWordLength(length)
    var word = game.generateWord()
    game.word = word
    console.log(game.word);
    game.lifeText = "Life: " + game.life
    for (var i = 0; i < game.word.length; i++) {
      game.display.push("_")
    }
  },
  generateWord: function() {
    if (game.currentWordArray.length === 0) {
      game.currentWordArray = game.wordArray
    }
    var randomIndex = Math.floor(Math.random() * game.currentWordArray.length)
    return game.currentWordArray[randomIndex]
  },
  makeGuess: function(char) {
    var found = false;
    for(var i = 0; i < game.word.length; i++) {
      if (game.word[i] === char) {
        game.display[i] = char
        found = true;
      }
    }
    game.guessedChar.push(char)
    console.log(game.display);
    console.log(game.guessedChar);
    if (!found) {
      game.life --;
      game.lifeText = "Life: " + game.life

    }
    game.checkStatus();
    return found ? true : false
  },
  checkStatus: function() {
    if (game.life <= 0) {
      console.log("you lose");
      game.log[0] = "You lose"
      game.log[1] = "The word was: " + game.word
      game.log[2] = "Press enter to restart"
      game.state ++;

    }

    // to check if every character in the word match guessedChar
    if (game.word.split("").every(function(element) {
      return game.guessedChar.some(x => x === element)
    })) {
      console.log("you won");
      game.log[0] = "You won!"
      game.log[1] = "The word was: " + game.word
      game.log[2] = "Press enter to restart";
      game.state ++;
    }

  },
  init: function() {
    game.life = game.MAX_LIFE
    game.display = []
    game.guessedChar = []
    game.log = []
    game.currentWordArray = []
    game.lifeText = "Please eneter the length of the word (1 - 14) then press enter"

  },
  isValidInput: function(char) {
    if (game.guessedChar.some(x => x === char)) {
      return false
    }
    return true
  },
  setWordLength: function(length) {
    game.wordArray.forEach(function(element) {
      if (element.length == length) {
        game.currentWordArray.push(element);
      }
    })
  }
}


var view = {
  guessed: document.querySelector(".guessed"),
  display: document.querySelector(".display"),
  log: document.querySelectorAll(".log"),
  alphabetList: document.querySelector("ul"),
  life: document.querySelector(".life"),
  title: document.querySelector("h1"),
  update: function() {
    view.display.textContent = String(game.display.join(" "))
    view.log[0].textContent = game.log[0];
    view.log[1].textContent = game.log[1];
    view.log[2].textContent = game.log[2];
    view.life.textContent = game.lifeText;
  },
  init: function() {
    view.alphabetList.innerHTML = ""

  },
  setList: function() {
    for (var i = 0; i < game.alphabets.length; i++) {
      var alphabet = document.createElement("li");
      alphabet.textContent = game.alphabets[i]
      view.alphabetList.appendChild(alphabet)
    }
  }
}

document.addEventListener("keypress", function(event) {
  if (game.state == SETTING_STATE) {
    if ((event.which >= ZERO_KEY_CODE) && (event.which <= NINE_KEY_CODE)) {
        game.display.push(String.fromCharCode(event.which))
    } else if (event.which == ENTER_KEY_CODE) {
        game.startGame(game.display.join(""));
        view.setList();
        game.state ++;
    }
  } else if (game.state == START_STATE) {
    if ((event.which >= A_KEY_CODE) && (event.which <= Z_KEY_CODE)) {
      var char = String.fromCharCode(event.which)
      if (game.isValidInput(char)) {
          view.alphabetList.children[event.which - A_KEY_CODE].className = game.makeGuess(char) ? "rightGuess" : "wrongGuess"
      }
    }
  } else if (game.state == FINISH_STATE){
    if (event.which == ENTER_KEY_CODE) {
      game.state = SETTING_STATE;
      game.init()
      view.init()
    }
  }
  view.title.className = (game.state == SETTING_STATE)? "" : "cross"
  view.update()
})
game.init()
view.init()
view.update()
