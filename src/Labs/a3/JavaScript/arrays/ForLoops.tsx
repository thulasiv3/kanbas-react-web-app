let stringArray1 = ['string1', 'string3'];
let stringArray2 = [];
for (let i = 0;
     i < stringArray1.length;
     i++) {
  const string1 = stringArray1[i];
  stringArray2.push(
    string1.toUpperCase());
}

const stringArray2String = stringArray2.slice(0, 2);

function ForLoops() {
    
    return (

        <>
            <h2>Looping through arrays</h2>
            stringArray2 = {stringArray2String}<br />
        </>

    );
 };
 export default ForLoops;