const View = require('./ttt-view.js');
const Game = require('./game.js');
 

  $(() => {
    const $el = $('figure');
    const game = new Game();
    new View(game, $el);
  });

  