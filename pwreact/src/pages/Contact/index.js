const Contact = () => {
  return (
    <div className="section contact">
      <h1>Get In Touch</h1>

      <div className="contactContent">
        <div className="getInTouch">
          <h2>Thanks for stopping by! You can contact me using this form. I look forward to hearing from you.</h2>
        </div>
        <div className="getInTouch">
          <form name="contact v1" method="post">
            <input type="hidden" name="form-name" value="contact v1" />
            <label className="contactLabel" >Name:
              <input className="textInput" type="text" name="name" size="50" placeholder="Your name..." />
            </label>
            <label className="contactLabel" >Email:
              <input className="emailInput" type="email" name="email" size="50" placeholder="Your email..." />
            </label>
            <label className="contactLabel" >Message:
              <textarea className="textarea" name="message" rows="5" cols="50" placeholder="Your message..." ></textarea>
            </label>
            {/* <div>
              <div data-netlify-recaptcha=""></div>
            </div> */}
            <input className="formSubmit" type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
