import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/Button";
import { contacts } from "@/data/site";

export default function ContactsPage() {
  return (
    <section className="container-px bg-porcelain py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Контакты</p>
          <h1 className="display-title text-5xl font-semibold leading-tight text-ink md:text-6xl">Оставьте заявку или напишите нам</h1>
          <p className="mt-6 text-lg leading-8 text-slate">Вы можете оставить заявку, чтобы получить информацию о программах FIA, результатах обучения, сертификации и следующем шаге.</p>
          <div className="mt-8 grid gap-3 text-graphite">
            <span>Email: {contacts.email}</span>
            <span>Поддержка: {contacts.support}</span>
            <span>Представительство: {contacts.location}</span>
          </div>
          <Button href={contacts.whatsappHref} variant="whatsapp" className="mt-8">Написать в WhatsApp</Button>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
}
