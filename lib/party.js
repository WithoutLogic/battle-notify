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
    mod.game.party.on("leave", () => {
        party.clear();
    });

    function processPartyList(event) {
        party.clear();
        event.members.forEach(member => {
            party.set(
                member.playerId.toString(),
                member.gameId.toString()
            );
        });
    };

    mod.hook('S_PARTY_MEMBER_LIST', 7, processPartyList);

    mod.hook('S_SPAWN_USER', 17, event => {
        if (!party.size) { return; }
        for (var [key, value] of party.entries()) {
            if (key === event.playerId.toString()) {
                party.set(
                    event.playerId.toString(),
                    event.gameId.toString()
                );
            }
        }
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
