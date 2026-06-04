import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";

const whatsappHref =
  "https://wa.me/?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20FIA";

const heroBadges = [
  "Программы аккредитованы ICF",
  "80% практики / 20% теории",
  "Методология Берри Фаулера",
  "Казахстан и Центральная Азия"
];

const whyFiaAdvantages = [
  {
    title: "Быстрее к практике",
    text: "80% обучения занимает практика."
  },
  {
    title: "Осваивайте навыки, а не только теорию"
  },
  {
    title: "Применяйте инструменты уже во время обучения"
  },
  {
    title: "Система, проверенная в реальном бизнесе"
  }
];

const audiences = [
  {
    lead: "Масштабируйте бизнес без постоянного ручного управления",
    title: "Для предпринимателей",
    paragraphs: [
      "Если большая часть решений по-прежнему зависит от вас, а команда постоянно ждёт указаний, коучинговый подход поможет развивать самостоятельность сотрудников, усиливать ответственность и создавать более устойчивую систему управления.",
      "После обучения вы сможете использовать коучинговые инструменты для развития людей, повышения вовлечённости и достижения бизнес-результатов."
    ]
  },
  {
    lead: "Развивайте команды, которые умеют принимать решения",
    title: "Для руководителей",
    paragraphs: [
      "Современное лидерство требует не только контроля, но и умения раскрывать потенциал сотрудников, развивать инициативу и формировать культуру ответственности.",
      "Коучинговые инструменты помогают руководителям эффективнее работать с людьми, управлять изменениями и достигать результатов через развитие команды."
    ]
  },
  {
    lead: "Помогайте клиентам не только понимать проблему, но и двигаться к результату",
    title: "Для экспертов, консультантов и психологов",
    paragraphs: [
      "Многие специалисты умеют давать ценные рекомендации, но сталкиваются с тем, что клиенты не внедряют их в жизнь.",
      "Коучинговый подход помогает переводить клиента от осознания к действиям, повышая эффективность работы и ценность профессиональной практики."
    ]
  },
  {
    lead: "Освойте международные стандарты коучинга и получите новую профессию",
    title: "Для будущих коучей",
    paragraphs: [
      "Если вы хотите начать карьеру в коучинге, программы FIA помогут освоить международные стандарты профессии, получить практические навыки и уверенно начать работать с клиентами.",
      "Вы изучаете не только теорию, но и инструменты, которые сможете применять на практике уже в процессе обучения."
    ]
  }
];

const programs = [
  {
    lead: "Освойте профессию профессионального коуча",
    title: "Базовый курс профессионального коучинга",
    text: "Для тех, кто хочет получить системную подготовку по международным стандартам коучинга и начать применять коучинговые инструменты в работе с клиентами, командами и собственными целями.",
    resultTitle: "После обучения вы сможете:",
    results: [
      "Проводить коучинговые сессии по системе FIA",
      "Использовать коучинговые инструменты в работе и жизни",
      "Освоить международные стандарты профессии",
      "Получить сертификат FIA"
    ]
  },
  {
    lead: "Развивайте лидеров и команды",
    title: "Executive Coaching",
    text: "Для руководителей, предпринимателей и управленцев, которые хотят усиливать команды не через контроль, а через развитие ответственности, инициативы и самостоятельности сотрудников.",
    resultTitle: "После обучения вы сможете:",
    results: [
      "Использовать коучинговый подход в управлении",
      "Развивать лидерские качества сотрудников",
      "Повышать вовлечённость команды",
      "Эффективнее внедрять изменения"
    ]
  },
  {
    lead: "Сохраняйте эффективность в условиях стресса",
    title: "Коучинг по стрессоустойчивости и саморегуляции",
    text: "Для тех, кто работает в условиях высокой ответственности, постоянных изменений и эмоциональных нагрузок.",
    resultTitle: "После обучения вы сможете:",
    results: [
      "Лучше управлять стрессом",
      "Сохранять продуктивность в сложных ситуациях",
      "Быстрее восстанавливаться после нагрузок",
      "Поддерживать устойчивое эмоциональное состояние"
    ]
  },
  {
    lead: "Превратите свои сильные стороны в профессиональный успех",
    title: "Карьерный коучинг и монетизация талантов",
    text: "Для специалистов, которые хотят определить своё направление развития, раскрыть потенциал и увеличить профессиональную ценность на рынке.",
    resultTitle: "После обучения вы сможете:",
    results: [
      "Определить свои сильные стороны",
      "Построить стратегию карьерного развития",
      "Увеличить профессиональную востребованность",
      "Монетизировать свои таланты и компетенции"
    ]
  },
  {
    lead: "Создавайте команды, которые достигают результатов вместе",
    title: "Групповой коучинг и командное развитие",
    text: "Для руководителей, HR-специалистов, тренеров и коучей, работающих с группами и командами.",
    resultTitle: "После обучения вы сможете:",
    results: [
      "Проводить групповые коучинговые процессы",
      "Повышать эффективность взаимодействия в командах",
      "Развивать культуру ответственности и сотрудничества",
      "Помогать командам достигать общих целей"
    ]
  }
];

const icfBenefits = [
  "Обучение по мировым стандартам профессии",
  "Программы, аккредитованные ICF",
  "Подготовку международного уровня",
  "Возможность применять полученные знания и навыки в разных странах мира"
];

const team = [
  {
    name: "Наталия Вавилина",
    role: "Руководитель Русскоязычного отделения FIA (США)"
  },
  {
    name: "Светлана Махат",
    role: "Генеральный представитель FIA в Казахстане и Центральной Азии"
  },
  {
    name: "Натали ван Оттерло",
    role: "Ведущий тренер по подготовке сертифицированных коучей"
  },
  {
    name: "Татьяна Рева",
    role: "Автор и тренер программ по стрессоустойчивости и саморегуляции"
  }
];

const representationBenefits = [
  "Официальное представительство FIA",
  "Международные программы обучения",
  "Программы, аккредитованные ICF",
  "Поддержка на всех этапах обучения"
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/90 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <a className="flex items-center gap-3" href="/">
            <Image
              alt="FIA"
              className="h-11 w-11 rounded-full object-cover"
              height={88}
              src="/fia-seal.jpeg"
              width={88}
              priority
            />
            <span className="leading-tight">
              <span className="block text-sm font-extrabold text-ink">FIA</span>
              <span className="hidden text-xs font-semibold text-ink/70 sm:block">
                Fowler International Academy of Professional Coaching
              </span>
              <span className="hidden text-xs font-semibold text-ink/55 sm:block">
                Казахстан и Центральная Азия
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/70 lg:flex">
            <a href="#why-knowledge">Почему одних знаний недостаточно?</a>
            <a href="#why-fia">Почему FIA?</a>
            <a href="#programs">Программы</a>
            <a href="#apply">Оставить заявку</a>
          </nav>
          <div className="hidden md:block">
            <ButtonLink href="#apply" variant="secondary">
              Получить консультацию
            </ButtonLink>
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <div className="absolute right-[-12vw] top-1/2 h-[78vw] max-h-[850px] min-h-[460px] w-[78vw] min-w-[460px] -translate-y-1/2 rounded-full bg-white/5" />
            <Image
              alt="Печать FIA"
              className="absolute right-[-8vw] top-1/2 h-[70vw] max-h-[760px] min-h-[420px] w-[70vw] min-w-[420px] -translate-y-1/2 rounded-full object-cover opacity-30 mix-blend-screen"
              height={1254}
              src="/fia-seal.jpeg"
              width={1254}
              priority
            />
          </div>

          <div className="container relative z-10 flex min-h-[calc(100svh-80px)] items-center py-16">
            <div className="max-w-4xl">
              <h1 className="display reveal text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
                Освойте профессиональный коучинг, который превращает знания в действия
              </h1>
              <div className="reveal-delay mt-7 max-w-3xl space-y-5 text-lg leading-8 text-white/75 md:text-xl">
                <p>
                  Официальное представительство Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии.
                </p>
                <p>
                  Мы обучаем международным стандартам коучинга и помогаем предпринимателям, руководителям, экспертам и будущим коучам применять их для достижения устойчивых результатов в бизнесе, карьере и жизни.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroBadges.map((badge) => (
                  <span
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/85"
                    key={badge}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#apply" variant="light">
                  Получить консультацию
                </ButtonLink>
                <ButtonLink href="#programs" variant="light">
                  Посмотреть программы
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section id="why-knowledge" className="section bg-white">
          <div className="container max-w-5xl">
            <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
              Почему одних знаний недостаточно?
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-ink/75">
              <p>
                Сегодня у нас есть доступ практически к любым знаниям. Мы читаем книги, проходим обучение, слушаем экспертов, изучаем новые подходы и постоянно получаем рекомендации по развитию бизнеса, карьеры и личной эффективности.
              </p>
              <p>Но при этом многие продолжают сталкиваться с одними и теми же проблемами.</p>
              <p>Мы ставим цели и откладываем их на потом.</p>
              <p>Хотим развивать бизнес, но продолжаем заниматься операционными задачами.</p>
              <p>Понимаем, что нужно менять подход к управлению командой, но снова возвращаемся к привычному контролю.</p>
              <p>Получаем ценные рекомендации от экспертов, но так и не внедряем их в жизнь.</p>
              <p>Проблема не всегда в нехватке знаний.</p>
              <p>
                Часто мы просто не понимаем, что именно мешает нам двигаться вперёд, принимать решения и последовательно достигать своих целей.
              </p>
              <p>
                Именно поэтому коучинг стал одним из самых востребованных инструментов развития в мире.
              </p>
              <p>
                Он помогает не просто получать новые идеи, а видеть препятствия, находить решения, брать ответственность за результат и переходить от намерений к конкретным действиям.
              </p>
            </div>
            <blockquote className="display mt-10 border-l-4 border-gold pl-7 text-3xl font-bold leading-tight text-forest md:text-5xl">
              Система FIA — это не разговор о возможностях. Это система, которая помогает превращать цели в действия, а действия — в результаты.
            </blockquote>
          </div>
        </section>

        <section id="why-fia" className="section bg-mint/50">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Почему FIA?
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-8 text-ink/75">
                <p>Сегодня существует множество программ по коучингу.</p>
                <p>В FIA мы подходим к обучению иначе.</p>
                <p>
                  Наша задача — не просто передать знания о коучинге, а помочь как можно быстрее освоить навыки, которые можно применять в работе, бизнесе и жизни.
                </p>
                <p>
                  Именно поэтому наши программы построены вокруг практики, реальных кейсов и внедрения инструментов в повседневную деятельность.
                </p>
                <p>
                  Мы ценим время наших студентов и считаем, что обучение должно помогать человеку быстрее двигаться к результату, а не откладывать его на месяцы.
                </p>
                <p>Этот подход лежит в основе всей системы FIA.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-forest">
                Ключевые преимущества FIA
              </h3>
              <div className="mt-6 grid gap-4">
                {whyFiaAdvantages.map((item) => (
                  <article className="rounded-lg border border-line bg-white p-5" key={item.title}>
                    <h4 className="text-xl font-extrabold text-forest">{item.title}</h4>
                    {item.text ? (
                      <p className="mt-2 text-base leading-7 text-ink/70">{item.text}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="section bg-ink text-white">
          <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Как появилась система FIA
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/75">
              <p>История FIA началась не с коучинга.</p>
              <p>
                Будучи школьным учителем, Берри Фаулер искал способ помочь детям быстрее осваивать сложные предметы и достигать лучших результатов за меньшее время.
              </p>
              <p>
                В 1979 году он основал Sylvan Learning Center и разработал собственную методику ускоренного обучения. Её эффективность оказалась настолько высокой, что миллионы учеников по всему миру смогли значительно быстрее осваивать учебный материал.
              </p>
              <p>Успех этой системы привёл Берри к простому, но важному вопросу:</p>
              <blockquote className="display border-l-4 border-gold pl-7 text-3xl font-bold leading-tight text-white md:text-5xl">
                Если дети могут быстрее осваивать знания, почему взрослые не могут быстрее осваивать новые навыки?
              </blockquote>
              <p>
                Поиск ответа на этот вопрос стал основой для создания Fowler International Academy of Professional Coaching.
              </p>
              <p>Так появилась система FIA — практическая, интенсивная и ориентированная на действие.</p>
              <p>
                Её задача не просто передавать знания, а помогать людям быстрее осваивать новые навыки, применять их на практике и получать реальные результаты в бизнесе, карьере и жизни.
              </p>
              <p>Сегодня опыт Берри Фаулера подтверждён не только результатами студентов.</p>
              <p>
                Созданные им компании Sylvan Learning Center и The Little Gym входят в число Top-100 лучших франчайзинговых компаний мира.
              </p>
              <p>
                Именно поэтому в основе FIA лежит не теория, а подход, который был проверен в реальном бизнесе и на практике миллионов людей.
              </p>
            </div>
          </div>
        </section>

        <section id="time" className="section bg-white">
          <div className="container max-w-5xl">
            <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
              Мы ценим ваше время
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-ink/75">
              <p>
                Подход FIA сформирован предпринимателем, который всю жизнь искал способы получать результат быстрее и эффективнее.
              </p>
              <p>
                Берри Фаулер не создавал систему ради длительного обучения. Он искал способ помочь людям быстрее осваивать новые навыки и применять их на практике.
              </p>
              <p>
                Именно поэтому программы FIA построены вокруг интенсивного обучения, практических упражнений и реальных задач, с которыми люди сталкиваются в бизнесе, управлении и жизни.
              </p>
              <p>
                Мы считаем, что ценность обучения определяется не количеством месяцев, проведённых на курсе, а тем, насколько быстро человек начинает использовать полученные знания на практике.
              </p>
              <p>Поэтому в наших программах 80% обучения занимает практика и только 20% — теория.</p>
              <p>
                Вы не просто изучаете коучинг. Вы осваиваете инструменты, которые можете применять уже в процессе обучения.
              </p>
              <p>Обучение должно приближать к результату, а не откладывать его на месяцы.</p>
            </div>
          </div>
        </section>

        <section id="audiences" className="section bg-mint/50">
          <div className="container">
            <div className="max-w-5xl">
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Для кого обучение в FIA?
              </h2>
              <p className="mt-8 text-lg leading-8 text-ink/75">
                Независимо от того, развиваете ли вы бизнес, управляете командой, работаете с клиентами или хотите освоить новую профессию, коучинговые инструменты помогают быстрее достигать целей и получать устойчивые результаты.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {audiences.map((item) => (
                <article className="rounded-lg border border-line bg-white p-6" key={item.title}>
                  <p className="text-lg font-extrabold text-gold">{item.lead}</p>
                  <h3 className="mt-4 text-2xl font-extrabold text-forest">{item.title}</h3>
                  <div className="mt-4 space-y-4 text-base leading-7 text-ink/70">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section bg-white">
          <div className="container">
            <div className="max-w-5xl">
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Выберите программу под свою цель
              </h2>
              <p className="mt-8 text-lg leading-8 text-ink/75">
                Большинство студентов начинают с Базового курса профессионального коучинга, а затем выбирают специализацию под свои профессиональные цели и задачи.
              </p>
            </div>

            <div className="mt-12 grid gap-8">
              {programs.map((program) => (
                <article className="border-t border-line pt-7" key={program.title}>
                  <p className="text-lg font-extrabold text-gold">{program.lead}</p>
                  <h3 className="mt-3 text-3xl font-extrabold leading-tight text-forest">
                    {program.title}
                  </h3>
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-ink/70">
                    {program.text}
                  </p>
                  <p className="mt-6 text-base font-extrabold text-ink">
                    {program.resultTitle}
                  </p>
                  <ul className="mt-4 grid gap-3 md:grid-cols-2">
                    {program.results.map((result) => (
                      <li
                        className="rounded-lg bg-mint/50 px-5 py-4 text-base font-semibold text-ink/75"
                        key={result}
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="icf" className="section bg-ink text-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Обучение по мировым стандартам коучинга
              </h2>
              <p className="mt-8 text-lg leading-8 text-white/75">
                Наши программы аккредитованы Международной Федерацией Коучинга (ICF), что подтверждает их соответствие мировым стандартам качества и профессиональной подготовки.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gold">Что это даёт вам:</h3>
              <ul className="mt-6 grid gap-4">
                {icfBenefits.map((benefit) => (
                  <li
                    className="rounded-lg border border-white/10 bg-white/5 p-5 text-lg font-semibold leading-7 text-white/80"
                    key={benefit}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="section bg-white">
          <div className="container">
            <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
              Наша команда
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {team.map((member) => (
                <article className="rounded-lg border border-line bg-white p-6" key={member.name}>
                  <h3 className="text-2xl font-extrabold text-forest">{member.name}</h3>
                  <p className="mt-3 text-lg leading-7 text-ink/70">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="representation" className="section bg-mint/50">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Официальное представительство FIA в Казахстане и Центральной Азии
              </h2>
              <p className="mt-8 text-lg leading-8 text-ink/75">
                Мы — официальное представительство Fowler International Academy of Professional Coaching в Казахстане и Центральной Азии.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-forest">Преимущества:</h3>
              <ul className="mt-6 grid gap-4">
                {representationBenefits.map((benefit) => (
                  <li
                    className="rounded-lg border border-line bg-white p-5 text-lg font-semibold leading-7 text-ink/75"
                    key={benefit}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="apply" className="section bg-forest text-white">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="display text-4xl font-bold leading-tight md:text-6xl">
                Начните применять коучинг на практике
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-8 text-white/75">
                <p>
                  Если вы хотите использовать коучинг в бизнесе, управлении, работе с клиентами или освоить новую профессию, мы поможем подобрать программу, которая соответствует вашим целям и задачам.
                </p>
                <p>Оставьте заявку, и мы свяжемся с вами.</p>
              </div>
              <div className="mt-8">
                <ButtonLink href={whatsappHref} variant="light">
                  Написать в WhatsApp
                </ButtonLink>
              </div>
            </div>

            <form className="grid gap-4 rounded-lg border border-white/20 bg-white p-5 text-ink shadow-soft md:p-7">
              <label className="grid gap-2 text-sm font-bold">
                Имя
                <input
                  className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold"
                  name="name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Телефон / WhatsApp
                <input
                  className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold"
                  name="phone"
                  type="tel"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold"
                  name="email"
                  type="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Интересующая программа
                <select
                  className="min-h-12 rounded-md border border-line px-4 font-normal outline-none focus:border-gold"
                  name="program"
                >
                  {programs.map((program) => (
                    <option key={program.title}>{program.title}</option>
                  ))}
                </select>
              </label>
              <button
                className="mt-2 min-h-12 rounded-full bg-forest px-6 text-sm font-extrabold text-white transition hover:bg-ink"
                type="button"
              >
                Оставить заявку
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
