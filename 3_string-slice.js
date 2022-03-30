const anthem = 'Amar sonar Bangla Ami tomay Valobasi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallsSlice = anthem.slice(5, 13);
// console.log(smallsSlice);

// substr
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibriya');
// console.log(fullString);

// join

const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW ');
console.log(allJoined);