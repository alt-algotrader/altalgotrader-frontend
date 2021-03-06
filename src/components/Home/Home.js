import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import { CommandLine } from '../Bash';
import { Footer } from '../Footer';

const Home = () => {
    const now = new Date();

    return (
        <div className="home">
            <div className="home__start">
                μ μ μκ°: {now.toString()}
            </div>
            <CommandLine emoji={'π₯'} location={'~'} command={'pwd'} />
            <Banner />
            <CommandLine emoji={'π'} location={'~'} command={'about'} />
            <About />
            <CommandLine emoji={'π¦'} location={'~'} command={'team'} />
            <Footer />
        </div>
    );
};

const Banner = () => {
    // Generating random data..
    let a, b, c;
    a=[]; b=[]; c=[];
    for(let i=0;i<50;i++)
    {
        var a_ = Math.random(); 
        a.push(a_);
        
        var b_ = Math.random(); 
        b.push(b_);
        
        var c_ = Math.random(); 
        c.push(c_);
    }
    // Plotting the mesh
    var data=[
        {
            opacity:0.8,
            color:'rgb(300,100,200)',
            type: 'mesh3d',
            x: a,
            y: b,
            z: c,
        }
    ];

    return (
        <>
            <div className="home__title">
                <p>+-+-+-+-+ +-+-+-+-+-+-+-+</p>
                <p>|A|L|G|O| |T|R|A|D|I|N|G|</p>
                <p>+-+-+-+-+ +-+-+-+-+-+-+-+</p>
            </div>
            <div className="home__description">
                μνΈμ μκ³ λ¦¬μ¦ νΈλ μ΄λ©λ£Έμ μ€μ  κ²μ νμν©λλ€...
            </div>
            <div className="home__chart-sample">
                <Plot
                    data={data}
                    layout={{
                        width: 600,
                        height: 500,
                        title: '',
                        autosize: true,
                        paper_bgcolor: '#2b303b',
                        scene: {
                            xaxis: {
                                color: '#b8b8b8',
                                gridcolor: '#b8b8b8',
                            },
                            yaxis: {
                                color: '#b8b8b8',
                                gridcolor: '#b8b8b8',
                            },
                            zaxis: {
                                color: '#b8b8b8',
                                gridcolor: '#b8b8b8',
                            },
                        },
                        margin: {l: 50, r: 50, b: 50, t: 50, pad: 10},
                    }}
                    config={{displayModeBar: false, scrollZoom: true}}
                />
            </div>
        </>
    );
};

const About = () => {
    // https://patorjk.com/software/taag/#p=display&f=Serifcap&t=blog
    return (
        <>
            <div className="home__about">
                <Link to="/blog">
                    <div className="home__about--selection">
                        <div className="home__about--selection-title web-only">
                            <p> ___  __    __    __ </p>
                            <p>(  ,)(  )  /  \  / _)</p>
                            <p> ) ,\ )(__( () )( (/\</p>
                            <p>(___/(____)\__/  \__/</p>
                        </div>
                        <div className="home__about--selection-title mobile-only">
                            BLOG
                        </div>
                        <div className="home__about--selection-description">
                            <p>μκ³ λ¦¬μ¦ νΈλ μ΄λ©μ κ΄λ ¨λ λΈλ‘κ·ΈκΈμ μμ±νμ¬ μ¬λ¦¬κ³  μμ΅λλ€.</p>
                            <p>κ΄λ ¨ λΆμΌμ κ΄μ¬μλ λ€μν λΆλ€μ λ§λκΈ° μν΄ κΈ μμ±μ μμνμμ΅λλ€.</p>
                        </div>
                    </div>
                </Link>
                <div className="home__about--selection">
                    <div className="home__about--selection-title web-only">
                        <p> ___   __  ____  __  </p>
                        <p>(   \ (  )(_  _)(  ) </p>
                        <p> ) ) )/__\  )(  /__\ </p>
                        <p>(___/(_)(_)(__)(_)(_)</p>
                    </div>
                    <div className="home__about--selection-title mobile-only">
                        DATA
                    </div>
                    <div className="home__about--selection-description">
                        <p>μ€μ  νΈλ μ΄λ©μ μ¬μ©νκ³  μλ λ°μ΄ν°λ₯Ό APIλ‘ μ κ³΅λλ¦½λλ€.</p>
                        <p>μ£Όμ, μ λ¬Ό, μνΈνν, λνμ΄ λ°μ΄ν° λ± λ€μν λ°μ΄ν°κ° μμ΅λλ€.</p>
                    </div>
                </div>
                <div className="home__about--selection">
                    <div className="home__about--selection-title web-only">
                        <p> ___   __   __  _ _  ____  ___  ___  ____ </p>
                        <p>(  ,) (  ) / _)( ) )(_  _)(  _)/ __)(_  _)</p>
                        <p> ) ,\ /__\( (_  )  \  )(   ) _)\__ \  )(  </p>
                        <p>(___/(_)(_)\__)(_)\_)(__) (___)(___/ (__) </p>
                    </div>
                    <div className="home__about--selection-title mobile-only">
                        BACKTEST
                    </div>
                    <div className="home__about--selection-description">
                        <p>λ€μν μ λ΅μ λ°±νμ€ν κ²°κ³Όλ₯Ό νμΈν ν λ‘λ²μ€νΈν μ λ΅μ μ°Ύμλ³Ό μ μμ΅λλ€.</p>
                        <p>μ€μ  νΈλ μ΄λ©μ μ¬μ©μ€μΈ μ λ΅λΆν° λ¦¬μμΉ μ λ΅κΉμ§ λͺ¨λ μκ°λλ¦¬κ² μ΅λλ€.</p>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default Home;