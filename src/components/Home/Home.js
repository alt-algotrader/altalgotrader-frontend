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
                접속 시간: {now.toString()}
            </div>
            <CommandLine emoji={'🔥'} location={'~'} command={'pwd'} />
            <Banner />
            <CommandLine emoji={'🌈'} location={'~'} command={'about'} />
            <About />
            <CommandLine emoji={'🦄'} location={'~'} command={'team'} />
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
                알트의 알고리즘 트레이딩룸에 오신 것을 환영합니다...
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
                            <p>알고리즘 트레이딩에 관련된 블로그글을 작성하여 올리고 있습니다.</p>
                            <p>관련 분야에 관심있는 다양한 분들을 만나기 위해 글 작성을 시작하였습니다.</p>
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
                        <p>실제 트레이딩에 사용하고 있는 데이터를 API로 제공드립니다.</p>
                        <p>주식, 선물, 암호화폐, 디파이 데이터 등 다양한 데이터가 있습니다.</p>
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
                        <p>다양한 전략의 백테스팅 결과를 확인한 후 로버스트한 전략을 찾아볼 수 있습니다.</p>
                        <p>실제 트레이딩에 사용중인 전략부터 리서치 전략까지 모두 소개드리겠습니다.</p>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default Home;