import React, { useState } from "react";
import { Layout, Row, Col, Image } from "antd";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "./App.css";
import Game from "./game";
import globe from "./assets/img/globe.png";

function App() {
  const { account } = useWallet();
  const [showGame, setShowGame] = useState(false);

  const handleEnterGame = () => {
    setShowGame(true);
  };

  return (
    <>
      <Layout>
        <body>
          {showGame ? (
            <Game />
          ) : (
            <>
              <header>
                <h1>The Number Duel</h1>
                <h6>
                  Love Probability and Numbers. How about playing a Game on
                  that? Sounds fun, right? Especially on web3!!
                </h6>
              </header>
              <div className="main-content">
                <div className="left">
                  <img src={globe} className="rotate" alt="Globe" />
                </div>
                <div className="right">
                  <div className="console">
                    <div className="filename">APTOS</div>
                    <pre>module addr::NumberDuel
                      
                        use aptos_framework::coin;<br />
                        struct Person <br />
                          owner::address, <br />
                          type:u64, <br />

                        
                       <br /></pre>
                  </div>
                  <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
                    <WalletSelector />
                  </Col>
                  <button
                    style={{
                      zIndex:1,
                      position:"relative",
                      bottom: "10px",
                      backgroundColor: "cyan",
                      color: "black",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "bold",
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    onClick={handleEnterGame}
                  >
                    Enter Game
                  </button>
                </div>
              </div>
            </>
          )}
        </body>
      </Layout>
    </>
  );
}

export default App;
