//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer, the this keyword is a word that helps direct js to the righ object or location

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer explicit(call, apply, and bind = refers "this" to the calling object), implicit (left of the dot is the reference), default(this looks to any variable it can find on a global context),
      //  new (uses function Func(capital)) and (new Func) to create new objects from the same function

  // 3) What is the difference between call and apply?

      //Answer call - invokes the function immediately and binds a specific function to a specific object with arguments that are passed in
      // apply - invoke the function immediately and binds a specific function to an object while using an array as its arguments

  // 4) What does .bind do?

      //Answer binds - bind creates a new bounded function wraped with its object (sets an object to the this word). this once the binded function is called it will refer to its orginal object and accept new arguments;



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    user = {
    username: "michael",
    email: "callmichael.bus@gmail.com",
    getUsername: function() {
      return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();



//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
        this.move = this.move + 10;
        return this.move;

    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  var prius2 = getYear.call(prius);
  var mustang2 = getYear.call(mustang2);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here it will return the username of the object that is called

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here it is not bound to anything

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
