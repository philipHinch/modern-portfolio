//icons
import { Icon } from '@iconify/react';


const ContactMe = () => {
    return (
        // <div className="container" id='contactMe'>
        //     <h2 className="containerHeader"><span className='red'>03.</span>contactMe</h2>
        //     <form action='mailto:contact@yourdomain.com' method='POST' enctype='multipart/form-data' name='EmailForm'>
        //         <input type='text' size='19' name='ContactName'>
        //             <textarea name='ContactCommentt' rows='6' cols='20'>
        //             </textarea>
        //             <input type='submit' value='Submit'> </form>
        //         </div>
        <div className="container" id="contactMe">
            <h2 className="containerHeader"><span className='red'>03.</span>contactMe</h2>
            <form action="https://formsubmit.co/06db05a9ff2977aaa35cb5336d546ab3" method="POST">
                <input type="hidden" name="_subject" value="New Message From Portfolio" />
                <small>from:</small>
                <input type="email" id='email' name="email" placeholder="enter your email.." required />
                <small>to:</small>
                <input type="email" id='myEmail' name="email" placeholder="philip.hinchsliff@yahoo.com" disabled />
                <small>message:</small>
                <textarea name='message' id='textarea' rows='10' cols='20'
                    maxLength='500'
                    placeholder="write your message.." required>
                </textarea>
                <button type="submit" className="btn btn-primary sendBtn">send <Icon icon="fluent:send-20-filled" className='sendIcon' />
                </button>
            </form>
        </div>
    );
}

export default ContactMe;