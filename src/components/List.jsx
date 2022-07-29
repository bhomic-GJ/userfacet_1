export default function List({ data }) {
  if (data != undefined) {
    if (data.length > 0) {
      return (
        <div className="data">
          <div className="entry">
            <div className="cell">ID State</div>{" "}
            <div className="cell">State</div>{" "}
            <div className="cell">ID Year</div> 
            <div className="cell">Year</div>
            <div className="cell">Population</div>
            <div className="cell">Slug State</div>{" "}
          </div>
          <div>
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
