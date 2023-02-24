import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

 length = 0;
 includeLetters = false
 includeNumbers = false
 includeSymbols = false
 password = "";


  constructor() {
    this.password = '';
   }

  ngOnInit() {
  }

  onChangeLength(value:string){
    const parseValue = parseInt(value);

    if(!isNaN(parseValue)){
      this.length = parseValue
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  enterPassword(){

    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChars = '';
    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }

    let generatePassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index]
    }
    this.password = generatePassword
    // this.password = 'MY PASSWORD!!'

    // console.log(`
    // About to generate password with the following:

    // Includes letters ${this.includeLetters}
    // Includes numbers ${this.includeNumbers}
    // Includes symbols ${this.includeSymbols}
    // `);
  }

  

}
