import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Reglas del programa de aliados | ControlApps" },
  description: "Cómo funciona el programa de aliados de ControlApps: qué podés ofrecer y cómo se calcula y se paga tu comisión.",
  alternates: { canonical: "/aliados/reglas" },
}

const reglas = [
  {
    titulo: "Qué podés ofrecer",
    items: [
      "Los servicios del catálogo, tal como figuran en cada ficha.",
      "Podés contar para qué sirve cada uno y a quién le puede servir.",
      "Podés compartir los folletos, los textos y tu link personal.",
    ],
  },
  {
    titulo: "Qué no podés prometer",
    items: [
      "Precios cerrados, plazos de entrega ni funciones que no figuren en la ficha.",
      "Descuentos o condiciones especiales: el precio y el alcance finales los confirma ControlApps cuando cotiza.",
      "Que algo está listo si la ficha dice que se arma a pedido.",
    ],
  },
  {
    titulo: "Cómo se calcula tu comisión",
    items: [
      "Es un porcentaje sobre lo que el cliente efectivamente pagó, sin impuestos.",
      "En los servicios de pago único cobrás sobre ese pago; en los de suscripción, sobre cada mensualidad.",
      "El porcentaje de cada servicio lo ves en tu portal.",
    ],
  },
  {
    titulo: "Cómo y cuándo se paga",
    items: [
      "Se paga después de que el cliente pagó, en el mes siguiente, por transferencia.",
      "En las suscripciones, se paga mientras el cliente siga pagando, hasta un máximo de 12 meses por cliente.",
      "Si el cliente no paga o pide devolución, la comisión de ese pago no se paga o se descuenta.",
    ],
  },
  {
    titulo: "A quién cuenta como tu cliente",
    items: [
      "Es tu cliente quien nos consulta mencionando tu código o entrando por tu link.",
      "Si esa persona ya era cliente de ControlApps o ya estaba en conversaciones antes, no genera comisión.",
      "Si hay dudas sobre de quién es un cliente, lo resuelve ControlApps y te lo explica.",
    ],
  },
  {
    titulo: "Cómo sumarte y cómo salir",
    items: [
      "Cada alta la aprueba ControlApps. Al aprobarte te damos tu código y tu PIN.",
      "Cuidá tu PIN: no lo compartas.",
      "Podés dejar de participar cuando quieras. ControlApps puede dar de baja a quien incumpla estas reglas.",
    ],
  },
]

export default function ReglasPage() {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 md:px-10 lg:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Programa de aliados</p>
        <h1 className="font-display mt-4 text-[clamp(2.4rem,10vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          Reglas claras para todos.
        </h1>
        <div className="mt-10 space-y-8">
          {reglas.map((r) => (
            <section key={r.titulo}>
              <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.03em]">{r.titulo}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base font-medium leading-7 text-[rgb(56,60,70)]">
                {r.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Link href="/aliados/unirse" className="mt-10 inline-block text-sm font-semibold underline underline-offset-4">
          Quiero ser aliado
        </Link>
      </section>
    </main>
  )
}
