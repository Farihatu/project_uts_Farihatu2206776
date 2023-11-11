export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact</h2>
        <p className="sub--title">Masukkan pesan Anda dibawah ini</p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nama Depan</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Nama Belakang</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">No handphone</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Pesan</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Ketikkan pesanmu disini..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Kirim</button>
        </div>
      </form>
    </section>
  );
}
