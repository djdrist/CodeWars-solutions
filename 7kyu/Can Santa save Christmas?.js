/*
Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:

You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/

function determineTime(durations) {
	let seconds = 0;
	for (let i = 0; i < durations.length; i++) {
		let time = durations[i].split(':');
		seconds += parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
	}
	return seconds <= 86400;
}
