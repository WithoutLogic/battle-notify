module.exports = [
  // Vergos Aggro Debuff
  {
    type: 'AddedOrRefreshed',
    target: 'PartyIncludingSelf',
    abnormalities: 950023,
    message: '{name} has {stacks} stack(s)',
    required_stacks: 1,
  },

  // Vergos Aggro Debuff Expire
  {
    type: 'Removed',
    target: 'PartyIncludingSelf',
    abnormalities: 950023,
    message: "{name}'s stacks expired",
  },

  // Vergos Buff
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950514,
    message: '{icon}Vergos Buff: stacks {stacks}',
  },

  // Vergos Buff
  {
    type: 'AddedOrRefreshed',
    target: 'MyBoss',
    abnormalities: 950514,
    message: '{icon}Regress > {stacks}',
    required_stacks: 1,
  },

  // Vergos Defense Up
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950513,
    message: '{icon} Defense Up',
  },

  // Vergos Defense Up
  {
    type: 'AddedorRefreshed',
    target: 'MyBoss',
    abnormalities: 950513,
    message: '{icon} Defense Up {stacks}',
    required_stacks: 1,
  },

  // Vergos 50% Buff
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950171,
    message: '{icon}Vergos 50% Buff!',
  },

  // Vergos Berserk Timer
  {
    type: 'Expiring',
    target: 'MyBoss',
    abnormalities: [950193, 950192],
    message: '{icon} {duration}',
    time_remaining: [
      3,
      5,
      10,
      30,
      60,
      120,
      180,
      240,
      300,
      360,
      420,
      480,
      540,
      600,
    ],
  },
  /*	
	// endurance debuff
	{
		type: 'MissingDuringCombat',
		target: 'MyBoss',
		abnormalities: [200302, 101200, 101210, 10153140, 10153142],
		message: 'DEBILITATE RETARD',
		rewarn_timeout: 4
	},
*/
];
