class CrewMember {
  constructor (position, ship) {
    this.position = position;

    if (ship) {
      // let newShip = new Spaceship(ship);
      this.currentShip = ship;
    } else {
      this.currentShip = "Looking for a Rig";
    }
  }


  engageWarpDrive () {
    if ((typeof this.currentShip === "object") && (this.position === "Pilot")) {
       this.currentShip.warpDrive = "engaged";
    } else {
      return "had no effect";
    }
  }
  setsInvisibility () {
    //debugger;
    if ((typeof this.currentShip === "object") && this.position === "Defender") {
      // debugger;
       this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }
  chargePhasers () {
    if ((typeof this.currentShip === "object") && (this.position === "Gunner")) {
       this.currentShip.phasersCharge = "charged";
    } else {
      return "had no effect";
    }
  }
}
