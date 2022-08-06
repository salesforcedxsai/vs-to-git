import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Ashwath Babu';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}