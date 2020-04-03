const data = [
	{
		principal: 2500,
		time: 1.8
	},

	{
		principal: 1000,
		time: 5
	},

	{
		principal: 3000,
		time: 1
	},

	{
		principal: 2000,
		time: 3
	}
];

function interestCalculator(arr){
	// loop through the arr using map()
	let interestData = arr.map(function(item){
		// destructure item
		let {principal, time} = item;

		if(principal >= 2500 && (time > 1 && time < 3)){
			const rate = 3;
			return {
				principal,
				time,
				rate,
				interest: (principal * time * rate ) / 100
			}
		} else if(principal >= 2500 && time >= 3){
			const rate = 4;
			return {
				principal,
				time,
				rate,
				interest: (principal * time * rate ) / 100
			}
		} else if(principal < 2500 || time <= 1){
			const rate = 2;
			return {
				principal,
				time,
				rate,
				interest: (principal * time * rate ) / 100
			}
		} else{
			const rate = 1;

			return {
				principal,
				time,
				rate,
				interest: (principal * time * rate ) / 100
			}
		}
	});
	
	// print result to console
	console.log(interestData);
	// return calculation
	return interestData;
}

// call the function
interestCalculator(data);




