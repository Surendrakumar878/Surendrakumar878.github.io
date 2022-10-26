import { Input, Stack, StackDivider } from '@chakra-ui/react'
import React from 'react'

const Conctact = () => {
  return (
   
    //   <form action="https://getform.io/f/09d980e3-a29a-4b95-a4b6-11863aeb8d8e" method="POST">
    //     <Stack spacing={3}>
    // <Input type="text" name="name" placeholder='name' />
    // <Input type="email" name="email" placeholder='email'/>
    // <Input type="text" name="message" placeholder='message'/>
    // {/* <!-- checkbox handle -->  */}
    // <Input type="checkbox" name="subscribe" value="yes" checked/>
    // <Input type="hidden" name="subscribe" value="no"/>
    // {/* <!-- radio button handle -->  */}
    // <Input type="radio" name="gender" value="male" checked/>
    // <Input type="radio" name="gender" value="female"/>
    // <Input type="radio" name="gender" value="other"/>
    // {/* <!-- select field handle -->  */}
    // <select name="work-experience">
    //     <option value="one-year">0-1 years</option>
    //     <option value="one-five-years">1-5 years</option>
    //     <option value="five-plus-years">5+ years</option>
    // </select>
    // <button type="submit">Send</button>
    // </Stack>
    <div class="column right">
            <div class="text">Message me</div>



            <form action="https://getform.io/f/745bc11f-2be2-4d1e-a96c-25092d058df7" method="POST">
              <div class="fields">
                <div class="field name">
                  <input type="text" id="name" placeholder="Name" name="name" required />
                </div>
                <div class="field email">
                  <input type="email" id="email" placeholder="Email" name="email" required />
                </div>
              </div>
              <div class="field">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  name="gender"
                  required
                />
              </div>
              <div class="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  id="message"
                  placeholder="Message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="button-area">
                <button type="submit" id="submit">message</button>
              </div>
            </form>




          </div>
        
// </form>
   
  )
}

export default Conctact
