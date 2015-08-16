(function() {
  'use strict';

  var rollButton = document.getElementById('rollBtn');
  var moreFaces = document.getElementById('moreFaces');
  var lessFaces = document.getElementById('lessFaces');
  // var moreDie = document.getElementById('moreDie');
  // var lessDie = document.getElementById('lessDie');

  // defaults
  var app = {
    die: {
      number: 1,
      update: function () {
        document.getElementById('die').textContent = this.number;
      }
    },
    faces: {
      number: 6,
      update: function () {
        document.getElementById('faces').textContent = this.number;
      }
    }
  };

  rollButton.addEventListener('click', roll);
  rollButton.addEventListener('mousedown', activateButton);
  rollButton.addEventListener('mouseup', deactivateButton);

  // moreDie.addEventListener('click', incrementDie);
  // lessDie.addEventListener('click', decrementDie);
  moreFaces.addEventListener('click', incrementFaces);
  lessFaces.addEventListener('click', decrementFaces);

  function roll() {
    var result = document.getElementById('result');
    // TODO: When that animation is _done_, set the new value and animate it in...
    result.textContent = Number(Math.floor(Math.random() * app.faces.number) + 1).toString();
  }
  function activateButton() {
    this.classList.add('pure-button-active');
  }
  function deactivateButton() {
    this.classList.remove('pure-button-active');
  }

  function incrementDie() {
    if (app.die.number >= 1) {
      app.die.number++;
      app.die.update();
    }
  };
  function decrementDie() {
    if (app.die.number > 1) {
      app.die.number--;
      app.die.update();
    }
  };
  function incrementFaces() {
    if (app.faces.number >= 6) {
      app.faces.number++;
      app.faces.update();
    }
  };
  function decrementFaces() {
    if (app.faces.number > 6) {
      app.faces.number--;
      app.faces.update();
    }
  };
}());
