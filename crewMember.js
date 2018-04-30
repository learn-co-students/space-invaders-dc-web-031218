class CrewMember {
  constructor(position, currentShip) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.currentShip !== 'Looking for a Rig') {
      if (this.position === 'Gunner') {
        this.currentShip.warpDrive = 'engaged'
      } else {
        return 'had no effect';
      }
    } else {
      return 'had no effect';
    }
  }
  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }
  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.phasersCharge = 'charged'
    } else {
      return 'had no effect'
    }
  }
}
