class Spaceship {
  constructor (name, crew, numPhasers, numShieldLayers) {
    this.name = name;
    this.phasers = numPhasers;
    this.shields = numShieldLayers;
    this.cloaked = false;
    this.warpDrive = "disengaged";

    if (crew.length > 0) {
      this.docked = false;
      crew.forEach ( (member) => {
        //debugger;
        member.currentShip = this;
      });
      this.crew = crew;
    } else {
      this.docked = true;
    }

    this.phasersCharge = "uncharged";
  }



}
