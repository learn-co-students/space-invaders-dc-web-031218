class Spaceship {
  constructor(name,crew,phasers,shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = !!this.crew.length ? false : true;
    this.crew.forEach(cm=>cm.currentShip = this);
  }

}
