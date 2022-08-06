import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Nita Bhargavi Dangeti';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}