// Observer Pattern
//Used when you want to update one or more parts of your app (Subscribers or Observers) when there is a change to a specific part of your code(Subject or Obserbed Object)

// This is the class used for the subscribers
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // the subscriber needs to implement a function (in this case notify) in order to subscribe to a Subject/ObservedObject
  notify() {
    console.log(`${this.name} has been notified.`)
  }
}

// This is the Object whose properties we want to observe
class CitizenPool {
  constructor(observers = []) {
    this.observers = observers
  }

  subscribeObserver(observer) {
    this.observers.push(observer)
  }

  unsubscribeObserver(observer) {
    const newObserversArray = this.observers.filter(
      (element) => element !== observer
    )
    this.observers = newObserversArray
  }

  notifyOne(person) {
    const matchedPerson = this.observers.find(
      ({ name }) => name === person.name
    )
    if (matchedPerson) matchedPerson.notify()
    // console.log('Person is: ', matchedPerson)
  }

  notifyAll() {
    this.observers.forEach((person) => person.notify())
  }

  notifyAdults() {
    this.observers.forEach((person) => {
      if (person.age >= 18) person.notify()
      // console.log(`log - `, person)
    })
  }

  notifySelected(fn) {
    this.observers.forEach((person) => {
      if (fn(person)) person.notify()
    })
  }
}

// Instances of the subscribers
const mark = new Person('Mark', 50)
const matt = new Person('Matt', 44)
const sue = new Person('Susan', 60)
const james = new Person('James', 15)
const rhian = new Person('Rhian', 16)

// instance of the Subject/Observed Object
const manchester = new CitizenPool([mark, matt, sue])

// let's subscribe the citizes to the CitizenPool object so they can be notified as appropriate
manchester.subscribeObserver(james)
manchester.subscribeObserver(rhian)

//
// let's notify the citizens/subscribers

// notify all subscribers
console.log('\nNotify all subscribers:')
manchester.notifyAll()

// notify all adults
console.log('\nNotify all adults:')
manchester.notifyAdults()

// notify just matt
console.log('\nNotify Matt:')
manchester.notifyOne(matt)

// notify subscribers based on custom function
console.log('\nNotify subscribers whose age is < 18:')
manchester.notifySelected((x) => x.age < 18)
