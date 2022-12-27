//joke variables
const jokeOne = "What do Alexander the Great and Winnie the Pooh have in common? Same middle name."
const jokeTwo = "What is the opposite of a croissant? A happy uncle."
const jokeThree = "What's the opposite of irony? Wrinkly."
const jokeFour = "What do you call a woman who sets fire to all her bills? Bernadette."
const jokeFive = "What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing."
const jokeSix = "What do you call the wife of a hippie? A Mississippi."
const jokeSevern = "How do you make holy water? You boil the hell out of it."
const jokeEight = "What do you call a bee that can't make up its mind? A maybe."
const jokeNine = "Did you hear about the guy whose whole left side was cut off? He's all right now."
const jokeTen = "Will glass coffins be a success? Remains to be seen."

// quote variables 
const quoteOne = "Do not let yesterday take up too much of today. ~ Will Rogers "
const quoteTwo = "If you are going through hell, keep going. ~ Winston Churchill"
const quoteThree = "Every man dies. Not every man lives.~ William Wallace"
const quoteFour = "Life shrinks or expands in proportion to your courage.~ Anais Nin"
const quoteFive = "Nothing is impossible. The word itself says “Im possible!” ~ Audrey Hepburn"
const quoteSix = "We need much less than we think we need. ~ Maya Angelou"
const quoteSevern = "If things go wrong, do not go with them. ~ Roger Babson"
const quoteEight = "Everything has beauty, but not everyone sees it. ~ Confucius"
const quoteNine = "Simplicity is the ultimate sophistication. ~ Leonardo da Vinci"
const quoteTen = "Whatever you are, be a good one. ~ Abraham Lincoln"

//fact variables
const factOne = "A shark is the only known fish that can blink with both eyes."
const factTwo = "Rubber bands last longer when refrigerated."
const factThree = "There are 293 ways to make change for a dollar."
const factFour = "A dime has 118 ridges around the edge."
const factFive = "A cat has 32 muscles in each ear."
const factSix = "Tigers have striped skin, not just striped fur."
const factSevern= "The giant squid has the largest eyes in the world."
const factEight = "In many advertisements, the time displayed on a watch is 10:10."
const factNine = "Most people fall asleep in seven minutes."
const factTen = "'Stewardesses' is the longest word that is typed with only the left hand."

//language variables
const langOne = "I enjoy coding is... hau'oli au i ka coding in Hawaiian! "
const langTwo = "I enjoy coding is.... kodowanie sprawia mi przyjemność in Polish! "
const langThree = "I enjoy coding is... мне нравится программировать in Russian! "
const langFour = "I enjoy coding is... 私はコーディングを楽しんでいます in Chinese! "
const langFive = "I enjoy coding is... disfruto programando in Spanish!"
const langSix = "I enjoy coding is... jeg nyder at kode in Danish "
const langSevern = "I enjoy coding is... He pai ki ahau te whakawaehere in Māori"
const langEight = "I enjoy coding is... ngiyakujabulela ukubhala amakhodi in Zulu!"
const langNine = "I enjoy coding is... Ich genieße das Programmieren in German!"
const langTen = "I enjoy coding is... nautin koodauksesta in Finnish!"




const jokeArray = [jokeOne, jokeTwo, jokeThree, jokeFour, jokeFive, jokeSix, jokeSevern, jokeEight, jokeNine, jokeTen]
const quoteArray = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix, quoteSevern, quoteEight, quoteNine, quoteTen]
const factArray = [factOne, factTwo, factThree, factFour, factFive, factSix, factSevern, factEight, factNine, factTen]
const langArray = [langOne, langTwo, langThree, langFour, langFive, langSix, langSevern, langEight, langNine, langTen]

//returns a random item from an array
const randomArray = (array) => {
    return array[Math.floor(Math.random()*array.length)];

}

//returns randomArray(array) depending on random number generated 
const randomNum = () => {
    let rNum = Math.floor(Math.random() * 101);
    
    if(rNum <= 25) {
        return randomArray(jokeArray);
    }
    else if(rNum <= 50 ) {
        return randomArray(quoteArray);
    }
    else if(rNum <= 75) {
        return randomArray(factArray);
    }
    else if(rNum <= 100 ) {
        return randomArray(langArray);
    }
 
}

console.log(randomNum());

