import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface Session {
  day: string;
  time: string;
  description: string;
  note?: string;
}

// Session schedule for Sahaja Yoga Munich.  Adjust times and descriptions as needed.
const sessions: Session[] = [
  {
    day: 'Dienstag',
    time: '18:30–20:00',
    description: 'Meditation in English',
    note: 'Not during school holidays'
  },
  {
    day: 'Donnerstag',
    time: '19:30',
    description: 'Offene Meditationsgruppe – Sahaja Yoga Wissen & geleitete Meditationen'
  },
  {
    day: 'Freitag',
    time: '19:30',
    description: 'Meditation „International“ & Young Generation (Vorträge und geleitete Meditationen)'
  },
  {
    day: 'Samstag',
    time: '18:30',
    description: 'Geleitete Meditation für Fortgeschrittene',
    note: 'Registration required'
  }
];

/**
 * SessionsSection displays the weekly session schedule for the Sahaja Yoga centre.
 * Each line animates into view as you scroll.
 */
const SessionsSection: React.FC = () => {
  useScrollReveal('.session-item', 'reveal', 0.2);
  return (
    <section id="sessions" className="sessions-section">
      <div className="container">
        <h2>Wöchentliche Sitzungen</h2>
        <div className="sessions-list">
          {sessions.map((session, index) => (
            <div key={index} className="session-item">
              <h3>
                {session.day} — <span className="session-time">{session.time}</span>
              </h3>
              <p>{session.description}</p>
              {session.note && <p className="note">{session.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
