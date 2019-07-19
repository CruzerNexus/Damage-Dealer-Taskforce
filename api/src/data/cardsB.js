const fs = require("fs");

var imgdir = "/static/legion/images/";
var units = [];
var upgrades = [];
var commands = [];
var packs = [];

packs.push({Name: "AT-RT", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "74-Z Speeder Bikes", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Core", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Rebel Troopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Snowtroopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "T-47 Airspeeder", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "AT-ST", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "General Veers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Stormtroopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Leia Organa", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Fleet Troopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Rebel Commandos", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Han Solo", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Boba Fett", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Scout Troopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "1.4 FD Laser Cannon Team", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "E-Web Heavy Blaster Team", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Emperor Palpatine", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Imperial Royal Guards", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Rebel Specialists", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Imperial Specialists", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Wookiee Warriors", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Chewbacca", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Jyn Erso", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Rebel Pathfinders", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Imperial Death Troopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Director Orson Krennic", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "TX-225 GAVw Occupier", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "X-34 Landspeeder", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Sabine Wren", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Bossk", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Tauntaun Riders", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Rebel Veterans", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Clone Wars Core Set", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Phase I Clone Troopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "B1 Battle Droids", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Upgrade Card Pack", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Imperial Shoretroopers", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Dewback Rider", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "Droidekas", Units: [], Upgrades: [], Commands: []});

packs.push({Name: "BARC Speeder", Units: [], Upgrades: [], Commands: []});


units.push({
	Name: "AT-RT",
	Faction: "Rebel",
	Cost: 55,
	Pack: "AT-RT",
	Pack2: "Core",
	Courage: 4,
	Health: 6,
	Rank: "Support",
	UnitType: "Ground Vehicle",
	Upgrades: ["Comms","Hardpoint" ],
	CardText: "AT-RT  Armor (While defending, cancel all [Damage] results.) Critical 2 (While, change up to 2 hit results to crit results.) Expert Climber (While clambering, do not roll defense dice or suffer wounds.)  (  ()",
});

units.push({
	Name: "74-Z Speeder Bikes",
	Faction: "Imperial",
	Cost: 90,
	Pack: "74-Z Speeder Bikes",
	Pack2: "Core",
	Courage: 0,
	Health: 3,
	Rank: "Support",
	UnitType: "Repulsor Vehicle",
	Upgrades: ["Comms" ],
	CardText: "74-Z Speeder Bikes  Cover 1 (While defending against a ranged attack, improve your cover by 1.) Speeder 1 (While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.)  ()  (  ()",
});

units.push({
	Name: "Darth Vader",
	Faction: "Imperial",
	Cost: 200,
	Pack: "Core",
	Pack2: "None",
	Courage: 0,
	Health: 8,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Force","Force","Force" ],
	CardText: "Darth Vader  Deflect (While defending, if you spend a dodge token, you gain [Diamond1]: [Diamond]; if it&#39;s a ranged attack, the attacker suffers 1 wound for each [Diamond1] rolled.) Immune: Pierce (Pierce cannot be used against you.) Master of the Force 1 (During the End Phase, you may ready 1 of your [Force] upgrade cards.) Relentless (After you perform a move action, you may perform a free attack action.  ()",
});

units.push({
	Name: "Luke Skywalker",
	Faction: "Rebel",
	Cost: 160,
	Pack: "Core",
	Pack2: "None",
	Courage: 3,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Force","Force","Gear" ],
	CardText: "Luke Skywalker  [Action] Jump 1 (Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action.) Charge (After you perform a move action, you may perform a free melee attack action.) Deflect (While defending, if you spend a dodge token, you gain [Diamond1]: [Diamond]; if it&#39;s a ranged attack, the attacker suffers 1 wound for each [Diamond1] rolled.) Immune: Pierce (Pierce cannot be used against you.  ()",
});

units.push({
	Name: "Stormtroopers",
	Faction: "Imperial",
	Cost: 44,
	Pack: "Core",
	Pack2: "Stormtroopers",
	Courage: 0,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Gear","Grenades" ],
	CardText: "Stormtroopers  Precise 1 (When you spend an aim token, reroll up to 1 additional die.)  ()  ()  (  ()",
});

units.push({
	Name: "Rebel Troopers",
	Faction: "Rebel",
	Cost: 40,
	Pack: "Rebel Troopers",
	Pack2: "Core",
	Courage: 0,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Gear","Grenades" ],
	CardText: "Rebel Troopers  Nimble (After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.)  ()  ()  (  ()",
});

units.push({
	Name: "Snowtroopers",
	Faction: "Imperial",
	Cost: 48,
	Pack: "Snowtroopers",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Gear","Grenades" ],
	CardText: "Snowtroopers  Steady (After you perform a move action, you may perform a free ranged attack action.)  ()  ()  (  ()",
});

units.push({
	Name: "General Veers",
	Faction: "Imperial",
	Cost: 80,
	Pack: "General Veers",
	Pack2: "None",
	Courage: 2,
	Health: 5,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Command","Gear" ],
	CardText: "General Veers  [Action] Spotter 2 (Choose up to 2 friendly units at range 1. Each chosen unit gains one aim token.) Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Precise 1 (When you spend an aim token, reroll up to 1 additional die.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.  ()",
});

units.push({
	Name: "AT-ST",
	Faction: "Imperial",
	Cost: 195,
	Pack: "AT-ST",
	Pack2: "None",
	Courage: 8,
	Health: 11,
	Rank: "Heavy",
	UnitType: "Ground Vehicle",
	Upgrades: ["Pilot","Hardpoint","Hardpoint","Hardpoint","Comms" ],
	CardText: "AT-ST  Armor (While defending, cancel all [Damage] results.) Armor (While defending, cancel all [Damage] results.)  ()  (  ()",
});

units.push({
	Name: "T-47 Airspeeder",
	Faction: "Rebel",
	Cost: 175,
	Pack: "T-47 Airspeeder",
	Pack2: "None",
	Courage: 5,
	Health: 7,
	Rank: "Heavy",
	UnitType: "Repulsor Vehicle",
	Upgrades: ["Pilot","Hardpoint","Comms" ],
	CardText: "T-47 Airspeeder  Armor (While defending, cancel all [Damage] results.) Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.) Cover 1 (While defending against a ranged attack, improve your cover by 1.) Immune: Blast Melee (. Speeder 2 (While moving, ignore terrain that is height 2 or lower. When you activate, perform a compulsory move.)",
});

units.push({
	Name: "Leia Organa",
	Faction: "Rebel",
	Cost: 90,
	Pack: "Leia Organa",
	Pack2: "None",
	Courage: 2,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Command","Gear" ],
	CardText: "Leia Organa  Take Cover 2 (Choose up to 2 friendly trooper units at range 1. Each chosen unit gains a dodge token.) Inspire 2 (After your Rally step, remove up to 2 suppression tokens from another friendly unit at range 1-2.) Nimble (After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.) Sharpshooter 2 (While performing a ranged attack, reduce the defenders cover by 2.  ()",
});

units.push({
	Name: "Fleet Troopers",
	Faction: "Rebel",
	Cost: 44,
	Pack: "Fleet Troopers",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Gear","Grenades" ],
	CardText: "Fleet Troopers  Ready 1 (After you perform a standby action, gain 1 dodge token)  ()  ()  (  ()",
});

units.push({
	Name: "Rebel Commandos",
	Faction: "Rebel",
	Cost: 60,
	Pack: "Rebel Commandos",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Grenades" ],
	CardText: "Rebel Commandos  Leader (This unit is your unit leader) Scout 2 (After you deploy, you may perform a speed-2 move.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.)  (  ()",
});

units.push({
	Name: "Rebel Commandos (Strike Team)",
	Faction: "Rebel",
	Cost: 16,
	Pack: "Rebel Commandos",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Grenades" ],
	CardText: "Rebel Commandos (Strike Team)  Heavy Weapon Team (You must equip a Heavy Weapon upgrade card. The mini added by that card is your unit leader.) Leader (This unit is your unit leader) Scout 2 (After you deploy, you may perform a speed-2 move.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.  ()",
});

units.push({
	Name: "Han Solo",
	Faction: "Rebel",
	Cost: 120,
	Pack: "Han Solo",
	Pack2: "None",
	Courage: 2,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Training","Gear" ],
	CardText: "Han Solo  Leader (This unit is your unit leader) Gunslinger (After you perform a ranged attack action, you may perform an additional ranged attack against a different unit.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.) Uncanny Luck 3 (While defending, you may reroll up to 3 defense dice.  ()",
});

units.push({
	Name: "Boba Fett",
	Faction: "Imperial",
	Cost: 140,
	Pack: "Boba Fett",
	Pack2: "None",
	Courage: 3,
	Health: 5,
	Rank: "Operative",
	UnitType: "Trooper",
	Upgrades: ["Training","Training","Gear","Gear" ],
	CardText: "Boba Fett  [Action] Jump 2 (Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.) Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.) Bounty (After setup, place a victory token on an enemy commander or operative. If you defeat a unit with a victory token, move that token to you. At the end of the game, if you have a victory token, gain that token.) Impervious (While defending, if the attack pool has Pierce X, roll x additional defense dice. Sharpshooter 2 (While performing a ranged attack, reduce the defender&#39;s cover by 2.)",
});

units.push({
	Name: "Scout Troopers",
	Faction: "Imperial",
	Cost: 60,
	Pack: "Scout Troopers",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Grenades" ],
	CardText: "Scout Troopers  Leader (This unit is your unit leader) Scout 1 (After you deploy, you may perform a speed-1 move.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.)  (  ()",
});

units.push({
	Name: "1.4 FD Laser Cannon Team",
	Faction: "Rebel",
	Cost: 70,
	Pack: "1.4 FD Laser Cannon Team",
	Pack2: "None",
	Courage: 2,
	Health: 6,
	Rank: "Support",
	UnitType: "Emplacement Trooper",
	Upgrades: ["Comms","Generator" ],
	CardText: "1.4 FD Laser Cannon Team  Full Pivot (When you pivot, you can pivot up to 360 degrees.) Sentinel (Your standby range is 1-3) Stationary (You cannot perform moves, except pivots.)  (  ()",
});

units.push({
	Name: "E-Web Heavy Blaster Team",
	Faction: "Imperial",
	Cost: 55,
	Pack: "E-Web Heavy Blaster Team",
	Pack2: "None",
	Courage: 2,
	Health: 4,
	Rank: "Support",
	UnitType: "Emplacement Trooper",
	Upgrades: ["Comms","Generator" ],
	CardText: "E-Web Heavy Blaster Team  Full Pivot (When you pivot, you can pivot up to 360 degrees.) Plodding (During your activation, you can perform only 1 standard move.) Reposition (Either before or after you perform a standard move, you may perform a free pivot action.) Sentinel (Your standby range is 1-3  ()",
});

units.push({
	Name: "Emperor Palpatine",
	Faction: "Imperial",
	Cost: 210,
	Pack: "Emperor Palpatine",
	Pack2: "None",
	Courage: 4,
	Health: 5,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Force","Force","Force","Command" ],
	CardText: "Emperor Palpatine  Pulling the Strings (Choose a friendly trooper unit at range 1-2. That unit may perform a free attack action or a free move action.) Entourage: Imperial Royal Guards (While building an army, ignore the rank of 1 Imperial Royal Guards unit. During the Command Phase, you may issue an order to a friendly Imperial Royal Guards unit at range 1-2.) Immune: Pierce (Pierce cannot be used against you.) Master of the Force 2 (During the End Phase, you may ready 2 of your [Force] upgrade cards.  ()",
});

units.push({
	Name: "Imperial Royal Guards",
	Faction: "Imperial",
	Cost: 75,
	Pack: "Imperial Royal Guards",
	Pack2: "None",
	Courage: 2,
	Health: 2,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Training","Gear","Grenades" ],
	CardText: "Imperial Royal Guards  Charge (After you perform a move action, you may perform a free melee attack action.) Disciplined 2 (When you are issued an order, you may remove up to 2 suppression tokens.) Guardian 2 (When a friendly unit at range 2 is defending against a ranged attack, you may choose 1. For each result chosen, roll a defense die as though you were the defender.)  (  ()",
});

units.push({
	Name: "Rebel Officer",
	Faction: "Rebel",
	Cost: 50,
	Pack: "Rebel Specialists",
	Pack2: "None",
	Courage: 2,
	Health: 4,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Gear" ],
	CardText: "Rebel Officer  Take Cover 1 (Choose up to 1 friendly trooper units at range 1. Each chosen unit gains a dodge token.) Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.)  (  ()",
});

units.push({
	Name: "Imperial Officer",
	Faction: "Imperial",
	Cost: 50,
	Pack: "Imperial Specialists",
	Pack2: "None",
	Courage: 2,
	Health: 4,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Gear" ],
	CardText: "Imperial Officer  Spotter 1 (Choose up to 1 friendly units at range 1. Each chosen unit gains one aim token.) Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.)  (  ()",
});

units.push({
	Name: "Wookiee Warriors",
	Faction: "Rebel",
	Cost: 75,
	Pack: "Wookiee Warriors",
	Pack2: "None",
	Courage: 2,
	Health: 3,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Training","Gear","Grenades" ],
	CardText: "Wookiee Warriors  Charge (After you perform a move action, you may perform a free melee attack action.) Expert Climber (While clambering, do not roll defense dice or suffer wounds.) Indomitable (During your rally steps,) Unhindered (You ignore the effects of difficult terrain.  ()",
});

units.push({
	Name: "Chewbacca",
	Faction: "Rebel",
	Cost: 110,
	Pack: "Chewbacca",
	Pack2: "None",
	Courage: 2,
	Health: 9,
	Rank: "Operative",
	UnitType: "Trooper",
	Upgrades: ["Training","Training","Gear" ],
	CardText: "Chewbacca  Enrage 4 (While you) Expert Climber (While clambering, do not roll defense dice or suffer wounds.) Guardian 3 (When a friendly unit at range 1 is defending against a ranged attack, you may choose 3. For each result chosen, roll a defense die as though you were the defender.) Teamwork: Han Solo (Whilie you are at range 1-2 of Han Solo, Unhindered (You ignore the effects of difficult terrain.)",
});

units.push({
	Name: "Scout Troopers (Strike Team)",
	Faction: "Imperial",
	Cost: 16,
	Pack: "Scout Troopers",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Grenades" ],
	CardText: "Scout Troopers (Strike Team)  Heavy Weapon Team (You must equip a Heavy Weapon upgrade card. The mini added by that card is your unit leader.) Low Profile (While defending, if you have light cover, improve your cover by 1.) Scout 1 (After you deploy, you may perform a speed-1 move.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.  ()",
});

units.push({
	Name: "Jyn Erso",
	Faction: "Rebel",
	Cost: 130,
	Pack: "Jyn Erso",
	Pack2: "None",
	Courage: 3,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Training","Gear","Config" ],
	CardText: "Jyn Erso  Quick Thinking (Gain 1 aim token and 1 dodge token.) Danger Sense 4 (You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 4 extra dice.) Infiltrate (You may deploy anywhere beyond range 3 of all enemy units.) Nimble (After defending, if you spent 1 or more dodge tokens, gain 1 dodge token. Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.)",
});

units.push({
	Name: "Rebel Pathfinders",
	Faction: "Rebel",
	Cost: 68,
	Pack: "Rebel Pathfinders",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Config","Grenades" ],
	CardText: "Rebel Pathfinders  Danger Sense 3 (You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 3 extra dice.) Dauntless (After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.) Infiltrate (You may deploy anywhere beyond range 3 of all enemy units.)  (  ()",
});

units.push({
	Name: "Director Orson Krennic",
	Faction: "Imperial",
	Cost: 90,
	Pack: "Director Orson Krennic",
	Pack2: "None",
	Courage: 2,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Command","Gear" ],
	CardText: "Director Orson Krennic  Compel (After another friendly unit at range 1-2 rallies, if it is suppressed but not panicked, it may gain 1 suppression token to perform a free move or action.) Cunning (When your commander specific command cards are played, if there would be a tie for priority, treat your command card as though it has fewer pips.) Entourage: Death Troopers (Blank) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1.  ()",
});

units.push({
	Name: "Imperial Death Troopers",
	Faction: "Imperial",
	Cost: 76,
	Pack: "Imperial Death Troopers",
	Pack2: "None",
	Courage: 2,
	Health: 1,
	Rank: "Special Forces",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Training","Comms","Gear","Config","Grenades" ],
	CardText: "Imperial Death Troopers  Disciplined 1 (When you are issued an order, you may remove 1 suppression token.) Precise 2 (When you spend an aim token, reroll up to 2 additional dice.) Ready 1 (After you perform a standby action, gain 1 dodge token)  (  ()",
});

units.push({
	Name: "TX-225 GAVw Occupier Combat Assault Tank",
	Faction: "Imperial",
	Cost: 155,
	Pack: "TX-225 GAVw Occupier",
	Pack2: "None",
	Courage: 6,
	Health: 8,
	Rank: "Heavy",
	UnitType: "Ground Vehicle",
	Upgrades: ["Pilot","Hardpoint","Comms" ],
	CardText: "TX-225 GAVw Occupier Combat Assault Tank  Armor (While defending, cancel all [Damage] results.) Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.) Reposition (Either before or after you perform a standard move, you may perform a free pivot action.) Transport 1: Open (Add later Weak Point 1: Sides (While defending, if the attackers unit leader is inside either of your side arcs, the attack gains Impact 1)",
});

units.push({
	Name: "X-34 Landspeeder",
	Faction: "Rebel",
	Cost: 75,
	Pack: "X-34 Landspeeder",
	Pack2: "None",
	Courage: 4,
	Health: 6,
	Rank: "Heavy",
	UnitType: "Repulsor Vehicle",
	Upgrades: ["Pilot","Crew","Crew","Hardpoint","Comms" ],
	CardText: "X-34 Landspeeder  Armor 2 (While defending, cancel up to 2 Damage results) Arsenal 3 (While attacking, each of your minis can use up to 3 of its weapons.) Cover 1 (While defending against a ranged attack, improve your cover by 1.) Light Transport 1: Open (Fill in later Speeder 1 (While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.)",
});

units.push({
	Name: "Sabine Wren",
	Faction: "Rebel",
	Cost: 125,
	Pack: "Sabine Wren",
	Pack2: "None",
	Courage: 2,
	Health: 5,
	Rank: "Operative",
	UnitType: "Trooper",
	Upgrades: ["Training","Gear","Gear","Config" ],
	CardText: "Sabine Wren  [Action] Jump 2 (Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.) Gunslinger (After you perform a ranged attack action, you may perform an additional ranged attack against a different unit.) Impervious (While defending, if the attack pool has Pierce X, roll x additional defense dice.) Nimble (After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.  ()",
});

units.push({
	Name: "Bossk",
	Faction: "Imperial",
	Cost: 115,
	Pack: "Bossk",
	Pack2: "None",
	Courage: 2,
	Health: 7,
	Rank: "Operative",
	UnitType: "Trooper",
	Upgrades: ["Training","Training","Gear" ],
	CardText: "Bossk  Bounty (After setup, place a victory token on an enemy commander or operative. If you defeat a unit with a victory token, move that token to you. At the end of the game, if you have a victory token, gain that token.) Enrage 3 (While you have 3 or more wound tokens, treat your courage as - and gain Charge) Regenerate 3 (At the end of your activation, roll 1 white defense die for each wound token you have, up to 3. For each Dodge or Block result, remove 1 wound token.) Unhindered (You ignore the effects of difficult terrain. Expert Climber (While clambering, do not roll defense dice or suffer wounds.)",
});

units.push({
	Name: "Tauntaun Riders",
	Faction: "Rebel",
	Cost: 90,
	Pack: "Tauntaun Riders",
	Pack2: "None",
	Courage: 2,
	Health: 4,
	Rank: "Support",
	UnitType: "Emplacement Trooper",
	Upgrades: ["Training","Comms" ],
	CardText: "Tauntaun Riders  Agile 1 (After you perform a standard move, gain 1 dodge token.) Relentless (After you perform a move action, you may perform a free attack action.) Reposition (Either before or after you perform a standard move, you may perform a free pivot action.) Sharpshooter 1 (While performing a ranged attack, reduce the defender&#39;s cover by 1. Unhindered (You ignore the effects of difficult terrain.)",
});

units.push({
	Name: "Rebel Veterans",
	Faction: "Rebel",
	Cost: 48,
	Pack: "Rebel Veterans",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Training","Gear","Grenades" ],
	CardText: "Rebel Veterans  Coordinate: Emplacement Trooper (After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.) Defend 1 (After you , gain 1 dodge token.)  ()  (  ()",
});

units.push({
	Name: "Phase I Clone Troopers",
	Faction: "Galactic Republic",
	Cost: 52,
	Pack: "Phase I Clone Troopers",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Clone Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Gear","Grenades" ],
	CardText: "Phase I Clone Troopers  Fire Support (When another friendly unit performs a ranged attack, if you have a faceup order token, each mini in your unit may add an eligible weapon to the attack pool. If you do, flip your order token facedown. Limit 1 per attack pool.)  ()  ()  (  ()",
});

units.push({
	Name: "B1 Battle Droids",
	Faction: "Separatist Alliance",
	Cost: 36,
	Pack: "B1 Battle Droids",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Droid Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Comms" ],
	CardText: "B1 Battle Droids  AI: Attack (Unless you have a faceup order token, your first action must be an attack, if able.) Coordinate: Droid Trooper (After you are issued an order, you may issue an order to a friendly droid trooper unit at range 1.)  ()  (  ()",
});

units.push({
	Name: "Shoretroopers",
	Faction: "Imperial",
	Cost: 52,
	Pack: "Imperial Shoretroopers",
	Pack2: "None",
	Courage: 1,
	Health: 1,
	Rank: "Corps",
	UnitType: "Trooper",
	Upgrades: ["Heavy Weapon","Personnel","Training","Gear","Grenades" ],
	CardText: "Shoretroopers  Coordinate: Emplacement Trooper (After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.) Target 1 (After you are issued an order, gain 1 aim token.)  ()  (  ()",
});

units.push({
	Name: "Dewback Rider",
	Faction: "Imperial",
	Cost: 90,
	Pack: "Dewback Rider",
	Pack2: "None",
	Courage: 2,
	Health: 6,
	Rank: "Support",
	UnitType: "Emplacement Trooper",
	Upgrades: ["Training","Comms","Config" ],
	CardText: "Dewback Rider  Armor (While defending, cancel all [Damage] results.) Relentless (After you perform a move action, you may perform a free attack action.) Reposition (Either before or after you perform a standard move, you may perform a free pivot action.) Spur (While performing a move, you may gain 1 suppression token to increase your maximum speed by 1. Unhindered (You ignore the effects of difficult terrain.)",
});

units.push({
	Name: "Obi-Wan Kenobi",
	Faction: "Galactic Republic",
	Cost: 175,
	Pack: "Clone Wars Core Set",
	Pack2: "None",
	Courage: 3,
	Health: 6,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Force","Force","Command","Training" ],
	CardText: "Obi-Wan Kenobi  [Action] Jump 1 (Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action.) Charge (After you perform a move action, you may perform a free melee attack action.) Guardian 3 (When a friendly unit at range 1 is defending against a ranged attack, you may choose 3. For each result chosen, roll a defense die as though you were the defender.) Immune: Pierce (Pierce cannot be used against you. Master of the Force 1 (During the End Phase, you may ready 1 of your [Force] upgrade cards.)",
});

units.push({
	Name: "Mark II Medium Blaster Trooper",
	Faction: "Rebel",
	Cost: 38,
	Pack: "Rebel Veterans",
	Pack2: "None",
	Courage: 2,
	Health: 3,
	Rank: "Corps",
	UnitType: "Emplacement Trooper",
	Upgrades: ["Comms" ],
	CardText: "Mark II Medium Blaster Trooper  Detachment: Rebel Veterans (.) Fire Support (When another friendly unit performs a ranged attack, if you have a faceup order token, each mini in your unit may add an eligible weapon to the attack pool. If you do, flip your order token facedown. Limit 1 per attack pool.) Full Pivot (When you pivot, you can pivot up to 360 degrees.) Reposition (Either before or after you perform a standard move, you may perform a free pivot action. Sentinel (Your standby range is 1-3)",
});

units.push({
	Name: "Droidekas",
	Faction: "Separatist Alliance",
	Cost: 100,
	Pack: "Droidekas",
	Pack2: "None",
	Courage: 0,
	Health: 3,
	Rank: "Support",
	UnitType: "Ground Vehicle",
	Upgrades: ["Comms" ],
	CardText: "Droidekas  AI: Attack, Move (Unless you have a faceup order token, your first action must be an attack or a move.) Generator 1 (During the End Phase, flip 1 shield token.) Shielded 4 (You have 4 shield tokens) Wheel mode (When you  ()",
});

units.push({
	Name: "BARC Speeder",
	Faction: "Galactic Republic",
	Cost: 75,
	Pack: "BARC Speeder",
	Pack2: "None",
	Courage: 3,
	Health: 5,
	Rank: "Support",
	UnitType: "Ground Vehicle",
	Upgrades: ["Crew","Comms" ],
	CardText: "BARC Speeder  Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.) Cover 1 (While defending against a ranged attack, improve your cover by 1.) Speeder 1 (While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.)  (  ()",
});

units.push({
	Name: "General Grievous",
	Faction: "Separatist Alliance",
	Cost: 175,
	Pack: "Clone Wars Core Set",
	Pack2: "None",
	Courage: 2,
	Health: 8,
	Rank: "Commander",
	UnitType: "Trooper",
	Upgrades: ["Command","Command","Training","Config" ],
	CardText: "General Grievous  Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.) Block (While defending, if you spend a dodge token, you gain block dodge) Impervious (While defending, if the attack pool has Pierce X, roll x additional defense dice.) Jedi Hunter (While attacking a unit that has a force upgrade icon, you gain crit crit Relentless (After you perform a move action, you may perform a free attack action.)",
});


upgrades.push({
	Name: "Comms Jammer",
	Faction: "Neutral",
	UpgradeType: "Comms",
	UnitType: "None",
	Cost: 15,
	Pack: "74-Z Speeder Bikes",
	Pack2: "T-47 Airspeeder",	
	Pack3: "AT-RT",
	Pack4: "AT-ST",
	Pack5: "Upgrade Card Pack",
	CardText: "Comms Jammer Enemy units at range 1 cannot be issued orders, unless they are issuing an order to themselves.  ()  ()  ()",
});

upgrades.push({
	Name: "Long-Range Comlink",
	Faction: "Neutral",
	UpgradeType: "Comms",
	UnitType: "None",
	Cost: 10,
	Pack: "74-Z Speeder Bikes",
	Pack2: "T-47 Airspeeder",	
	Pack3: "AT-RT",
	Pack4: "Core",
	Pack5: "AT-ST",
	CardText: "Long-Range Comlink During the Command Phase, you may be issued orders as though you are in range of the nominated commander.  ()  ()  ()",
});

upgrades.push({
	Name: "AT-RT Laser Cannon",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 35,
	Pack: "Core",
	Pack2: "AT-RT",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "AT-RT Laser Cannon  Impact 3 (While attacking a unit that has armor, change up to 3 [Damage] results to [Crit] results.) Fixed: Front (The defender must be inside your front arc.)  ()",
});

upgrades.push({
	Name: "AT-RT Rotary Blaster",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 30,
	Pack: "Core",
	Pack2: "AT-RT",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "AT-RT Rotary Blaster  Fixed: Front (The defender must be inside your front arc.)  ()  ()",
});

upgrades.push({
	Name: "Battle Meditation",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 10,
	Pack: "Core",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Battle Meditation When you issue orders, one of those orders can be issued to any friendly unit on the battlefield.  ()  ()  ()",
});

upgrades.push({
	Name: "Concussion Grenades",
	Faction: "Neutral",
	UpgradeType: "Grenades",
	UnitType: "None",
	Cost: 5,
	Pack: "Core",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Concussion Grenades  Blast (Ignore cover.)  ()  ()",
});

upgrades.push({
	Name: "DLT-19 Stormtrooper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 24,
	Pack: "Core",
	Pack2: "Stormtroopers",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DLT-19 Stormtrooper Add 1 DLT-19 stormtrooper mini. Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.)  ()  ()",
});

upgrades.push({
	Name: "Force Choke",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 5,
	Pack: "Core",
	Pack2: "Emperor Palpatine",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Force Choke [Action] Choose an enemy trooper mini at range 1 that is not a commander. It suffers 1 wound.  ()  ()  ()",
});

upgrades.push({
	Name: "Force Push",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 10,
	Pack: "Core",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Force Push [Action] Choose an enemy trooper unit at range 1. Perform a speed-1 move with that unit, even if it is engaged.  ()  ()  ()",
});

upgrades.push({
	Name: "Force Reflexes",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 15,
	Pack: "Core",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Force Reflexes [Action] Gain 1 dodge token.  ()  ()  ()",
});

upgrades.push({
	Name: "MPL-57 Ion Trooper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 32,
	Pack: "Core",
	Pack2: "Rebel Troopers",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "MPL-57 Ion Trooper Add 1 MPL-57 ion trooper figure. Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Ion 1 (A vehicle wounded by an attack that includes this weapon gains 1 ion token.)  ()",
});

upgrades.push({
	Name: "Rebel Trooper",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 10,
	Pack: "Core",
	Pack2: "Rebel Troopers",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Rebel Trooper Add 1 Rebel trooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "Saber Throw",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 10,
	Pack: "Core",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Saber Throw [Action] Choose 1 of your melee weapons. Perform a ranged attack with the weapon against an enemy unit at range 1-2, using half of that weapon&#39;s dice, rounded up. This is treated as an attack action.  ()  ()  ()",
});

upgrades.push({
	Name: "Stormtrooper",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 11,
	Pack: "Core",
	Pack2: "Stormtroopers",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Stormtrooper Add 1 stormtrooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "Targeting Scopes",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 6,
	Pack: "Core",
	Pack2: "Snowtroopers",	
	Pack3: "Upgrade Card Pack",
	Pack4: "None",
	Pack5: "None",
	CardText: "Targeting Scopes You gain Precise 1 (When you spend an aim token, reroll up to 1 additional die.)  ()  ()",
});

upgrades.push({
	Name: "Z-6 Trooper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 22,
	Pack: "Core",
	Pack2: "Rebel Troopers",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Z-6 Trooper Add 1 Z-6 trooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "Commanding Presence",
	Faction: "Neutral",
	UpgradeType: "Command",
	UnitType: "None",
	Cost: 10,
	Pack: "General Veers",
	Pack2: "Leia Organa",	
	Pack3: "Imperial Specialists",
	Pack4: "Upgrade Card Pack",
	Pack5: "None",
	CardText: "Commanding Presence When issuing orders, you can issue orders at range 4.  ()  ()  ()",
});

upgrades.push({
	Name: "Grappling Hooks",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 3,
	Pack: "Rebel Troopers",
	Pack2: "Fleet Troopers",	
	Pack3: "Stormtroopers",
	Pack4: "Snowtroopers",
	Pack5: "Upgrade Card Pack",
	CardText: "Grappling Hooks You gain Expert Climber (While clambering, do not roll defense dice or suffer wounds.)  ()  ()",
});

upgrades.push({
	Name: "HH-12 Stormtrooper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 34,
	Pack: "Stormtroopers",
	Pack2: "Core",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "HH-12 Stormtrooper  Cumbersome (You cannot use this weapon and move during the same activation.) Impact 3 (While attacking a unit that has armor, change up to 3 [Damage] results to [Crit] results.)  ()",
});

upgrades.push({
	Name: "AT-RT Flame Thrower",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 25,
	Pack: "Core",
	Pack2: "AT-RT",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "AT-RT Flame Thrower  Blast (Ignore cover.) Fixed: Front (The defender must be inside your front arc.) Spray (Add this weapon&#39;s dice to the attack pool one time for each mini in the defending unit to which line of sight is not blocked.)",
});

upgrades.push({
	Name: "T-7 Ion Snowtrooper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 34,
	Pack: "Snowtroopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "T-7 Ion Snowtrooper Add 1 T-7 Ion Snowtrooper figure. Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Ion 1 (A vehicle wounded by an attack that includes this weapon gains 1 ion token.)  ()",
});

upgrades.push({
	Name: "88 Twin Light Blaster Cannon",
	Faction: "Imperial",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 20,
	Pack: "AT-ST",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "88 Twin Light Blaster Cannon AT-ST Only Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Fixed: Front (The defender must be inside your front arc.)  ()",
});

upgrades.push({
	Name: "AT-ST Mortar Launcher",
	Faction: "Imperial",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 10,
	Pack: "AT-ST",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "AT-ST Mortar Launcher AT-ST Only Fixed: Front (The defender must be inside your front arc.) Suppressive (After you perform an attack, the defender that this weapon was used against gains 1 suppression token.)  ()",
});

upgrades.push({
	Name: "DW-3 Concussion Grenade Launcher",
	Faction: "Imperial",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 15,
	Pack: "AT-ST",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DW-3 Concussion Grenade Launcher AT-ST Only Fixed: Front (The defender must be inside your front arc.) Blast (Ignore cover.)  ()",
});

upgrades.push({
	Name: "General Weiss",
	Faction: "Imperial",
	UpgradeType: "Pilot",
	UnitType: "Ground Vehicle",
	Cost: 10,
	Pack: "AT-ST",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "General Weiss [Action]Until the end of your activation, you gain Arsenal 2 (While attacking, each of your minis can use up to 2 of its weapons.)  ()  ()",
});

upgrades.push({
	Name: "Esteemed Leader",
	Faction: "Neutral",
	UpgradeType: "Command",
	UnitType: "None",
	Cost: 5,
	Pack: "General Veers",
	Pack2: "Leia Organa",	
	Pack3: "Director Orson Krennic",
	Pack4: "Upgrade Card Pack",
	Pack5: "None",
	CardText: "Esteemed Leader While you are defending, each friendly corps trooper unit at range 1 gains Guardian 1 (When a friendly unit at range 1 is defending against a ranged attack, you may choose 1. For each result chosen, roll a defense die as though you were the defender.)  ()  ()",
});

upgrades.push({
	Name: "Ax-108 Ground Buzzer",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 20,
	Pack: "T-47 Airspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Ax-108 Ground Buzzer  Fixed: Rear (The defender must be inside your rear arc.)  ()  ()",
});

upgrades.push({
	Name: "MoDk Power Harpoon",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 8,
	Pack: "T-47 Airspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "MoDk Power Harpoon  Fixed: Rear (The defender must be inside your rear arc.) Tow Cable (After a vehicle is wounded by an attack that includes this weapon, perform a pivot with that vehicle.)  ()",
});

upgrades.push({
	Name: "Wedge Antilles",
	Faction: "Rebel",
	UpgradeType: "Pilot",
	UnitType: "Repulsor Vehicle",
	Cost: 5,
	Pack: "T-47 Airspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Wedge Antilles [Action] Until the end of your activation, you gain Full Pivot (When you pivot, you can pivot up to 360 degrees.)  ()  ()",
});

upgrades.push({
	Name: "Impact Grenades",
	Faction: "Neutral",
	UpgradeType: "Grenades",
	UnitType: "None",
	Cost: 5,
	Pack: "Stormtroopers",
	Pack2: "Fleet Troopers",	
	Pack3: "Rebel Troopers",
	Pack4: "Snowtroopers",
	Pack5: "Upgrade Card Pack",
	CardText: "Impact Grenades  Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.)  ()  ()",
});

upgrades.push({
	Name: "Scatter Gun Trooper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 23,
	Pack: "Fleet Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Scatter Gun Trooper Add 1 scatter gun trooper mini. Pierce 1 (While attacking cancel up to 1 block result.)  ()  ()",
});

upgrades.push({
	Name: "Jedi Mind Trick",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 5,
	Pack: "Core",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Jedi Mind Trick Choose an enemy trooper unit at range 1-2. It gains 2 suppression tokens.  ()  ()  ()",
});

upgrades.push({
	Name: "Duck and Cover",
	Faction: "Neutral",
	UpgradeType: "Training",
	UnitType: "None",
	Cost: 8,
	Pack: "Rebel Commandos",
	Pack2: "Han Solo",	
	Pack3: "Boba Fett",
	Pack4: "Upgrade Card Pack",
	Pack5: "Scout Troopers",
	CardText: "Duck and Cover While defending against a ranged attack, during the Apply Dodge and Cover step, you may gain 1 suppression token.  ()  ()  ()",
});

upgrades.push({
	Name: "Snowtrooper",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 12,
	Pack: "Snowtroopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Snowtrooper   ()  ()  ()",
});

upgrades.push({
	Name: "Fleet Trooper",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 11,
	Pack: "Fleet Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Fleet Trooper   ()  ()  ()",
});

upgrades.push({
	Name: "Flametrooper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 20,
	Pack: "Snowtroopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Flametrooper Add 1 flametrooper mini. Blast (Ignore cover.) Spray (Add this weapon&#39;s dice to the attack pool one time for each mini in the defending unit to which line of sight is not blocked.)  ()",
});

upgrades.push({
	Name: "Environmental Gear",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 3,
	Pack: "General Veers",
	Pack2: "Leia Organa",	
	Pack3: "Upgrade Card Pack",
	Pack4: "Imperial Death Troopers",
	Pack5: "Rebel Veterans",
	CardText: "Environmental Gear You gain Unhindered (You ignore the effects of difficult terrain.)  ()  ()",
});

upgrades.push({
	Name: "Hunter",
	Faction: "Neutral",
	UpgradeType: "Training",
	UnitType: "None",
	Cost: 6,
	Pack: "Boba Fett",
	Pack2: "Wookiee Warriors",	
	Pack3: "Chewbacca",
	Pack4: "Upgrade Card Pack",
	Pack5: "Bossk",
	CardText: "Hunter While attacking a wounded trooper unit, during the Roll Attack Dice step, you may gain 1 aim token.  ()  ()  ()",
});

upgrades.push({
	Name: "MPL-57 Barrage Trooper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 33,
	Pack: "Fleet Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "MPL-57 Barrage Trooper Add 1 MPL-57 barrage trooper mini. Blast (Ignore cover.) Impact 2 (While attacking a unit that has Armor, change up to 2 Damage results to Crit results.)  ()",
});

upgrades.push({
	Name: "Barrage Generator",
	Faction: "Neutral",
	UpgradeType: "Generator",
	UnitType: "None",
	Cost: 10,
	Pack: "1.4 FD Laser Cannon Team",
	Pack2: "E-Web Heavy Blaster Team",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Barrage Generator While performing a ranged attack with a weapon that  has FIXED, add 2 white attack dice and apply SUPPRESSIVE to your attack pool.  ()  ()  ()",
});

upgrades.push({
	Name: "HQ Uplink",
	Faction: "Neutral",
	UpgradeType: "Comms",
	UnitType: "None",
	Cost: 10,
	Pack: "Rebel Commandos",
	Pack2: "E-Web Heavy Blaster Team",	
	Pack3: "Rebel Specialists",
	Pack4: "TX-225 GAVw Occupier",
	Pack5: "Upgrade Card Pack",
	CardText: "HQ Uplink During your Issue Orders step of the Command Phase, issue an order to yourself.  ()  ()  ()",
});

upgrades.push({
	Name: "Overcharged Generator",
	Faction: "Neutral",
	UpgradeType: "Generator",
	UnitType: "None",
	Cost: 10,
	Pack: "1.4 FD Laser Cannon Team",
	Pack2: "E-Web Heavy Blaster Team",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Overcharged Generator While performing a ranged attack with a weapon that has FIXED, add 1 black attack die and apply Impact 1 to your attack pool Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.)  ()  ()",
});

upgrades.push({
	Name: "Emergency Stims",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 8,
	Pack: "Han Solo",
	Pack2: "Rebel Commandos",	
	Pack3: "Boba Fett",
	Pack4: "Upgrade Card Pack",
	Pack5: "Scout Troopers",
	CardText: "Emergency Stims During an attack, when you would suffer wounds, prevent up to 2 wounds and place an equal number of wound tokens on this card instead. If you do, at the end of your next activation, discard each token on this card and suffer wounds equal to the number of tokens discarded.  ()  ()  ()",
});

upgrades.push({
	Name: "Improvised Orders",
	Faction: "Neutral",
	UpgradeType: "Command",
	UnitType: "None",
	Cost: 10,
	Pack: "Han Solo",
	Pack2: "Emperor Palpatine",	
	Pack3: "Upgrade Card Pack",
	Pack4: "None",
	Pack5: "None",
	CardText: "Improvised Orders After an order token is drawn from a friendly order pool, draw a second order token from that order pool; choose 1 to use and shuffle the other back into its order pool. If you do, during the End Phase, ready this card.  ()  ()  ()",
});

upgrades.push({
	Name: "Anger",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 5,
	Pack: "Emperor Palpatine",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Anger After you suffer 1 or more gain 1 token.  ()  ()  ()",
});

upgrades.push({
	Name: "Electrostaff Guard",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 25,
	Pack: "Imperial Royal Guards",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Electrostaff Guard Add 1 electrostaff guard mini. While defending against a gain Immune: Pierce. Immune: Pierce (Pierce cannot be used against you.)  ()  ()",
});

upgrades.push({
	Name: "DH-447 Sniper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 28,
	Pack: "Rebel Commandos",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DH-447 Sniper  High Velocity (While attacking, if each weapon in your attack pool has High Velocity, the defender cannot spend dodge tokens.) Pierce 1 (While attacking cancel up to 1 block result.)  ()",
});

upgrades.push({
	Name: "Proton Charge Saboteur",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 26,
	Pack: "Rebel Commandos",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Proton Charge Saboteur Add 1 proton charge saboteur mini.&lt;br&gt;\
Impact 1 [Action] Arm 1: Proton Charge (Place 1 proton charge token within range 1 and in line of sight of your unit leader.) Detonate 1: Proton Charge (.) Blast (Ignore cover.)",
});

upgrades.push({
	Name: "Rebel Officer Upgrade",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 19,
	Pack: "Rebel Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Rebel Officer Upgrade Add 1 Rebel officer mini. Your courage is increased by 1. You gain Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Leader (This unit is your unit leader)  ()",
});

upgrades.push({
	Name: "Imperial Officer Upgrade",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 20,
	Pack: "Imperial Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Imperial Officer Upgrade Add 1 Imperial Officer mini. Your courage is increased by 1. You gain Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Leader (This unit is your unit leader)  ()",
});

upgrades.push({
	Name: "Bowcaster Wookiee",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 35,
	Pack: "Wookiee Warriors",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Bowcaster Wookiee Add 1 Bowcaster Wookiee mini. Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Pierce 1 (While attacking cancel up to 1 block result.)  ()",
});

upgrades.push({
	Name: "DLT-19x Sniper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 28,
	Pack: "Scout Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DLT-19x Sniper Add 1 DLT-19x sniper mini. High Velocity (While attacking, if each weapon in your attack pool has High Velocity, the defender cannot spend dodge tokens.) Pierce 1 (While attacking cancel up to 1 block result.)  ()",
});

upgrades.push({
	Name: "Sonic Charge Saboteur",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 26,
	Pack: "Scout Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Sonic Charge Saboteur Add 1 sonic charge saboteur mini Arm 1: Sonic Charge (Place 1 sonic charge token within range 1 and in line of sight of your unit leader.) Detonate 1: Sonic Charge (.) Blast (Ignore cover.)",
});

upgrades.push({
	Name: "Tenacity",
	Faction: "Neutral",
	UpgradeType: "Training",
	UnitType: "None",
	Cost: 4,
	Pack: "Wookiee Warriors",
	Pack2: "Imperial Royal Guards",	
	Pack3: "Chewbacca",
	Pack4: "Upgrade Card Pack",
	Pack5: "Tauntaun Riders",
	CardText: "Tenacity While performing a melee attack, if you are wounded or if one or more of your minis has been defeated, add 1 red attack die to your attack pool.  ()  ()  ()",
});

upgrades.push({
	Name: "Rebel Comms Technician",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 9,
	Pack: "Rebel Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Rebel Comms Technician Add 1 Rebel comms technician mini. You gain a [Comms] upgrade icon. You must equip a [Comms] upgrade card.  ()  ()  ()",
});

upgrades.push({
	Name: "Fragmentation Grenades",
	Faction: "Neutral",
	UpgradeType: "Grenades",
	UnitType: "None",
	Cost: 5,
	Pack: "Imperial Royal Guards",
	Pack2: "Wookiee Warriors",	
	Pack3: "Upgrade Card Pack",
	Pack4: "Rebel Pathfinders",
	Pack5: "Imperial Death Troopers",
	CardText: "Fragmentation Grenades While this weapon is in your attack pool, you gain [Surge]: Damage  ()  ()  ()",
});

upgrades.push({
	Name: "Recon Intel",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 2,
	Pack: "Imperial Royal Guards",
	Pack2: "Wookiee Warriors",	
	Pack3: "Upgrade Card Pack",
	Pack4: "Imperial Specialists",
	Pack5: "Jyn Erso",
	CardText: "Recon Intel You gain Scout 1 (After you deploy, you may perform a speed-1 move.)  ()  ()",
});

upgrades.push({
	Name: "A-180 Pistol Config",
	Faction: "Rebel",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 0,
	Pack: "Jyn Erso",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "A-180 Pistol Config  Pierce 1 (While attacking cancel up to 1 block result.) Reconfigure (When you)  ()",
});

upgrades.push({
	Name: "A-300 Short Range Config",
	Faction: "Rebel",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 6,
	Pack: "Rebel Pathfinders",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "A-300 Short Range Config  Reconfigure (When you)  ()  ()",
});

upgrades.push({
	Name: "Strict Orders",
	Faction: "Neutral",
	UpgradeType: "Command",
	UnitType: "None",
	Cost: 5,
	Pack: "Jyn Erso",
	Pack2: "Director Orson Krennic",	
	Pack3: "Upgrade Card Pack",
	Pack4: "None",
	Pack5: "None",
	CardText: "Strict Orders When a friendly trooper unit within  ()  ()  ()",
});

upgrades.push({
	Name: "R5 Astromech Droid",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 8,
	Pack: "Rebel Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "R5 Astromech Droid  Repair 1: Capacity 2 (Place a wound token on this card to remove 1 wound, ion, or vehicle damage taken from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.) Noncombatant (.)  ()",
});

upgrades.push({
	Name: "2-1B Medical Droid",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 18,
	Pack: "Rebel Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "2-1B Medical Droid  Treat 1: Capacity 2 (Place a wound token from or restore 1 mini to a friendly non-emplacement trooper unit at range 1 and in line of sight. Limit 2 tokens.) Noncombatant (.)  ()",
});

upgrades.push({
	Name: "Comms Relay",
	Faction: "Neutral",
	UpgradeType: "Comms",
	UnitType: "None",
	Cost: 5,
	Pack: "Rebel Specialists",
	Pack2: "Upgrade Card Pack",	
	Pack3: "Imperial Specialists",
	Pack4: "Rebel Pathfinders",
	Pack5: "Imperial Death Troopers",
	CardText: "Comms Relay When you would be issued an order, you may choose a friendly unit at range 1-2. Issue an order to the chosen unit instead.  ()  ()  ()",
});

upgrades.push({
	Name: "FX-9 Medical Droid",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 19,
	Pack: "Imperial Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "FX-9 Medical Droid  Treat 1: Capacity 2 (Place a wound token from or restore 1 mini to a friendly non-emplacement trooper unit at range 1 and in line of sight. Limit 2 tokens.) Noncombatant (.)  ()",
});

upgrades.push({
	Name: "Imperial Comms Technician",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 10,
	Pack: "Imperial Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Imperial Comms Technician You gain a Comms upgrade icon. You must equip a comms upgrade card.  ()  ()  ()",
});

upgrades.push({
	Name: "R4 Astromech Droid",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 9,
	Pack: "Imperial Specialists",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "R4 Astromech Droid  Repair 1: Capacity 2 (Place a wound token on this card to remove 1 wound, ion, or vehicle damage taken from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.) Noncombatant (.)  ()",
});

upgrades.push({
	Name: "A-180 Rifle Config",
	Faction: "Rebel",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 0,
	Pack: "Jyn Erso",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "A-180 Rifle Config  Pierce 1 (While attacking cancel up to 1 block result.) Reconfigure (When you)  ()",
});

upgrades.push({
	Name: "Endurance",
	Faction: "Neutral",
	UpgradeType: "Training",
	UnitType: "None",
	Cost: 6,
	Pack: "Bossk",
	Pack2: "Upgrade Card Pack",	
	Pack3: "Sabine Wren",
	Pack4: "Tauntaun Riders",
	Pack5: "Rebel Veterans",
	CardText: "Endurance At the end of the Activation Phase, you may remove 1 suppression token.  ()  ()  ()",
});

upgrades.push({
	Name: "The Darksaber",
	Faction: "Rebel",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 25,
	Pack: "Sabine Wren",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "The Darksaber You gain Dauntless (After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.)  ()  ()",
});

upgrades.push({
	Name: "Overwatch",
	Faction: "Neutral",
	UpgradeType: "Training",
	UnitType: "None",
	Cost: 4,
	Pack: "Rebel Pathfinders",
	Pack2: "Upgrade Card Pack",	
	Pack3: "Imperial Death Troopers",
	Pack4: "Rebel Veterans",
	Pack5: "Imperial Shoretroopers",
	CardText: "Overwatch You gain Sentinel (Your standby range is 1-3)  ()  ()",
});

upgrades.push({
	Name: "A-300 Long Range Config",
	Faction: "Rebel",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 6,
	Pack: "Rebel Pathfinders",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "A-300 Long Range Config  Reconfigure (When you)  ()  ()",
});

upgrades.push({
	Name: "Bistan",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 32,
	Pack: "Rebel Pathfinders",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Bistan  Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Ion 1 (A vehicle wounded by an attack that includes this weapon gains 1 ion token.)  ()",
});

upgrades.push({
	Name: "Pao",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 22,
	Pack: "Rebel Pathfinders",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Pao You gain Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.) Leader (This unit is your unit leader)  ()",
});

upgrades.push({
	Name: "Rebel Veteran",
	Faction: "Rebel",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 12,
	Pack: "Rebel Veterans",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Rebel Veteran Add 1 Rebel Veteran mini  ()  ()  ()",
});

upgrades.push({
	Name: "DT-F16",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 22,
	Pack: "Imperial Death Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DT-F16 You gain Compel (After another friendly unit at range 1-2 rallies, if it is suppressed but not panicked, it may gain 1 suppression token to perform a free move or action.) Leader (This unit is your unit leader)  ()",
});

upgrades.push({
	Name: "Personal Combat Shield",
	Faction: "Rebel",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 10,
	Pack: "Sabine Wren",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Personal Combat Shield You gain Shielded 1 (You have 1 shield token) Recharge 1 (When you recover, flip 1 inactive shield token.)  ()",
});

upgrades.push({
	Name: "A-300 Rifle Gunner",
	Faction: "Rebel",
	UpgradeType: "Crew",
	UnitType: "None",
	Cost: 9,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "A-300 Rifle Gunner   ()  ()  ()",
});

upgrades.push({
	Name: "RPS-6 Rocket Gunner",
	Faction: "Rebel",
	UpgradeType: "Crew",
	UnitType: "None",
	Cost: 36,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "RPS-6 Rocket Gunner  Impact 2 (While attacking a unit that has Armor, change up to 2 Damage results to Crit results.)  ()  ()",
});

upgrades.push({
	Name: "Outer Rim Speeder Jockey",
	Faction: "Rebel",
	UpgradeType: "Pilot",
	UnitType: "Repulsor Vehicle",
	Cost: 10,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Outer Rim Speeder Jockey  Cover 1 (While defending against a ranged attack, improve your cover by 1.)  ()  ()",
});

upgrades.push({
	Name: "Imperial Hammers Elite Armor Pilot",
	Faction: "Imperial",
	UpgradeType: "Pilot",
	UnitType: "Ground Vehicle",
	Cost: 10,
	Pack: "TX-225 GAVw Occupier",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Imperial Hammers Elite Armor Pilot You gain Surge: Hit  ()  ()  ()",
});

upgrades.push({
	Name: "DLT-19D Trooper",
	Faction: "Imperial",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 34,
	Pack: "Imperial Death Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DLT-19D Trooper  Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.)  ()  ()",
});

upgrades.push({
	Name: "E-11D Focused Fire Config",
	Faction: "Imperial",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 8,
	Pack: "Imperial Death Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "E-11D Focused Fire Config  Reconfigure (When you) Suppressive (After you perform an attack, the defender that this weapon was used against gains 1 suppression token.)  ()",
});

upgrades.push({
	Name: "E-11D Grenade Launcher Config",
	Faction: "Imperial",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 8,
	Pack: "Imperial Death Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "E-11D Grenade Launcher Config  Blast (Ignore cover.) Reconfigure (When you)  ()",
});

upgrades.push({
	Name: "First Sergeant Arbmab",
	Faction: "Imperial",
	UpgradeType: "Pilot",
	UnitType: "Ground Vehicle",
	Cost: 5,
	Pack: "TX-225 GAVw Occupier",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "First Sergeant Arbmab You gain Tactical (After you perform a standard move, gain 1 aim token.)  ()  ()",
});

upgrades.push({
	Name: "DLT-19 Rifle Pintle",
	Faction: "Imperial",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 18,
	Pack: "TX-225 GAVw Occupier",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DLT-19 Rifle Pintle  Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.)  ()  ()",
});

upgrades.push({
	Name: "RT-97C Rifle Pintle",
	Faction: "Imperial",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 14,
	Pack: "TX-225 GAVw Occupier",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "RT-97C Rifle Pintle   ()  ()  ()",
});

upgrades.push({
	Name: "Ryder Azadi",
	Faction: "Rebel",
	UpgradeType: "Pilot",
	UnitType: "Repulsor Vehicle",
	Cost: 5,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Ryder Azadi While performing a move, increase or decrease your maximum speed by 1.  ()  ()  ()",
});

upgrades.push({
	Name: "Mark II Medium Blaster",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 34,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Mark II Medium Blaster  Fixed: Front (The defender must be inside your front arc.)  ()  ()",
});

upgrades.push({
	Name: "M-45 Ion Blaster",
	Faction: "Rebel",
	UpgradeType: "Hardpoint",
	UnitType: "None",
	Cost: 38,
	Pack: "X-34 Landspeeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "M-45 Ion Blaster  Fixed: Front (The defender must be inside your front arc.) Impact 1 (While attacking a unit that has armor, change up to 1 [Damage] result to a [Crit] result.) Ion 1 (A vehicle wounded by an attack that includes this weapon gains 1 ion token.)",
});

upgrades.push({
	Name: "Phase I Clone Trooper",
	Faction: "Galactic Republic",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 13,
	Pack: "Phase I Clone Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Phase I Clone Trooper Add 1 Phase I Clone Trooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "B1 Battle Droid",
	Faction: "Separatist Alliance",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 6,
	Pack: "B1 Battle Droids",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "B1 Battle Droid Add 1 B1 battle droid mini  ()  ()  ()",
});

upgrades.push({
	Name: "Shoretrooper",
	Faction: "Imperial",
	UpgradeType: "Personnel",
	UnitType: "None",
	Cost: 13,
	Pack: "Imperial Shoretroopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Shoretrooper Add 1 shoretrooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "T-21 Blaster Rifle",
	Faction: "Imperial",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 10,
	Pack: "Dewback Rider",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "T-21 Blaster Rifle  Critical 2 (While, change up to 2 hit results to crit results.)  ()  ()",
});

upgrades.push({
	Name: "Electro Grappling Line",
	Faction: "Rebel",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 5,
	Pack: "Sabine Wren",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Electro Grappling Line [Action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilize tokens and 2 suppression tokens.  ()  ()  ()",
});

upgrades.push({
	Name: "CM-O93 Trooper",
	Faction: "Rebel",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 31,
	Pack: "Rebel Veterans",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "CM-O93 Trooper Add 1 CM-O93 trooper mini. Critical 2 (While, change up to 2 hit results to crit results.)  ()  ()",
});

upgrades.push({
	Name: "Linked Targeting Array",
	Faction: "Neutral",
	UpgradeType: "Comms",
	UnitType: "Emplacement Trooper",
	Cost: 5,
	Pack: "Droidekas",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Linked Targeting Array You gain Target 1 (After you are issued an order, gain 1 aim token.)  ()  ()",
});

upgrades.push({
	Name: "BARC Twin Laser Gunner",
	Faction: "Galactic Republic",
	UpgradeType: "Crew",
	UnitType: "None",
	Cost: 18,
	Pack: "BARC Speeder",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "BARC Twin Laser Gunner  Fixed: Front, Rear (The defender must be inside your front or rear arc.)  ()  ()",
});

upgrades.push({
	Name: "Electrobinoculars",
	Faction: "Neutral",
	UpgradeType: "Gear",
	UnitType: "None",
	Cost: 8,
	Pack: "B1 Battle Droids",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Electrobinoculars You gain B1 Battle Droids can ignore this cards [Gear] upgrade icon Spotter 1 (Choose up to 1 friendly units at range 1. Each chosen unit gains one aim token.)  ()  ()",
});

upgrades.push({
	Name: "Force Guidance",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 10,
	Pack: "Clone Wars Core Set",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Force Guidance Choose up to 2 friendly units at range 1-2. Each chosen unit gains 1 surge token.  ()  ()  ()",
});

upgrades.push({
	Name: "Smoke Grenades",
	Faction: "Neutral",
	UpgradeType: "Grenades",
	UnitType: "None",
	Cost: 6,
	Pack: "Clone Wars Core Set",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Smoke Grenades You gain Smoke 1 (Place 1 smoke token within range 1 and in line of sight of your unit leader.)  ()  ()",
});

upgrades.push({
	Name: "Aggressive Tactics",
	Faction: "Neutral",
	UpgradeType: "Command",
	UnitType: "None",
	Cost: 10,
	Pack: "Clone Wars Core Set",
	Pack2: "Upgrade Card Pack",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Aggressive Tactics While you are the nominated commander, after issuing orders, choose up to 4 friendly units with faceup order tokens. Each chosen unit gains 1 surge token.  ()  ()  ()",
});

upgrades.push({
	Name: "E-5C B1 Trooper",
	Faction: "Separatist Alliance",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 18,
	Pack: "B1 Battle Droids",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "E-5C B1 Trooper Add 1 E-5C B1 trooper mini  ()  ()  ()",
});

upgrades.push({
	Name: "E-60R B1 Trooper",
	Faction: "Separatist Alliance",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 20,
	Pack: "B1 Battle Droids",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "E-60R B1 Trooper Add 1 E-60R B1 trooper mini Impact 2 (While attacking a unit that has Armor, change up to 2 Damage results to Crit results.)  ()  ()",
});

upgrades.push({
	Name: "Hope",
	Faction: "Neutral",
	UpgradeType: "Force",
	UnitType: "None",
	Cost: 3,
	Pack: "Clone Wars Core Set",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Hope You gain Inspire 1 (After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.)  ()  ()",
});

upgrades.push({
	Name: "DC-15 Phase I Trooper",
	Faction: "Galactic Republic",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 30,
	Pack: "Phase I Clone Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DC-15 Phase I Trooper Add 1 DC-15 Phase I trooper mini. Critical 1 (While converting offensive surges, change up to 1 hit results to crit results.)  ()  ()",
});

upgrades.push({
	Name: "Z-6 Phase I Trooper",
	Faction: "Galactic Republic",
	UpgradeType: "Heavy Weapon",
	UnitType: "None",
	Cost: 25,
	Pack: "Phase I Clone Troopers",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "Z-6 Phase I Trooper Add 1 Z-6 Phase I trooper mini.  ()  ()  ()",
});

upgrades.push({
	Name: "DT-57 Annihilator",
	Faction: "Separatist Alliance",
	UpgradeType: "Config",
	UnitType: "None",
	Cost: 12,
	Pack: "Clone Wars Core Set",
	Pack2: "None",	
	Pack3: "None",
	Pack4: "None",
	Pack5: "None",
	CardText: "DT-57 Annihilator  Critical 1 (While converting offensive surges, change up to 1 hit results to crit results.) Pierce 1 (While attacking cancel up to 1 block result.) Versatile (You can perform ranged attacks using this weapon while engaged.)",
});



commands.push({
	Name: "New Ways to Motivate Them",
	Faction: "Imperial",
	Pack: "Core",
	Pack2: "",
	CardText: "New Ways to Motivate Them When a friendly non-Darth Vader trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.",
	Pips: 2
});

commands.push({
	Name: "Return of the Jedi",
	Faction: "Rebel",
	Pack: "Core",
	Pack2: "",
	CardText: "Return of the Jedi When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper unit at range 1-3 of him may remove 1 suppression token.",
	Pips: 3
});

commands.push({
	Name: "Push",
	Faction: "Neutral",
	Pack: "Core",
	Pack2: "",
	CardText: "Push ",
	Pips: 2
});

commands.push({
	Name: "Master of Evil",
	Faction: "Imperial",
	Pack: "Core",
	Pack2: "",
	CardText: "Master of Evil When Darth Vader is issued an order, he gains 1 dodge token. When Darth Vader activates, each enemy trooper unit at range 1-2 of him gains 3 suppression tokens.",
	Pips: 3
});

commands.push({
	Name: "My Ally Is the Force",
	Faction: "Rebel",
	Pack: "Core",
	Pack2: "",
	CardText: "My Ally Is the Force When a friendly trooper unit is issued an order, it gains 1 dodge token.",
	Pips: 2
});

commands.push({
	Name: "Ambush",
	Faction: "Neutral",
	Pack: "Core",
	Pack2: "",
	CardText: "Ambush ",
	Pips: 1
});

commands.push({
	Name: "Standing Orders",
	Faction: "Neutral",
	Pack: "Core",
	Pack2: "",
	CardText: "Standing Orders At the end of the Command Phase, return this card to your hand.",
	Pips: 4
});

commands.push({
	Name: "Assault",
	Faction: "Neutral",
	Pack: "Core",
	Pack2: "",
	CardText: "Assault ",
	Pips: 3
});

commands.push({
	Name: "Maximum Firepower",
	Faction: "Imperial",
	Pack: "General Veers",
	Pack2: "",
	CardText: "Maximum Firepower At the end of General Veers activation, he may perform an attack using the following weapon.\
Range 4-something 4 red dice, Impact 2, Immune: Deflect",
	Pips: 1
});

commands.push({
	Name: "Son of Skywalker",
	Faction: "Rebel",
	Pack: "Core",
	Pack2: "",
	CardText: "Son of Skywalker After Luke Skywalker performs his first attack, he may perform 1 additional attack.",
	Pips: 1
});

commands.push({
	Name: "Implacable",
	Faction: "Imperial",
	Pack: "Core",
	Pack2: "",
	CardText: "Implacable At the end of Darth Vader&#39;s first activation, he may suffer 1 wound to shuffle his order token into the order pool. During Darth Vader&#39;s second activation, he performs 1 fewer action.",
	Pips: 1
});

commands.push({
	Name: "Coordinated Bombardment",
	Faction: "Rebel",
	Pack: "Leia Organa",
	Pack2: "",
	CardText: "Coordinated Bombardment At the end of Leia Organas activation, she may perform up to 3 attacks against different enemy units using the following weapon: Range 4-Infinity, 2 red dice Immune: Deflect",
	Pips: 1
});

commands.push({
	Name: "Reckless Diversion",
	Faction: "Rebel",
	Pack: "Han Solo",
	Pack2: "",
	CardText: "Reckless Diversion When an enemy unit performs an attack, it must attack a trooper unit with a faceup order token, if able.",
	Pips: 2
});

commands.push({
	Name: "Evasive Maneuvers",
	Faction: "Imperial",
	Pack: "General Veers",
	Pack2: "",
	CardText: "Evasive Maneuvers When a friendly vehicle unit is issued an order, it gains 1 dodge token. Friendly vehicle units can spend dodge tokens to cancel crit results.",
	Pips: 2
});

commands.push({
	Name: "Imperial Discipline",
	Faction: "Imperial",
	Pack: "General Veers",
	Pack2: "",
	CardText: "Imperial Discipline When a friendly unit is issued an order, it may recover.",
	Pips: 3
});

commands.push({
	Name: "No Time for Sorrows",
	Faction: "Rebel",
	Pack: "Leia Organa",
	Pack2: "",
	CardText: "No Time for Sorrows When a friendly trooper unit is issued an order, it may perform a speed-1 move.",
	Pips: 2
});

commands.push({
	Name: "Somebody Has to Save Our Skins",
	Faction: "Rebel",
	Pack: "Leia Organa",
	Pack2: "",
	CardText: "Somebody Has to Save Our Skins After Leia Organa&#39;s activation, you may choose a friendly unit at range 1-2 with a faceup order token and activate it.",
	Pips: 3
});

commands.push({
	Name: "Whipcord Launcher",
	Faction: "Imperial",
	Pack: "Boba Fett",
	Pack2: "",
	CardText: "Whipcord Launcher Boba Fett can perform moves while engaged with a unit that has 1 or more immobilized tokens. During Boba Fett&#39;s activation, he gains: [Action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilized tokens and 2 suppression tokens.",
	Pips: 1
});

commands.push({
	Name: "ZX Flame Projector",
	Faction: "Imperial",
	Pack: "Boba Fett",
	Pack2: "",
	CardText: "ZX Flame Projector During Boba Fetts activation h gains the following weapons: Melee range 1 1 red Blast, Spray",
	Pips: 2
});

commands.push({
	Name: "Change of Plans",
	Faction: "Rebel",
	Pack: "Han Solo",
	Pack2: "",
	CardText: "Change of Plans When this card is revealed, you may discard it to return an opponent&#39;s command card to their hand. If you do, return to the Select Command Card step. That opponent cannot select the command card that was returned to their hand.",
	Pips: 3
});

commands.push({
	Name: "Sorry About the Mess",
	Faction: "Rebel",
	Pack: "Han Solo",
	Pack2: "",
	CardText: "Sorry About the Mess While building a command hand, treat this card as though it has 1 pip. When Han Solo is issued an order, he gains 1 aim token and 1 dodge token.",
	Pips: 1
});

commands.push({
	Name: "And Now You Will Die",
	Faction: "Imperial",
	Pack: "Emperor Palpatine",
	Pack2: "",
	CardText: "And Now You Will Die During Emperor Palpatine&#39;s activation, he may suffer 1 wound and gain 1 suppression token to preform an attack. He may do this any number of times. After Emperor Palpatine performs an attack, the defender gains 1 immobilized token.",
	Pips: 1
});

commands.push({
	Name: "An Entire Legion",
	Faction: "Imperial",
	Pack: "Emperor Palpatine",
	Pack2: "",
	CardText: "An Entire Legion ",
	Pips: 3
});

commands.push({
	Name: "Sabotaged Communications",
	Faction: "Rebel",
	Pack: "Rebel Specialists",
	Pack2: "",
	CardText: "Sabotaged Communications Your opponent must issue orders to 1 fewer unit than is indicated on their command card to a minimum of 1.",
	Pips: 1
});

commands.push({
	Name: "Covert Observation",
	Faction: "Imperial",
	Pack: "Imperial Specialists",
	Pack2: "",
	CardText: "Covert Observation Look at up to 2 random command cards from an opponents hand.",
	Pips: 1
});

commands.push({
	Name: "Notorious Scoundrels",
	Faction: "Rebel",
	Pack: "Chewbacca",
	Pack2: "",
	CardText: "Notorious Scoundrels Choose one of Han Solos command cards in your discard pile. Return that card to your hand.",
	Pips: 3
});

commands.push({
	Name: "Z-6 Jetpack Rocket",
	Faction: "Imperial",
	Pack: "Boba Fett",
	Pack2: "",
	CardText: "Z-6 Jetpack Rocket During Boba Fetts activation he gains the following weapon: 3-4 Range 3 red Blast 2 Impact 2",
	Pips: 3
});

commands.push({
	Name: "Rebellious",
	Faction: "Rebel",
	Pack: "Jyn Erso",
	Pack2: "",
	CardText: "Rebellious Jyn Erso gains Charge. Once per round, when an enemy unit at range 1-2 and in line of sight of Jyn Erso activates, before it performs its Rally step, Jyn Erso may gain 1 suppression token to either perform an attack against that unit or perform a free move action.",
	Pips: 1
});

commands.push({
	Name: "Voracious Ambition",
	Faction: "Imperial",
	Pack: "Director Orson Krennic",
	Pack2: "",
	CardText: "Voracious Ambition At the start of the Activation Phase, place 3 random orders tokens from your order pool  ahdggad this card. You may hkadhglasd these order tokens at any time. When you would draw an order token from your order pool, you may asdhg 1 of the order tokens on this card and use that order token instead.",
	Pips: 1
});

commands.push({
	Name: "Give in to Your Anger",
	Faction: "Imperial",
	Pack: "Emperor Palpatine",
	Pack2: "",
	CardText: "Give in to Your Anger Before an opponent would activate their first unit, you may choose an enemy trooper unit. If you do, your opponent must activate that unit instead. Assign it an order token from its order pool unless it has a faceup order token. At the end of that units activation, if it did not...suppression tokens",
	Pips: 2
});

commands.push({
	Name: "Brains and Brawn",
	Faction: "Rebel",
	Pack: "Chewbacca",
	Pack2: "",
	CardText: "Brains and Brawn While Leia Organa is performing a ranged attack, if Chewbacca is not engaged and has line of sight to and is at range 1-3 of the defender, add one of his ranged weapons to the attack pool.",
	Pips: 2
});

commands.push({
	Name: "Common Cause",
	Faction: "Rebel",
	Pack: "Chewbacca",
	Pack2: "",
	CardText: "Common Cause After Chewbacca activates, if Luke Skywalker has a faceup order token, he may activate. After Luke Skywalker activates, if Chewbacca has a faceup order token, he may activate.",
	Pips: 1
});

commands.push({
	Name: "Covering Fire",
	Faction: "Rebel",
	Pack: "Rebel Specialists",
	Pack2: "",
	CardText: "Covering Fire After a friendly corps unit performs a ranged attack, another friendly unit at range 1-2 may gain 1 dodge token.",
	Pips: 3
});

commands.push({
	Name: "Turning the Tide",
	Faction: "Rebel",
	Pack: "Rebel Specialists",
	Pack2: "",
	CardText: "Turning the Tide Each friendly support and heavy unit gains Inspire 2.",
	Pips: 2
});

commands.push({
	Name: "Coordinated Fire",
	Faction: "Imperial",
	Pack: "Imperial Specialists",
	Pack2: "",
	CardText: "Coordinated Fire After a friendly corps unit spends an aim token, another friendly unit at range 1-2 may gain 1 aim token.",
	Pips: 3
});

commands.push({
	Name: "Pinned Down",
	Faction: "Imperial",
	Pack: "Imperial Specialists",
	Pack2: "",
	CardText: "Pinned Down After a friendly support or heavy unit performs an attack against a unit with a faceup order token, shuffle that token back into its order pool.",
	Pips: 2
});

commands.push({
	Name: "Complete the Mission",
	Faction: "Rebel",
	Pack: "Jyn Erso",
	Pack2: "",
	CardText: "Complete the Mission Jyn Erso gains Low Profile. When a friendly trooper unit is issued an order, it may gain 1 suppression token. When a friendly trooper unit with a faceup order token activates, during its activation, it cannot become panicked or suppressed. At the end of that units activation, it may remove 1 sup tok",
	Pips: 3
});

commands.push({
	Name: "Trust Goes Both Ways",
	Faction: "Rebel",
	Pack: "Jyn Erso",
	Pack2: "",
	CardText: "Trust Goes Both Ways Jyn Erso gains Inspire 2. When Jyn erso issues an order to another friendly trooper unit, that unit gains Teamwork: Jyn Erso",
	Pips: 2
});

commands.push({
	Name: "Legacy of Mandalore",
	Faction: "Rebel",
	Pack: "Sabine Wren",
	Pack2: "",
	CardText: "Legacy of Mandalore Sabine Wren gains Inspire 1. When Sabine Wren issues an order to a Commander, Operative, or Special Forces unit, she gains either 1 aim token or 1 dodge token.",
	Pips: 3
});

commands.push({
	Name: "Lying in Wait",
	Faction: "Imperial",
	Pack: "Bossk",
	Pack2: "",
	CardText: "Lying in Wait Bossk gains Sharpshooter 1. After an enemy unit activates, Bossk gains 1 aim token.",
	Pips: 3
});

commands.push({
	Name: "Deploy the Garrison",
	Faction: "Imperial",
	Pack: "Director Orson Krennic",
	Pack2: "",
	CardText: "Deploy the Garrison At the start of the Activation Phase, choose up to 2 friendly trooper units that have faceup order tokens. Each chosen unit may perform a free standby action.",
	Pips: 2
});

commands.push({
	Name: "Annihilation Looms",
	Faction: "Imperial",
	Pack: "Director Orson Krennic",
	Pack2: "",
	CardText: "Annihilation Looms Each trooper unit gains 1 suppression token. If it is round 5 or 6, each trooper unit gains 1 additional suppression token.",
	Pips: 3
});

commands.push({
	Name: "Reptilian Rampage",
	Faction: "Imperial",
	Pack: "Bossk",
	Pack2: "",
	CardText: "Reptilian Rampage During Bossks activation, he can perform up to 2 attack actions and he may suffer 1 wound to perform a free move action.",
	Pips: 2
});

commands.push({
	Name: "Merciless Munitions",
	Faction: "Imperial",
	Pack: "Bossk",
	Pack2: "",
	CardText: "Merciless Munitions During the round this card is played, Bossk gains [Action] Arm 1: Dioxis Charge. After he performs this action, he may perform a speed-1 move. Until the end of the game, Bossk gains Detonate 1: Dioxis Charge. After a trooper unit defends against an attack made by your dioxis charge, it gains 1 poiso",
	Pips: 1
});

commands.push({
	Name: "Symbol of Rebellion",
	Faction: "Rebel",
	Pack: "Sabine Wren",
	Pack2: "",
	CardText: "Symbol of Rebellion When Sabine Wren activates, she recovers. During Sabine Wrens activation, you may place 1 graffiti token at range 1 and in line of sight of her, touching a piece of non-area terrain.",
	Pips: 2
});

commands.push({
	Name: "Explosions!",
	Faction: "Rebel",
	Pack: "Sabine Wren",
	Pack2: "",
	CardText: "Explosions! During the round this card is played, Sabine Wren gains [Action] Arm 2: Thermal Charge. After she performs this action, she may perform a speed-1 move. Until the end of the game, Sabine Wren gains Detonate 2: Thermal Charge. Do not discard this card from play.",
	Pips: 1
});

commands.push({
	Name: "General Kenobi",
	Faction: "Galactic Republic",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "General Kenobi When Obi-Wan Kenobi issues an order to a unit, that unit gains 1 surge token for each other friendly unit at range 1 of it.",
	Pips: 3
});

commands.push({
	Name: "Supreme Commander",
	Faction: "Separatist Alliance",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "Supreme Commander General Grievous gains 1 surge token for each other friendly trooper unit at range 1. While another friendly trooper unit has a faceup order token, it gains Guardian 2 and can use Guardian during a melee attack.",
	Pips: 2
});

commands.push({
	Name: "Hello There!",
	Faction: "Galactic Republic",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "Hello There! Obi-Wan Kenobi gains Nimble. At the start of the activation phase, Obi-Wan Kenobi games 1 aim, 1 dodge, 1 standby, or 1 surge token for each enemy unit at range 1-2.",
	Pips: 1
});

commands.push({
	Name: "Trained in Your Jedi Arts",
	Faction: "Separatist Alliance",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "Trained in Your Jedi Arts General Grievous gains Disengage and 1 dodge token. At the end of his activation, he may perform an attack against each enemy unit at range 1 using the following weapons: Melee or range 1, 1 red, 2 black, 1 white. Suppressive, Versatile.",
	Pips: 1
});

commands.push({
	Name: "Crush Them!",
	Faction: "Separatist Alliance",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "Crush Them! When General Grievous issues an order to a unit, that unit gains 1 surge token for each defeated enemy unit.",
	Pips: 3
});

commands.push({
	Name: "Knowledge and Defense",
	Faction: "Galactic Republic",
	Pack: "Clone Wars Core Set",
	Pack2: "",
	CardText: "Knowledge and Defense Obi-Wan Kenobi gains 1 dodge token for each other friendly trooper unit at range 1. Obi-Wan Kenobi can use Guardian during a melee attack.",
	Pips: 2
});

for(var i in units)
{
	for(var j in packs)
	{
		if(units[i].Pack == packs[j].Name || units[i].Pack2 == packs[j].Name)
		{
			packs[j].Units.push(i);
		}
	}
}
for(var i in upgrades)
{
	for(var j in packs)
	{
		if(upgrades[i].Pack == packs[j].Name || upgrades[i].Pack2 == packs[j].Name || upgrades[i].Pack3 == packs[j].Name || upgrades[i].Pack4 == packs[j].Name || upgrades[i].Pack5 == packs[j].Name)
		{
			packs[j].Upgrades.push(i);
		}
	}
}
for(var i in commands)
{
	for(var j in packs)
	{
		if(commands[i].Pack == packs[j].Name || commands[i].Pack2 == packs[j].Name)
		{
			packs[j].Commands.push(i);
		}
	}
}


// Make an object out of all the arrays that get created before
const cards = { units, upgrades, commands }; 
// Convert the object into JSON string
const cardsJson = JSON.stringify(cards);
// Write that to a file
fs.writeFileSync("src/data/cardsB.json", cardsJson);
