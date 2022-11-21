import React from "react";

export function HomePage(): JSX.Element {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <img
                    src={require("../images/payadLogo.jpg")}
                    alt="The Payad Logo"
                    width="75"
                    height="30"
                />
            </div>
            <div>
                <video width="600" controls autoPlay>
                    <source
                        src="/Users/mycahdetorres/Documents/SideProjects/Project_Payad/payad/src/videos/introVideo.mov"
                        type="video/quicktime"
                    ></source>
                    Sorry, your browser does not support videos.
                </video>
            </div>
            <div>hiiii</div>
        </div>
    );
}
