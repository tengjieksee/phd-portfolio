import './Home.css'; // Make sure this CSS file is imported

export default function Home() {
  return (
    <section id="home" className="home-section">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQEbqtrwcq1hmQ/profile-displayphoto-shrink_800_800/B56ZWKKCUpHoAg-/0/1741779643321?e=1756339200&v=beta&t=OpNZpmZLlIWtUGwnldOir-yOXdrEh3HxbmBRgGjzB-Q"
        alt="Profile picture"
        style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h1>Dr. Teng Jiek See</h1>
      <p>Ph.D. in Artificial Intelligence | Researcher | Developer</p>
      <p>
        [Put the Resume Link here]
      </p>
    </section>
  );
}
