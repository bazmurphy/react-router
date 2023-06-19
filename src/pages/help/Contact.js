const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="email">
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
