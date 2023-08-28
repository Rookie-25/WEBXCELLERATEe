import React from 'react';
import { Layout, Row, Col, Image } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "./App.css";
import globe from "./assets/img/globe.png"

// function MyComponent() {
//   return (
//     <div>
//       <Button type="primary">Click me</Button>
//     </div>
//   );
// }
function App() {
  const { account } = useWallet();
  return (
    <>
      <Layout>

        <body>
          <header>
            <h1>The NUmber Duel</h1>
            <h6>Love Probability and Numbers . Then how about playing a Game on that? Sounds fun right?? That too on web3!!</h6>
          </header>
          <div className="main-content">
            <div className="left">
              <img src={globe} className='rotate'></img>
            </div>
            <div className="right">
              <div className="console">
                <div className="filename">
                  APTOS 
                </div>
                <pre>
                  <span style={{ color: "rgba(255, 255, 255, 1)" , fontFamily:"roboto" , fontSize:"20px"}} >
<br />In order to participate in the game first connect <br />your wallet by clicking on the button below!
                  </span>
                  {/* pragma solidity ^0.8.0; */}
                  {/* <span style={{ color: "orangered" }}> */}
                    {/* contract </span>ERC20Token <span style={{ color: "orangered" }}></span> */}
                  {/* string <span style={{ color: "rgb(114, 114, 255)" }}>public</span> name = ERC20 Token";
                  string <span style={{ color: "rgb(114, 114, 255)" }}>public</span> symb"MET";
                  uint8 <span style={{ color: "rgb(114, 114, 255)" }}>public</span> decimals = 18;
                  uint256 <span style={{ color: "rgb(114, 114, 255)" }}>public</span> totalSupply;
                  | */}
                </pre>
              </div>
              
              <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
              <WalletSelector />
              {/* <Button type="primary">Another Button</Button> */}
               </Col>

               <button
  style={{
    backgroundColor: 'cyan',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
  }}
>
  Enter Game
</button>

            </div>

          </div>
        </body>

      </Layout>

    </>
  );


}

export default App;
