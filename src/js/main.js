import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class Questionaire {
    constructor(data) {
        this.data = data;
        let rgrp;
        if(data.type === 'radiogroup') {
            rgrp = new Radio(data);
        }else {
            formData = new Dropdown(data);
        }
    }
}

class Radio{
  constructor(data) {
    let question, options;
    for(var i = 0; i<data.length; i++) {
        question = data[i].title;
        options = data[i].options;
    }
  }
}

class Dropdown {
    constructor(data) {
        let question, options;
        for(var i = 0; i<data.length; i++) {
            question = data[i].title;
            options = data[i].options;
        }
      }
}

let form = new Questionaire();