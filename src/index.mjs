import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// Q.1) How to find the maximum character in a string and how many times it appear?
function maxChar(str){
  const obj = {};
  for(let char of str){
    (!obj[char])? obj[char] = 1: obj[char]++;
    
  }
  let maxTime = 0;
  let maxChar = '';

  for(let char in obj){

    if(obj[char] >= maxTime){
      maxTime = obj[char];
      maxChar = char;
    }
  }
  console.log(maxChar, maxTime);
}
maxChar("anhdhsg3f4h33hf");
