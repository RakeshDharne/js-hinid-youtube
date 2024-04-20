 const marvel_heros= ["thor", "Ironman", "spiderman"]
 const dc_heros= ["superman","flash","batman"]


// in the below example dc_heros added in marvel_heros as a element(whole(array))
// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

//use concate to insert all element form one to another
const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros);


//spread  use more than concate

const all_new_heros= [...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);



///// can convert into array
console.log(Array.isArray("hites"))
console.log(Array.from("hites"))
console.log(Array.from({
    name: "hitesh"
})) // interesting  bcz it will give empty array 
//we have to tell them on which basic it has to convert on key or value


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
