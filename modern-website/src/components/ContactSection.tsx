import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Contact form section for the homepage.
 */
const ContactSection: React.FC = () => {
  const { locale } = useLocale();
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copy =
    locale === 'de'
      ? {
          eyebrow: 'KONTAKT',
          title: 'Nimm Kontakt auf',
          subtitle:
            'Fragen, Anliegen oder Interesse an einer Einführung? Wir freuen uns, von dir zu hören.',
          sessionsCardTitle: 'Zu den Meditationszeiten in München',
          sessionsCardBody: 'Hier findest du alle regelmäßigen Treffen, Zeiten und den Veranstaltungsort.',
          sessionsCardCta: 'Hier klicken',
          newsletterCardTitle: 'Zum Newsletter-Archiv',
          newsletterCardBody:
            'Öffne Rundbriefe, Veranstaltungen, Rückblicke und redaktionelle Hinweise aus München.',
          newsletterCardCta: 'Newsletter',
          name: 'Name',
          email: 'E-Mail',
          subject: 'Betreff',
          message: 'Nachricht',
          placeholders: {
            name: 'Dein Name',
            email: 'dein@email.de',
            subject: 'Worum geht es?',
            message: 'Schreibe uns deine Nachricht...'
          },
          button: 'Nachricht senden',
          fallbackSubject: 'Anfrage über die Website',
          direct: 'Oder direkt an',
          phoneLabel: 'WhatsApp / Mobil'
        }
      : {
          eyebrow: 'CONTACT',
          title: 'Get in Touch',
          subtitle:
            "Have questions, would like an introduction, or want to join a meditation session? We'd love to hear from you.",
          sessionsCardTitle: 'See meditation times in Munich',
          sessionsCardBody: 'Open the full schedule, venue details and weekly meeting information.',
          sessionsCardCta: 'Click here',
          newsletterCardTitle: 'Open the newsletter archive',
          newsletterCardBody:
            'Explore circulars, events, retrospectives and editorial updates from Munich.',
          newsletterCardCta: 'Newsletter',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          placeholders: {
            name: 'Your name',
            email: 'your@email.com',
            subject: 'What is this about?',
            message: 'Write your message here...'
          },
          button: 'Send Message',
          fallbackSubject: 'Website inquiry',
          direct: 'Or write directly to',
          phoneLabel: 'WhatsApp / Mobile'
        };

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm(current => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || copy.fallbackSubject;
    const body = [
      `${copy.name}: ${form.name || '-'}`,
      `${copy.email}: ${form.email || '-'}`,
      '',
      form.message || '-'
    ].join('\n');

    window.location.href = `mailto:anmeldung@meditationmuenchen.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClassName =
    'w-full rounded-[1.1rem] border border-[#d9b3a7]/55 bg-[rgba(255,255,255,0.9)] px-5 py-4 text-[1rem] text-[#4f3d36] outline-none transition placeholder:text-[#8f7d74] focus:border-[#b35d4c]/55 focus:shadow-[0_0_0_4px_rgba(179,93,76,0.08)]';

  return (
    <section id="contact" className="section-band bg-[#e7f6ff] py-20">
      <div className="section-shell">
        <div className="reveal-ready mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            {copy.eyebrow}
          </span>
          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-[#b35d4c] sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-[1.28rem]">
            {copy.subtitle}
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <a
              href="#sessions"
              className="card-soft warm-hover-glow group flex items-center justify-between gap-4 rounded-[1.5rem] px-5 py-4 text-left transition duration-300 hover:-translate-y-1 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8a08d]/34 bg-[rgba(255,247,241,0.96)] text-xl text-[#b35d4c] shadow-[0_10px_20px_rgba(146,92,79,0.08)]">
                  ↑
                </span>
                <div className="min-w-0">
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                    {copy.sessionsCardCta}
                  </p>
                  <h3 className="mt-1 text-xl leading-tight text-[#6c473d] sm:text-[1.3rem]">
                    {copy.sessionsCardTitle}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
                    {copy.sessionsCardBody}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl text-[#b35d4c] transition duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>

            <Link
              to="/newsletter"
              className="card-soft warm-hover-glow group flex items-center justify-between gap-4 rounded-[1.5rem] px-5 py-4 text-left transition duration-300 hover:-translate-y-1 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8a08d]/34 bg-[rgba(255,247,241,0.96)] text-xl text-[#b35d4c] shadow-[0_10px_20px_rgba(146,92,79,0.08)]">
                  ✦
                </span>
                <div className="min-w-0">
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                    {copy.newsletterCardCta}
                  </p>
                  <h3 className="mt-1 text-xl leading-tight text-[#6c473d] sm:text-[1.3rem]">
                    {copy.newsletterCardTitle}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
                    {copy.newsletterCardBody}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl text-[#b35d4c] transition duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="card-soft reveal-ready mx-auto mt-14 max-w-5xl rounded-[2.2rem] p-6 sm:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-3 block text-[1.05rem] font-semibold text-[#5a463e]">
                  {copy.name}
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFieldChange}
                  placeholder={copy.placeholders.name}
                  className={inputClassName}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-3 block text-[1.05rem] font-semibold text-[#5a463e]">
                  {copy.email}
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFieldChange}
                  placeholder={copy.placeholders.email}
                  className={inputClassName}
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-3 block text-[1.05rem] font-semibold text-[#5a463e]">
                {copy.subject}
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleFieldChange}
                placeholder={copy.placeholders.subject}
                className={inputClassName}
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[1.05rem] font-semibold text-[#5a463e]">
                {copy.message}
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleFieldChange}
                placeholder={copy.placeholders.message}
                rows={7}
                className={`${inputClassName} resize-y`}
                required
              />
            </label>

            <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1 text-sm text-slate-600">
                <p>
                  {copy.direct}{' '}
                  <a
                    href="mailto:anmeldung@meditationmuenchen.org"
                    className="font-semibold text-[#b35d4c] transition hover:text-[#9c4b3d]"
                  >
                    anmeldung@meditationmuenchen.org
                  </a>
                </p>
                <p>
                  {copy.phoneLabel}:{' '}
                  <a
                    href="tel:+4917694169665"
                    className="font-semibold text-[#b35d4c] transition hover:text-[#9c4b3d]"
                  >
                    +49 176 941 696 65
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-[1.25rem] border border-[#e1a08c]/45 bg-[rgba(232,181,116,0.9)] px-10 py-4 text-lg font-semibold text-[#4f372f] shadow-[0_14px_28px_rgba(146,92,79,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[rgba(221,168,92,0.94)] hover:shadow-[0_18px_34px_rgba(146,92,79,0.2)]"
              >
                {copy.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
