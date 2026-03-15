import React from 'react';

/**
 * Footer shows site meta information at the bottom of the page.
 */
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <p>
          Sahaja Yoga Zentrum München, Am Lilienberg&nbsp;2a, 81669&nbsp;München (S‑Bahn Rosenheimer
          Platz, gegenüber Gasteig)
        </p>
        <p>
          Whatsapp/Mobil: <a href="tel:+4917694169665">+49&nbsp;176&nbsp;941&nbsp;696&nbsp;65</a> · E‑Mail:
          <a href="mailto:anmeldung@meditationmuenchen.org">anmeldung@meditationmuenchen.org</a>
        </p>
        <p>Alle Treffen sind kostenfrei und für alle offen – Einstieg jederzeit möglich!</p>
        <p>© 2026 Sahaja Yoga Kultur e.&nbsp;V.</p>
      </div>
    </footer>
  );
};

export default Footer;
