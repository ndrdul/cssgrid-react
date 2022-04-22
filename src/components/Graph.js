export const Graph = ({ dataValue }) => {
   
  
    return(
        <div>
            <h4>Inside Graph </h4>
            <h4>Average Degree: {dataValue.avg} </h4>           
            <h4>Number of Nodes: {dataValue.nodes.length} </h4>       
            <p>from test API </p>
            <p>https://flaskrandomgraph.herokuapp.com/Barabasi</p> 
        </div>
    )
}    
