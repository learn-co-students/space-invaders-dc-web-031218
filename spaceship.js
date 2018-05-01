class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    this.crew = crew;

    if (!Array.isArray(this.crew) || !this.crew.length) {
      this.docked = true;
    } else {
      this.docked = false;
      
      for (let i in this.crew) {
        crew[i].currentShip = this;
      }
    }
  }
}
