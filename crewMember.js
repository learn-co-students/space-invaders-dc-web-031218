class CrewMember {
	constructor(position){
		this.position = position;
		this.currentShip = 'Looking for a Rig';
	}

	setShip(ship){
		this.currentShip = ship;
	}

	engageWarpDrive(){
		let isPilot = this.position === 'Pilot';
		let hasShip = typeof(this.currentShip) === 'object';
		if (isPilot && hasShip){
			this.currentShip.warpDrive = 'engaged';
		}
		return 'had no effect'
	}	
	setsInvisibility(){
		let isDefender = this.position === 'Defender';
		let hasShip = typeof(this.currentShip) === 'object';
		if (isDefender && hasShip){
			this.currentShip.cloaked = true;
		}
		return 'had no effect'
	}
	chargePhasers(){
		let isGunner = this.position === 'Gunner';
		let hasShip = typeof(this.currentShip) === 'object';
		if (isGunner && hasShip){
			this.currentShip.phasersCharge = 'charged';
		}
		return 'had no effect'
	}
}
