module.exports = [
  // Missing stance
  {
    type: 'MissingDuringCombat',
    target: 'Self',
    abnormalities: [
      100100,
      100101,
      100102,
      100103,
      100200,
      100201,
      100202,
      100203,
    ],
    message: 'Missing Stance',
    rewarn_timeout: 10,
  },

  /*
	// Blade Draw Reset
	{
		type: 'Reset',
		skills: [290100, 370100], // normal & deadly gamble version of blade draw
		message: '{icon} Reset'
	},
*/
  //Traverse buff expiring
  {
    type: 'Expiring',
    target: 'Self',
    abnormalities: [101300, 101301],
    message: '{icon}T-cut {duration}',
    time_remaining: [0, 3, 6, 9, 12],
  },

  // Added: ATS Glyph - Swift Evasive Roll, skills: 20100
  {
    type: 'Added',
    target: 'Self',
    abnormalities: 21010,
    message: '{icon}{lightblue}+15% ats (evasive roll)',
  },
  // Added: ATS Glyph - Swift Death From Above, skills: 100700
  {
    type: 'Added',
    target: 'Self',
    abnormalities: 21070,
    message: '{icon}{lightblue}+15% ats (dfa)',
  },
  // Expiring: ATS Glyphs
  {
    type: 'Expiring',
    target: 'Self',
    abnormalities: [21010, 21070],
    message: '{icon}{orange}+15% ats expired',
    time_remaining: [0],
  },
  // AddedOrRefreshed: Shadow of the Tempest I
  {
    type: 'AddedOrRefreshed',
    target: 'Self',
    abnormalities: 103120,
    message: '{icon}{blue} TA I {stacks} stack(s)',
    required_stacks: 42,
  },
  // Added: Shadow of the Tempest I
  {
    type: 'Added',
    target: 'Self',
    abnormalities: 103130,
    message: '{icon}{lightblue} TA I',
  },
  // Added: Shadow of the Tempest II
  {
    type: 'Added',
    target: 'Self',
    abnormalities: 103104,
    message: '{icon}{lightblue} TA II',
  },
  // Expiring: Shadow of the Tempest II
  {
    type: 'Expiring',
    target: 'Self',
    abnormalities: [103104, 103130],
    message: '{icon}{orange} TA {duration}',
    time_remaining: [0, 2, 4, 6, 12],
  },

  /*
	//dg expiring
	{
        type: 'Expiring',
		skills: 200100
        abnormalities: [100800,100801], 
        message: '{icon} up in {duration} ',
		time_remaining: [16, 5]
    },
*/

  // Vergos Aggro Debuff
  {
    type: 'AddedOrRefreshed',
    target: 'PartyIncludingSelf',
    abnormalities: 950023,
    message: '{violet}{name} has {stacks} stack(s)',
    required_stacks: 1,
  },

  // Vergos Aggro Debuff Expire
  {
    type: 'Removed',
    target: 'PartyIncludingSelf',
    abnormalities: 950023,
    message: "{violet}{name}'s stacks expired",
  },

  // Vergos Buff
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950514,
    message: '{icon}{blue}Vergos Buff: stacks {stacks}',
  },

  // Vergos Buff
  {
    type: 'AddedOrRefreshed',
    target: 'MyBoss',
    abnormalities: 950514,
    message: '{icon}{blue}Regress > {stacks}',
    required_stacks: 1,
  },

  // Vergos Defense Up
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950513,
    message: '{icon}{red} Defense Up',
  },

  // Vergos Defense Up
  {
    type: 'AddedorRefreshed',
    target: 'MyBoss',
    abnormalities: 950513,
    message: '{icon}{red} Defense Up {stacks}',
    required_stacks: 1,
  },

  // Vergos 50% Buff
  {
    type: 'Added',
    target: 'MyBoss',
    abnormalities: 950171,
    message: '{icon}{red}Vergos 50% Buff!',
  },

  // Vergos Berserk Timer
  {
    type: 'Expiring',
    target: 'MyBoss',
    abnormalities: [950193, 950192],
    message: '{red}{icon} {duration}',
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
		message: 'COMBATIVE RETARD',
		rewarn_timeout: 3
	},
*/
];
