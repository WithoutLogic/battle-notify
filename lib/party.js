'use strict'

const party = new Map();

module.exports = function pm(mod) {
    mod.game.initialize("me");
    mod.game.initialize("party");

    const removeUser = (e) => {
        if (!party.size) { return; }
        party.delete(e.playerId.toString());
    };

    mod.game.party.on('member_kick', removeUser);
    mod.game.party.on('member_leave', removeUser);
    mod.game.party.on('leave', () => {
        party.clear();
    });
	
	mod.hook('S_LOAD_TOPO', 3, (event) => {
        party.clear();
    });
	
	//mod.game.me.on('change_template', () => {
	//	party.clear();
	//});
	
    function processPartyList(event) {
        //party.clear();
		let pId = 0, gId = 0, idx = 0;
        event.members.forEach(member => {
			pId = member.playerId;
			gId = member.gameId;
			if (!party.has(pId.toString())) {
				if (gId === 0n) {
					if (mod.game.me.playerId === pId && mod.game.me.serverId === member.serverId) {
						gId = mod.game.me.gameId;
					}
				}
				party.set(
					pId.toString(),
					gId.toString()
				);
			}
        });
    };

    mod.hook('S_PARTY_MEMBER_LIST', 7, processPartyList);

    mod.hook('S_SPAWN_USER', 17, event => {
        if (!party.size) { return; }
		//console.log("myPlayerId " + mod.game.me.playerId + ", myGameId: " + mod.game.me.gameId);
        for (var [key, value] of party.entries()) {
            if (key === event.playerId.toString()) {
                party.set(
                    event.playerId.toString(),
                    event.gameId.toString()
                );
            }
        }
		//party.forEach((value, key) => {
		//	console.log(`${key}: ${value}`);
		//});
    });

    this.members = function() {
        return Array.from(party.values());
    };

    this.isMember = function(id) {
        id = id.toString();
        return (
            Array.from(party.values()).includes(id) ||
            Array.from(party.keys()).includes(id)
        )
    };
}
