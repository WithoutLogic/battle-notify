module.exports = [
	//ManaBoost buff expiring
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 503061, 
        message: '{icon}{lightblue} ManaBoost {#45dc70}{duration}',
		time_remaining: [0, 1, 2, 3, 5, 10]
    },
	
	// Lightning Strike Reset
	{
		type: 'Reset',
		skills: 110100,
		message: '{icon} Reset'
	},
]