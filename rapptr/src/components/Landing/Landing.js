import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Landing extends React.Component {
    render() {
        return (
            <div className='landing-body'>

                <div className='landing-main'>
                    <div className='d-flex justify-content-center'>
                        <img className='rapptr-logo' src='/Design Assets/gpc_logo_large@2x.png' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h1 className='app-design-text'>APP DESIGN & DEVELOPMENT AGENCY</h1>
                    </div>
                </div>

                <div className='row landing-part2 d-flex justify-content-center'>
                    <div class="col-md-4 text-center">
                        <h2 className='blue-H2'>WHO WE ARE</h2>
                    </div>
                    <div class="col-md-4">
                        <p>
                            Rapptr Labs is a Jersey City-based app development firm that
                            works with Fortune 500 brands, leading retailer, funded startups
                            and more to craft digital products and stratedies that solve
                            business problems and drive measurable results.
                            <br />
                            <br />
                            We're part of your team. That means working together to meet the
                            business challenges you face. From IOS and Android to emerging
                            technologies like VR, AR and wearables, we do whatever it takes
                            to help you thrive in today's - and tomorrow's - digital ecosystem.
                        </p>
                    </div>
                </div>

                <div className='landing-part3'>

                    <div className='text-center'>
                        <h2 className='white-H2'>OUR APPS</h2>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-2'>
                            <a href='https://movo.me/'>
                                <img className='app-logo center-block' src='/Design Assets/logo_movo@2x.png' />
                            </a>
                            <p className='white-H5 text-center'>Movo</p>
                        </div>
                        <div className='col-2'>
                            <a href='https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/'>
                                <img className='app-logo center-block' src='/Design Assets/logo_conair@2x.png' />
                            </a>
                            <p className='white-H5 text-center'>Conair WeightWatchers</p>
                        </div>
                        <div className='col-2'>
                            <a href='https://itunes.apple.com/us/app/the-tapping-solution/'>
                                <img className='app-logo center-block' src='/Design Assets/logo_tappingSolution@2x.png' />
                            </a>
                            <p className='white-H5 text-center'>Tapping Solution</p>
                        </div>
                        <div className='col-2'>
                            <a href='https://www.gotenna.com/'>
                                <img className='app-logo center-block' src='/Design Assets/logo_goTenna@2x.png' />
                            </a>
                            <p className='white-H5 text-center'>goTenna</p>
                        </div>
                    </div>
                </div>

                <div className='landing-part4'>
                    <h2 className='blue-H2 text-center'>SUBSCRIBE TO NEWSLETTER</h2>

                    <div className='row d-flex justify-content-center subscribe-box'>
                        <div className='col-4'>
                            <input className='' type='text' placeholder='Your email' />
                        </div>
                        <div className='col-2'>
                            <button className=''>SUBSCRIBE</button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}


export default Landing;
