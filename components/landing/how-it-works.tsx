const steps = [
  {
    number: "01",
    title: "ثبت نام کنید",
    description: "یک حساب کاربری بسازید و وارد داشبورد شوید.",
  },
  {
    number: "02",
    title: "لینک بسازید",
    description: "آدرس موردنظر خود را وارد کنید و لینک کوتاه دریافت کنید.",
  },
  {
    number: "03",
    title: "عملکرد را بررسی کنید",
    description: "تعداد کلیک‌ها و آمار لینک‌ها را مشاهده کنید.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="
        border-y
        bg-muted/30
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          space-y-10
          px-6
          py-20
          md:px-8
        "
      >
        <div className="text-center">
          <h2
            className="
              text-3xl
              font-bold
            "
          >
            چطور کار می‌کند؟
          </h2>
        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                space-y-4
                rounded-2xl
                border
                bg-background
                p-6
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  text-primary
                "
              >
                {step.number}
              </span>

              <h3
                className="
                  text-xl
                  font-semibold
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-6
                  text-muted-foreground
                "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
