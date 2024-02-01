import { Button, Card, CardFooter, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import { playerInfo, ppr1QB, ppr2QB, nPpr1QB, nPpr2QB } from "../../../rankings";
import footballL from '../../../assets/Fantasy Football Forecaster Football Left.svg';
import footballR from '../../../assets/Fantasy Football Forecaster Football Right.svg';

export default function RookiePreview(props) {

    const [playerStates, setPlayerStates] = useState({});

    const toggleAnalysis = (playerName) => {
        setPlayerStates((prevState) => ({
            ...prevState,
            [playerName]: !prevState[playerName],
        }));
    };

    const description = {
        textAlign: 'center',
        marginBottom: '15px',
        color: '#eFeFeF',
        paddingLeft: '45px',
        paddingRight: '45px',
        fontSize: '15px'
    };
    const modalBelowText = {
        margin: '5px',
    };
    const lastEdited = {
        textAlign: 'right',
        marginBottom: '1px',
        marginTop: '3px',
        fontSize: '12px',
        paddingRight: '7px', 
    };
    const metricsStyle = {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridGap: '5px',
        fontSize: '15.5px'
    };
    const analysisStyle = {
        margin: '5px',
        borderTop: '0.01rem solid lightgray',
        paddingTop: '10px',
        fontSize: '14px'
    };
    const imgCreditsStyle = {
        textAlign: 'right',
        fontSize: '10px',
        paddingRight: '8px',
        marginTop: '10px',
        marginBottom: '0px'
    }

    function WhichMetrics(selectedPlayer) {
        if (selectedPlayer.pos === "QB") {
            return <>
                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>Passing Yards: {selectedPlayer.passYrds}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>TD/INT: {selectedPlayer.td2Int}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Completion %: {selectedPlayer.compPerc}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Yards/Att: {selectedPlayer.yrdsPerAtt}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Rushing: {selectedPlayer.rush}</p>
                    </Col>
                </Row>
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>
            </>
        } if (selectedPlayer.pos === "RB") {
            return <>
                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        <p style={modalBelowText}>Rushing: {selectedPlayer.rushing}</p>
                        <p style={modalBelowText}>Yards/Rush: {selectedPlayer.ydsPerRush}</p>
                        <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                        <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                    </Col>
                </Row>
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>
            </>
        } else {
            return <>
                <Row>
                    <Col style={metricsStyle}>
                        <p style={modalBelowText}>Position: {selectedPlayer.pos}</p>
                        <p style={modalBelowText}>40-Yard Dash: {selectedPlayer.fortyYrd}</p>
                        <p style={modalBelowText}>Age: {selectedPlayer.age}</p>
                        <p style={modalBelowText}>3-Cone Drill: {selectedPlayer.threeCone}</p>
                        <p style={modalBelowText}>Size: {selectedPlayer.size}</p>
                        <p style={modalBelowText}>Vertical: {selectedPlayer.vert}</p>
                        <p style={modalBelowText}>Receptions: {selectedPlayer.recTdRec}</p>
                        <p style={modalBelowText}>Receiving Yards: {selectedPlayer.recYrds}</p>
                    </Col>
                </Row>
                <p style={imgCreditsStyle}>Photo: [<a href={selectedPlayer.imgOrgUrl} target="_blank">Source</a>] - {selectedPlayer.imgSite}</p>
            </>
        }
    }
    
    
    return <div>
        <Row>
            <h1 style={{textAlign: 'center', marginBottom: '0px', color: '#eFeFeF'}} className="headerFont">
                <img
                    src={footballL} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginRight: '5px', marginBottom: '7px' }}  
                />
                Rookie Preview
                <img
                    src={footballR} 
                    alt="football" 
                    style={{ width: '60px', height: 'auto', marginLeft: '5px', marginBottom: '7px' }}  
                />
            </h1> 
            <p style={description}>
                Here's our analysis on every player we see relevant in this years draft. Each player's combine metrics will be updated as they 
                finish their combine testing. The metrics we've selected are the most predictive of success for the position of the player.
                The statistics included are from the 2023 season. Because this is every player we see relevant, there are a few deep sleepers 
                that won't be in the Draft Rankings for those deeper leauges and empty roster spots. 
            </p>
            {playerInfo.map((player) => (
                <Col
                    xs={12}
                    md={6}
                    lg={4}
                    xxl={4}
                    key={player.name}
                >
                    <Card style={{margin: "0.4rem", borderRadius: "15px", borderColor: "black", backgroundColor: '#eFeFeF', marginBottom: '20px'}}  >
                        <img src={player.imgUrl} alt={"A picture of " + player.name} style={{margin: "0.35rem", borderRadius: "15px"}} />
                        <h3 style={{fontSize: "1.5rem", textAlign: "center"}} >{player.name}</h3>
                        <div>{WhichMetrics(player)}</div>
                        <div style={{margin: "0.35rem"}}> 
                            {playerStates[player.name] && (
                                    <p>
                                        <p style={analysisStyle}>{player.analysis}</p>
                                        <p style={lastEdited}>Last Edited: {player.lastEditTime}</p>
                                    </p>
                            )}
                        </div>
                        <CardFooter>
                            <Button variant="success" onClick={() => toggleAnalysis(player.name)}>
                                    {playerStates[player.name] ? "Hide Analysis" : "Show Analysis"}
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
}