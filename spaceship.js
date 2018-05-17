class Spaceship {
	constructor(name, crewMembers, phasers, shields){
		this.name = name
		this.phasers = phasers
		this.shields = shields
		this.crew = crewMembers
		this.assignCrewToShip()
		this.cloaked = false
		this.warpDrive = "disengaged"
		this.docked = true
		this.phasersCharge = "uncharged"
		if (crewMembers.length != 0){
			this.docked = false
		}
	}

	assignCrewToShip(){
		this.crew.forEach(crewMember => crewMember.currentShip = this)
	}
	// cloaked(){
	// 	//iterate through crewMembers to find defender
	// 	let defender = crewMembers.filter(crewMember => crewMember.position === "defender")
	// 	// //cloaked to true, if defender crewmember uses setsInvisibility, below was tried and did not work
	// 	if(defender[0].setsInvisibility()){
	// 		this.cloaked = true
	// 	}
	// }
}
