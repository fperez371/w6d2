class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $lis = $('li');
    const $ul = $('ul');
    $ul.on("click", "li", (e) =>{
      const $square = $(e.currentTarget);
      this.makeMove($square);
    });
  }
  
  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert(`This ${e.msg.toLowerCase()}`);
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      const $ul = $('ul');
      $ul.off("click");
      $ul.addClass("game-over");

      const $figcaption = $("<figcaption>");

      if (this.game.winner()){
        $figcaption.html(`You win, ${this.game.winner()}!`);
      } else {
        $figcaption.html("It's a draw!");
      }
      this.el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $('<ul>');
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
       let $li = $("<li>");
       $li.data("pos", [rowIdx, colIdx]);

       $ul.append($li);
      }
    }
    this.el.append($ul);
  }
}


module.exports = View;
