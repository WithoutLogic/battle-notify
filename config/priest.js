module.exports = [
  /*	// Triple Nemesis
	{
		type: 'MissingDuringCombat',
		target: 'MyBoss',
		abnormalities: [27160, 28090, 1004],
		message: "Missing Triple Nemesis",
		rewarn_timeout: 10
	},

	// Energy Stars
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [801500, 801501, 801502, 801503, 801510, 801550],
		message: "Missing {icon}",
		rewarn_timeout: 10
	},

	// Shakan
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [805102, 805101],
		message: "Missing Shakan {icon}",
		rewarn_timeout: 10
	},	
	
	// Divine charge up soon
	{
		type: 'Expiring',
		skills: 280200,
		message: '{icon} cd {duration}',
		time_remaining: 5
	},
		
	// Edict
	{
		type: 'Expiring',
		skills: 430100,
		message: '{icon} cd {duration}',
		time_remaining: 5
	},
*/
  //Immersion Reset
  {
    type: 'Reset',
    skills: 370100,
    message: '{icon} Reset',
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
    message: '{icon} Defense Up',
    required_stacks: 1,
  },

  // Vergos 50% Buff
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950171,
    message: '{icon}Vergos 50% Buff!',
  },
  /*
	// Vergos Berserk Timer
	{
        type: 'Expiring',
        target: 'MyBoss',
        abnormalities: [950193, 950192],
        message: '{red}{icon} {duration}',
        time_remaining: [3, 5, 10, 30, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600]
    },
	*/
  // ReBuff
  {
    type: 'MissingDuringCombat',
    target: 'PartyIncludingSelf',
    abnormalities: [805101, 805102],
    message: '{icon}{name}: Missing Shakan',
    rewarn_timeout: 5,
  },
];
