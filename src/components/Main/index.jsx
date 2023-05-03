import React  from "react";

import css from './Main.module.css';
import mainPic from '../../images/group.png'
import mypic from '../../images/1.png'
import myfoto from '../../images/7.png'
import myfotone from '../../images/9.png'
import myfototwo from '../../images/3.png'
import myfotothree from '../../images/4.png'

export const MainPage = () =>{
    return(
        <div className={css.mainPage}>
            
             <div className={css.container}>
                       <nav>
                <span className={css.textone}>Thrivetalk</span>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                      <li>Blog</li>
                    </ul>
                    <button className={css.buttono}>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p className={css.texttwo}>Thrivetalk</p>
                    <h1 className={css.textthree}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p className={css.textfour}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.

                    </p>
                    <div>
                        <button className={css.buttontwo}>WHO AM I</button>
                        <button className={css.buttonthree}>WHAT DO I DO</button>
                    </div>
                </div>
                <div className={css.mainpic}>
                    <img src={mainPic}/>
                </div>
            </div>
            
    {/* --------------------------------------------------------------------------------------- */}
            <div className={css.divtwo}>
               <span className={css.textfife}>Why Thrive?</span>
               <p className={css.textsix}>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?  Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
            <div className={css.mypic}>
                <img src={mypic}></img>
            </div>
            </div>
            <div className={css.divthree}>
               <span className={css.textseven}>ABOUT US</span>
               <p className={css.texteght}>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
               </p>
               <h1 className={css.textnine}>WE CAN HELP YOU WITH</h1>
            </div>

            {/* ------------------------------------------------------------------- */}
            <div className={css.divfour}>
                <p className={css.undelain}>_________________________________________</p>
                <p className={css.tochkaone}></p>
                <span className={css.texta}>Weight Lifting</span>  
            </div>
            <div className={css.divfife}>
                 <p className={css.undelain}>_________________________________________</p>
                 <p className={css.tochkaone}></p>
                 <span className={css.texta}>Running  & Spinning</span>  
            </div>
            <div className={css.divsix}>
            <p className={css.undelain}>_________________________________________</p>
                 <p className={css.tochkaone}></p>
                   <span className={css.texta}>Pumping Iron</span>  
            </div>
            <div className={css.divseven}>
            <p className={css.undelain}>_________________________________________</p>
                  <p className={css.tochkaone}></p>
                    <span className={css.texta}>Pumping Iron</span>  
            </div>
{/* ------------------------------------------------------------------------- */}

<div className={css.divonss}>
<p className={css.undelains}>_________________________________________</p>
 <p className={css.tochkaones}></p>
 <span className={css.textas}>Physical Health</span>  
</div>

<div className={css.divtwos}>
<p className={css.undelains}>_________________________________________</p>
 <p className={css.tochkaones}></p>
 <span className={css.textas}>Mental Health</span>  
</div>

<div className={css.divthrees}>
<p className={css.undelainss}>_________________________________________</p>
 <p className={css.tochkaoness}></p>
 <span className={css.textass}>Nutrition</span>  
    <img src={myfoto}/>
</div>

<div className={css.divfours}>
<p className={css.undelains}>_________________________________________</p>
 <p className={css.tochkaones}></p>
 <span className={css.textas}>      Gymnastics</span>  
</div>

<div className={css.divfifes}>
<p className={css.undelains}>_________________________________________</p>
 <p className={css.tochkaones}></p>
 <span className={css.textas}>Crossfit</span>  
</div>

<div className={css.divsixx}>
<p className={css.undelains}>_________________________________________</p>
 <p className={css.tochkaones}></p>
 <span className={css.textas}>Aerobics</span>  
</div>
{/* --------------------- */}
{/* <div className={css.odin}> */}
  {/* <span className={css.textodin}>Nutritional Plans</span> */}
  {/* <p className={css.trxtdva}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> */}
{/* </div> */}
{/*  */}
{/* <div className={css.dva}> */}
{/*  */}
{/* </div> */}
{/*  */}
{/* <div className={css.tri}> */}
{/*  */}
{/* </div> */}
{/*  */}
{/* <div className={css.chet}> */}
{/*  */}
{/* </div> */}
{/*  */}
{/* <div className={css.pat}> */}
{/*  */}
{/* </div> */}
{/*  */}
{/* <div className={css.shes}> */}
{/*  */}
{/* </div> */}
{/* --------------------- */}
<div className={css.divabssd}>
<div className={css.divabs}>
  <span className={css.divabsd}>YOU SHOULD ALSO KNOW</span>
   <p className={css.divabss}>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span className={css.textabsdf}>ThriveTalk </span>can help you.</p>
   <h1 className={css.divabb}>GET HELP NOW</h1>
  <img src={myfotone}/>
</div>
</div>
{/* --------------------- */}
<div className={css.divtvelw}>
    <span className={css.divtheteen}>CONTACT US</span>
    <h1 className={css.divfourteen}>Ready. Set. Smile</h1>
    <p className={css.divfifeteen}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
    <h4 className={css.divsixteen}>GET HELP NOW</h4>
</div>
<div className={css.divtwentyone}>
     <img src={myfototwo} />
 </div>
{/* ------------------------ */}
<div>
    <div className={css.myfotothree}>
    <img src={myfotothree}/>
    </div>
    <span className={css.seventeen}>SOME INFO</span>
    <p className={css.eighteen}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean commodo ligula.</p>


    <span className={css.nineteen}>ENFOLD HEALTH</span>
    <p className={css.fourty}>Main Street 1, Olcott
Buffalo, <br /> United States <br />
+555 283 784 333
<br />
office@enfold-health.com</p>


<span className={css.fifety}>OFFICE HOURS</span>
<p className={css.sixty}>Mo-Fr: 8:00-19:00
<br />
Sa: 8:00-14:00
<br />
Su: closed</p>

</div>

{/* ------------------ */}
<div className={css.divseventy}>
    <span className={css.diveghtyyy}>©</span>
    <p className={css.divninetyy}><span> Copyright-ThriveTalk 2023</span></p>
</div>
{/* ------------------- */}
 </div>

 </div>
 
    
        
    )
}