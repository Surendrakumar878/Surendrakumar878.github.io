// import { Input, Stack, StackDivider } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import React from 'react'

const Conctact = () => {
  return (
      
    // <div classNameName="column" id="contact" style={{    marginTop: "103px"}}>
    //         <div classNameName="text">Message me</div>



    //         <form action="https://getform.io/f/09d980e3-a29a-4b95-a4b6-11863aeb8d8e" method="POST">
    //           <div classNameName="fields">
    //             <div classNameName="field name">
    //               <input type="text" id="name" placeholder="Name" name="name" required />
    //             </div>
    //             <div classNameName="field email">
    //               <input type="email" id="email" placeholder="Email" name="email" required />
    //             </div>
    //           </div>
    //           <div classNameName="field">
    //             <input
    //               type="text"
    //               id="subject"
    //               placeholder="Subject"
    //               name="Subject"
    //               required
    //             />
    //           </div>
    //           <div classNameName="field textarea">
    //             <textarea
    //               cols="30"
    //               rows="10"
    //               id="message"
    //               placeholder="Message.."
    //               name="message"
    //               required
    //             ></textarea>
    //           </div>
    //           <div classNameName="button-area">
    //             <button  type="submit" id="submit">message</button>
    //           </div>
    //         </form>




    //       </div>
        
        <section style={{    marginTop: "103px"}} className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              {/* <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p> --> */}
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Surendra Kumar</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Bhopal, Madhya Pradesh, India</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Mobile</div>
                    <div className="sub-title">8319739024</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">surendramarshkole78@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
  
              <form
                action="https://getform.io/f/745bc11f-2be2-4d1e-a96c-25092d058df7"
                method="POST"
              >
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    name="gender"
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    id="message"
                    placeholder="Message.."
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="button-area">
                  <button type="submit" id="submit">message</button>
                </div>
              </form>
            </div>
          </div>
         
        </div>
      </section>
   
  )
}

export default Conctact



