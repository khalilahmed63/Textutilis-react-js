

export default function About(props) {
  

    return <div className='container mt-5' >
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    INFORMATION:
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtiles.</strong> Is a Free Website that is used for Text Utilization you can perform certain operation with this website you can covert your text into Uppercase and Lowercase also remove extra spaces and much more.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        FREE
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Anyone can use this website features for absolutely <strong>FREE</strong>, no one have pay any kind of charges here.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    DEVELOPMENT:
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>DEVELOPMENT</strong> This website us developed with <strong>HTML, CSS, B00TSTRAP, JAVSSCRIPT, REACT-JS.</strong>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}
