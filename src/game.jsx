import React from "react";
import { ReactDOM } from "react";

function Game(){
    return(
    <div>
        <div className="row">
            <div class="col-lg-6">
                <div class="row">
                    <h1>Player 1</h1>
                </div>
                <div class="row">
                    <h2 style="text-align: left;">Address:</h2>
                    <h2 style="text-align: left;">Number of NFTs: 5</h2>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <h1>Player 2</h1>
                </div>
                <div class="row">
                    <h2 style="text-align: left;">Address:</h2>
                    <h2 style="text-align: left;">Number of NFTs: 5</h2>
                </div>
            </div>
        </div>
        <div class="row" id="button">
            <button type="button" class="btn btn-primary">Throw your card</button>
        </div>
    </div>)
}