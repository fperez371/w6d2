class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.fromTowerIdx = null;

    this.setupTowers();
    this.render();
    
  }

  setupTowers() {
    this.$el.empty();

    let $tower, $disk;

    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
      $tower =  $('<ul>');
      for (let diskIdx = 0; diskIdx < 3; diskIdx++) {
        $disk = $('<li>');
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render() {
    const $towers = this.$el.find('ul');
    $towers.removeClass();

    if (this.fromTowerIdx !== null) {
      $tower.eq(this.fromTowerIdx).addClass('selected')
    }

    this.game.towers.forEach((disks, towerIdx) => {
      const $disks = $towers.eq(towerIdx).children();
      $disks.removeClass();

      disks.forEach((diskWidth, diskIdx) => {
        $disks.eq(-1 * (diskIdx + 1)).addClass(`disk-${diskWidth}`);
      });
    });
  }
}

module.exports = View;