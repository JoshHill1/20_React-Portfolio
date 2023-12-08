export default function Blog() {
  return (
    <div className="page-padding">
      <h1>Contact</h1>
      <div id="contact-inputs">
        <label htmlFor="name">Name:</label>
        <input type="text" />
        <label htmlFor="name">Email:</label>
        <input type="text" />
        <label htmlFor="name">Message:</label>
        <input type="text" />
      </div>
      <button>Send</button>
    </div>
  );
}
