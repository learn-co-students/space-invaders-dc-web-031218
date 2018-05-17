class CrewMember {
	constructor(position, currentShip = "Looking for a Rig"){
		this.position = position
		this.currentShip = currentShip
		// if (this.currentShip.typeof(Object)){
		// 	this.currentShip.crewMembers.push(this)
		// } tried this, didn't work.
		
	}

	engageWarpDrive(){
		return "had no effect"
	}

	setsInvisibility(){
		console.log(this)
		if (this.position === "Defender" && typeof this.currentShip === "object"){
			this.currentShip.cloaked = true
			console.log(this.currentShip)
			return true
			// this.currentShip.cloaked = true -- tried this, didn't work
		} else {
			return "had no effect"
		}
	}

	chargePhasers(){
		return "had no effect"
	}

}
