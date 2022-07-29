export default function List({ data }) {
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
        </div>
      );
    } else {
      return <div className="data">No Records Found</div>;
    }
  }
}
