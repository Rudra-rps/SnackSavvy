import React from "react";

export default function Haldiram() {
    return (
        <>
        <div class="search-results">
            Search results for haldirams
        </div>
        <div class="container">
            <div class="container1 similar">
                <div class="samosa food">
                    <div class="samosa-pic pic"></div>
                    <div class="samosa-text txt"><p>Samosa</p></div>
                </div>
                <div class="rajkachori food">
                    <div class="rajkachori-pic pic"></div>
                    <div class="rajkachori-text txt"><p>Raj Kachori</p></div>
                </div>
                <a href="/bikaner"><div class="cholebhature food">
                    <div class="cholebhature-pic pic"></div>
                    <div class="cholebhature-text txt"><p>Chole Bhature</p></div>
                </div></a>
                <div class="rabdi food">
                    <div class="rabdi-pic pic"></div>
                    <div class="rabdi-text txt"><p>Rabdi</p></div>
                </div>
            </div>
            <div class="container2 similar">
                <div class="lassi food">
                    <div class="lassi-pic pic"></div>
                    <div class="lassi-text txt"><p>Lassi</p></div>
                </div>
                <div class="puribhaji food">
                    <div class="puribhaji-pic pic"></div>
                    <div class="puribhaji-text txt"><p>Puri Bhaji</p></div>
                </div>
                <div class="pavbhaji food">
                    <div class="pavbhaji-pic pic"></div>
                    <div class="pavbhaji-text txt"><p>Pav Bhaji</p></div>
                </div>
                <div class="moonghalwa food">
                    <div class="moonghalwa-pic pic"></div>
                    <div class="moonghalwa-text txt"><p>Moong Halwa</p></div>
                </div>
            </div>
        </div>
        </>
    )
}