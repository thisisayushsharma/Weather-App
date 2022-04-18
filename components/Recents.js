const Recents = (recents) => ( 
`<h2>Recent Searches:</h2>
<section>
<ul>
${ ListItems(recents) }
</ul>
</section>`
);
const ListItems = (recents) => { //Function for HTML component
    let li = ``; //empty string for HTML of list items
    for (let row of recents){ //for each row in scores
    //li += `<li><button onclick="start('${row.name}')">${row.name}</button></li>` //concat row to HTML string
    li += `<li><button onclick="start('${row}')">${row}</button></li>` //concat row to HTML string
    
    }
    return li; //return HTML-formatted text
}
    
export default Recents; 