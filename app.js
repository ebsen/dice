(function() {
  'use strict';

  var rollButton = document.getElementById('rollBtn');
  var moreSides = document.getElementById('moreSides');
  var lessSides = document.getElementById('lessSides');
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
    sides: {
      number: 6,
      update: function () {
        document.getElementById('sides').textContent = this.number;
      }
    }
  };

  rollButton.addEventListener('click', roll);
  rollButton.addEventListener('mousedown', activateButton);
  rollButton.addEventListener('mouseup', deactivateButton);

  // moreDie.addEventListener('click', incrementDie);
  // lessDie.addEventListener('click', decrementDie);
  moreSides.addEventListener('click', incrementSides);
  moreSides.addEventListener('mousedown', activateButton);
  moreSides.addEventListener('mouseup', deactivateButton);
  lessSides.addEventListener('click', decrementSides);
  lessSides.addEventListener('mousedown', activateButton);
  lessSides.addEventListener('mouseup', deactivateButton);

  function roll() {
    var result = document.getElementById('result');
    // TODO: When that animation is _done_, set the new value and animate it in...
    result.textContent = Number(Math.floor(Math.random() * app.sides.number) + 1).toString();
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
  function incrementSides() {
    if (app.sides.number >= 4) {
      app.sides.number++;
      app.sides.update();
    }
  };
  function decrementSides() {
    if (app.sides.number > 4) {
      app.sides.number--;
      app.sides.update();
    }
  };
}());
