import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About</h1>
          <p className="text-lg md:text-xl mb-6">
            Most defense tech founders don&rsquo;t fail because their tech
            doesn&rsquo;t work.
            <br />
            They fail because it never gets downrange.
          </p>
          <p className="text-base md:text-lg mb-4">
            You can build a world-changing solution, spend years chasing
            programs of record, and still stall out—drowned in bureaucracy,
            misaligned execution, or BD Theater.
          </p>
        </section>

        <section className="space-y-4 text-left">
          <p className="font-semibold">
            I hear it in every market research call:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>They&rsquo;re mission-driven, but misaligned.</li>
            <li>They chase contracts, but outsource relationships.</li>
            <li>They mistake motion for progress.</li>
            <li>
              They delay execution and compliance until it&rsquo;s too late.
            </li>
            <li>They don&rsquo;t need more advice—they need a compass.</li>
          </ul>
        </section>

        <section className="space-y-4 text-left">
          <p>
            I help dual-use and defense tech founders avoid the BD Theater and
            Bureaucracy Swamp to focus on execution and turn potential into
            fielded capability.
          </p>
          <p className="font-semibold">I&rsquo;m Patrick Byrne.</p>
          <p>
            I&rsquo;ve led product, program, and GTM efforts across every layer
            of defense innovation—from managing the transition of Air Force One,
            to building AI mission software at Rebellion Defense, to launching
            dual-use cybersecurity products from the ground up at Hunted Labs.
            <br />
            I&rsquo;ve managed more than 55 products and driven over $2.1
            billion in revenue by leading with Vision, Alignment, and
            Empowerment.
            <br />
            I&rsquo;ve deployed technology in some of the most complex,
            high-stakes environments on Earth. Now I help other leaders do the
            same.
          </p>
        </section>

        <section className="space-y-4 text-left">
          <p className="font-semibold">My practice exists to help founders:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Find mission-aligned champions who believe in your tech</li>
            <li>
              Translate pipeline into delivery plans engineers can actually
              build
            </li>
            <li>Craft sales promises product can actually keep</li>
            <li>Prepare your team for post-award execution</li>
            <li>Build a culture of internal ownership—not just external BD</li>
          </ul>
        </section>

        <section className="space-y-4 text-left">
          <p className="font-semibold">
            My approach is simple and execution-focused:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-semibold">6-Week Founder Bootcamp</span> to
              transform your vision into a deployable roadmap that&rsquo;s:
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Clarity-forged — Aligns strategy with execution rhythms</li>
                <li>
                  Execution-ready — Integrates with product, delivery, and team
                  workflows
                </li>
                <li>
                  Deployment-focused — Gets your capability downrange in months,
                  not years
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">90-Day Advisory Sprint</span> to
              align your team and accelerate execution with focused, embedded
              support
            </li>
            <li>
              <span className="font-semibold">Ongoing Partnership</span> that
              stays in lockstep with your mission as you grow
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-left">
          <p>
            Whether you&rsquo;re an early-stage founder facing the valley of
            death or a seasoned CTO trying to align product with pipeline, I
            help you shift from reactive scramble to deliberate success.
          </p>
          <p>
            If you&rsquo;re ready to move on from the chaos, build a culture of
            success, and lead with clarity—schedule a call.
          </p>
          <p className="font-semibold text-center">
            Let&rsquo;s get your tech where it belongs: in the hands of the
            warfighter.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <Button asChild>
            <a
              href="https://calendly.com/patrick-byrningplatform/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </Button>
        </div>
        <div className="text-center mt-4">
          <Link href="/">
            <span className="text-primary underline">&larr; Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
