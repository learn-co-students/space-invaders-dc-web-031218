spaceShipId = 0;

class Spaceship {
	constructor(name, crew, phasers, shields, cloaked = false,  warpDrive = 'disengaged',
				 docked = true, phasersCharge = 'uncharged' ){
		this.spaceShipId = ++spaceShipId;
		this.name = name;		
		this.crew = crew;	
		this.phasers = phasers;						
		this.shields = shields;	
		this.cloaked = cloaked;		
		this.warpDrive = warpDrive;
		this.docked = (crew.length > 0 ? false : true);						
		this.phasersCharge = phasersCharge;	
		if(crew.length > 0){
			for(let i = 0; i <crew.length; i++){
				let crewMember = crew[i];
				crewMember.setShip(this);
			}
		}
	}

}
