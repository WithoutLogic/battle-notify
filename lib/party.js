'use strict';

const party = new Map();

module.exports = function pm(mod) {
  mod.game.initialize('me');
  mod.game.initialize('party');

  const removeUser = (e) => {
    if (!party.size) {
      return;
    }
    party.delete(e.playerId.toString());
  };

  mod.game.party.on('member_kick', removeUser);
  mod.game.party.on('member_leave', removeUser);
  mod.game.party.on('leave', () => {
    party.clear();
  });

  /*mod.hook('S_LOAD_TOPO', 3, (event) => {
    party.clear();
  });*/

  mod.game.me.on('change_template', () => {
    party.clear();
  });

  function processPartyList(event) {
    let pId = 0n,
      gId = 0n;
    event.members.forEach((member) => {
      pId = member.playerId;
      gId = member.gameId;
      if (party.has(pId.toString())) {
        if (gId === 0n) {
          if (
            mod.game.me.playerId === pId &&
            mod.game.me.serverId === member.serverId
          ) {
            gId = mod.game.me.gameId;
            party.set(pId.toString(), gId.toString());
            /*console.log(
              `battle-notify (S_PARTY_MEMBER_LIST): playerId=${pId}, name=${member.name}, gameId=${gId} apply fix to (gameId===0n)`
            );*/
          }
        }
      } else {
        party.set(pId.toString(), gId.toString());
        /*console.log(
          `battle-notify (S_PARTY_MEMBER_LIST): playerId=${pId}, name=${member.name}, gameId=${gId}`
        );*/
      }
    });
  }

  mod.hook('S_PARTY_MEMBER_LIST', 9, processPartyList);

  mod.hook('S_SPAWN_USER', 17, (event) => {
    if (!party.size) {
      /*console.log(`battle-notify (S_SPAWN_USER): party.size === ${party.size}`);*/
      return;
    }
    for (var [key, value] of party) {
      if (key.toString() === event.playerId.toString()) {
        /*console.log(
          `battle-notify (S_SPAWN_USER): playerId=${key}, name=${event.name}, gameId=${event.gameId} (previous gameId===${value})`
        );*/
        party.set(event.playerId.toString(), event.gameId.toString());
      }
    }
  });

  this.members = function () {
    return Array.from(party.values());
  };

  this.isMember = function (id) {
    id = id.toString();
    return (
      Array.from(party.values()).includes(id) ||
      Array.from(party.keys()).includes(id)
    );
  };
};
