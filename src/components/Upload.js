import React from "react";


function Upload(){
    return(
        <div>
            <h2>upload new Lecture</h2>
            <form action="submit">
                <input type="text" name="title"/>
                <br />
                <input type="text" name="category"/>
                <br />
                <input type="file" name="file"/>
            </form>
        </div>
    );
}

export default Upload;