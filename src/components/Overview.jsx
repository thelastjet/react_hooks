import React from "react";

const Overview = ({ tasks }) => {

    return (
        <React.Fragment>
            <h1 id="taskHeading">Tasks:</h1>
            
            <section>
                <ul>
                    {tasks.map((input, idx) => {
                    return (
                        <div id="taskList">  
                            <li className="listItem" key={idx}>{input}<input id="checkbox" type="checkbox" /></li>
                            <hr />
                        </div>
                    );
                    })}     
                </ul>
            </section>
        </React.Fragment>
    );
};

export default Overview;