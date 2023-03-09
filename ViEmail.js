
import React,{useState} from "react";


const ViEmail=()=>{

    const[email,setEmail]=useState('');

    const[testeur,setTesteur]=useState(false);

    /*const handleChange=(event)=>{
        
        setEmail(event.target.value);
        setTesteur((email.length)?true :false)
    }*/
    const veriEmil=(event)=>{
        let em=event.target.value;
        let EXPRE= new RegExp("^[a-z]+\@[a-z]{4,6}\.(com|ma|fr)$");
        setTesteur(EXPRE.test(em))
        setEmail(em)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(testeur==true){alert('email envoyer')}
     }

   

    return(<div className="container">
          
                <div className="border w-10 center rounded shadow-sm m-5 p-5">
                    <div className="center text-center">
                        <h1>Verifier Email </h1>
                        <form className="container" onSubmit={handleSubmit}> 
                        
                            <label> Email </label>
                            <input type="text" name="email" value={email} onChange={veriEmil}/>
                            <input type="submit" name="nom" value='Envoyer' className="btn btn-dark"/><br/>
                           <label> Email :{email}</label><br/>
                            <span style={{color:testeur?'purple':'red'}} >{testeur?'valide':'invalide'}</span>
                        </form>
                    </div>
                </div>
                
        </div>
    );

}
export default ViEmail