export default function List({ data }) {
  
  let currentry = 1;
  
  let scrollamt = 0;
  function nextentry(){
    
    let entryarr = document.querySelectorAll('.entry');
    
    /*
    tried... scrolling logic...
    let entrydiv = document.querySelectorAll('.entry');
    
    let cs = getComputedStyle(entrydiv);
    
    let eh = entrydiv.offsetHeight + 1;
    scrollamt += eh;
    let longlist = document.querySelector('.longlist');
    longlist.scrollTop =scrollamt;
    */
    

    
    if(currentry < entryarr.length - 1){
      
    for(let i =1; i < entryarr.length; i++){
      entryarr[i].style.display = "none";
    }
      currentry ++;
      entryarr[currentry].style.display = "block";      
    }
  }
  
  function preventry(){

    let entryarr = document.querySelectorAll('.entry');

    
    if(currentry > 2){
    
    for(let i =1; i < entryarr.length; i++){
      entryarr[i].style.display = "none";
    }
      currentry --;
      entryarr[currentry].style.display = "block";      
    }
  }
  
  if (data != undefined) {
    if (data.length > 0) {
      return (
        <div className="data">
          <div className="entry">
            <div className="cell h">ID State</div>{" "}
            <div className="cell h">State</div>{" "}
            <div className="cell h">ID Year</div> 
            <div className="cell h">Year</div>
            <div className="cell h">Population</div>
            <div className="cell h">Slug State</div>{" "}
          </div>
          <div class="longlist">
            <ul>
              {data.map((e) => {
                return (
                  <div className="entry">
                    <div className="cell">{e["ID State"]}</div>
                    <div className="cell">{e["State"]}</div>
                    <div className="cell"> {e["ID Year"]}</div>
                    <div className="cell">{e["Year"]}</div>
                    <div className="cell">{e["Population"]}</div>
                    <div className="cell">{e["Slug State"]}</div>
                  </div>
                );
              })}
            </ul>
          </div>
  
        <div className="nextbtn prevbtn" onClick={preventry}>Prev</div>
   
        <div className="nextbtn" onClick={nextentry}>Next</div>
        </div>
  
      );
    } else {
      return <div className="data" >No Records Found</div>;
    }
  }
}
