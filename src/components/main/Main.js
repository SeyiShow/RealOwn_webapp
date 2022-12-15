import "./Main.css";
import wallet from "../../assets/wallet.svg";
import cost from "../../assets/cost.svg";
import Bank from "../../assets/Bank.svg";
import Buildings from "../../assets/Buildings.svg";
import Crown from "../../assets/Crown.svg";

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__cards">

                    <div className="card">
                        
                        <div className="card_inner">
                         <h3 className="text-primary-p">Total Balance</h3>
                         <span className="font-bold text-title">N10,000</span>
                         <br/>
                         <button  className="btn">+ Add money</button> 
                        </div>
                        <img src={wallet} className="text-green" />
                    </div>

                    <div className="card">
                        <div className="card_inner">
                         <h3 className="text-primary-p">Investment</h3>
                         <span className="font-bold text-title">N10,000</span>
                         <br/>
                         <button  className="btn">Invest more</button> 
                        </div>
                        <img src={cost} className="text-green" />
                    </div>
                </div>

                <h2 className="head">Plans</h2>
                <div className="main__cards2">
                   <div className="card2">
                        <img src={Bank} className="text-light" />
                        <div className="card_inner2">
                         <h3 className="text-primary-p">Real Banking</h3>
                         <p className="font-bold text-title">Invest in Landed properties</p>
                         <a href="#">Learn more --</a> 
                        </div>
                    </div>

                    <div className="card2">
                        <img src={Buildings} className="text-light" />
                        <div className="card_inner2">
                         <h3 className="text-primary-p">Real Assets</h3>
                         <p className="font-bold text-title">Invest in Rental properties</p>
                         <a href="#">Learn more --</a>
                        </div>
                    </div>

                    <div className="card2">
                        <img src={Crown} className="text-light" />
                        <div className="card_inner2">
                         <h3 className="text-primary-p">Real Projects</h3>
                         <p className="font-bold text-title">Invest in Construction projects</p>
                         <a href="#">Learn more --</a> 
                        </div>
                    </div> 
                </div> 
                    
                
            </div>
        </main>
    )
}

export default Main;