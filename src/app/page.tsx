import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your tech. Downrange. Faster.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I help founders get mission-changing capability downrange in weeks,
            not years.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            Are You Doing the Work—But stuck in the Swamp?
          </h2>
          <ul className="text-left list-disc list-inside space-y-1 text-base md:text-lg mx-auto max-w-lg">
            <li>
              You&rsquo;ve built strong tech. You&rsquo;ve got a talented team.
              You believe in the mission.
            </li>
            <li>
              But when it comes to real traction, nothing&rsquo;s moving fast
              enough.
            </li>
            <li>Your go-to-market feels scattered.</li>
            <li>Your team is spinning in every direction.</li>
            <li>
              And deep down, you&rsquo;re wondering…
              <br />
              <span className="italic">
                &ldquo;Are we gonna survive the Valley of Death?&rdquo;
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            🔍 I Help Early-Stage Defense Tech Teams Break Through the Noise
          </h2>
          <p className="text-base md:text-lg">
            Most of my clients fall into one of two groups:
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-gray-50 rounded-lg p-4 flex-1">
              <div className="font-semibold flex items-center gap-2">
                🧪 Just launched
              </div>
              <div>
                You&rsquo;ve closed funding or shipped your first product—and
                need to focus fast.
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex-1">
              <div className="font-semibold flex items-center gap-2">
                🔄 Fighting to survive
              </div>
              <div>
                You&rsquo;ve built something great, but you&rsquo;re hitting a
                wall—and wondering what needs to change.
              </div>
            </div>
          </div>
          <p className="text-base md:text-lg">
            Either way, you&rsquo;re looking to shift from effort to impact.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            💡 Here&rsquo;s How We Get You There:
          </h2>
          <ol className="text-left list-decimal list-inside space-y-2 max-w-xl mx-auto text-base md:text-lg">
            <li>
              <span className="font-semibold">
                1 - Start with a Clarity Conversation
              </span>
              <br />
              We talk through your company, your team, and who you serve. No
              pressure—just a real conversation to see if there&rsquo;s a fit.
            </li>
            <li>
              <span className="font-semibold">
                2 - Deep Discovery with Leadership
              </span>
              <br />
              We run three focused sessions with your CEO, CTO, and Growth
              Leader. We go deep on vision, velocity, and goals to discover the
              challenges, fears and frustrations holding your team back.
              Together, we align on what success really looks like 90 days out.
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                3 - Full-Spectrum Assessment
              </span>
              <br />I combine what I learn with research and competitive insight
              to assess your position across 8 key defense-tech levers (like
              product-mission fit, GTM readiness, and strategic alignment).
            </li>
            <li>
              <span className="font-semibold">
                Together, We Co-Create Your Roadmap
              </span>
              <br />
              We build a simple plan that connects your vision to:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>🎯 Target customers</li>
                <li>🛠️ Right DoD channels</li>
                <li>📈 Clear signals of progress</li>
              </ul>
              <span>
                If I&rsquo;m not the right fit for your journey, I&rsquo;ll
                connect you to someone who is.
              </span>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            ✅ What Success Looks Like:
          </h2>
          <ul className="text-left list-disc list-inside space-y-1 max-w-xl mx-auto text-base md:text-lg">
            <li>10x more clarity on what matters</li>
            <li>Messaging that resonates</li>
            <li>An aligned team, moving with velocity</li>
            <li>A focused GTM plan—built to win</li>
          </ul>
          <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700">
            &ldquo;Our tech finally feels like it has a path to the
            warfighter.&rdquo;
            <br />
            <span className="not-italic font-medium">
              &mdash; Actual client result
            </span>
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            ⚠️ What&rsquo;s at Stake?
          </h2>
          <p className="text-base md:text-lg">
            You&rsquo;re solving a real problem for the mission.
            <br />
            But if your team stays misaligned, and your strategy stays
            fuzzy—your window to make impact will close.
            <br />
            We can change that.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            Let&rsquo;s Get Started
          </h2>
          <p className="text-base md:text-lg">
            Book a 30-minute Discovery Session
            <br />
            No sales pitch—just focus, insight, and a clear next step.
          </p>
          <Button className="mt-2 text-lg px-8 py-4" asChild>
            <a
              href="https://calendly.com/patrick-byrningplatform/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Schedule a Session Now
            </a>
          </Button>
        </section>

        <section className="space-y-4 text-sm text-gray-500 mt-8">
          <div className="font-semibold">
            🧭 Built for Founders. Focused on the Mission.
          </div>
          <p>
            I&rsquo;ve helped some of the most mission-driven defense tech teams
            find clarity, get aligned, and get their tech into the hands of
            those who need it.
            <br />
            You don&rsquo;t need another framework. You need a partner who
            understands the space—and can help you turn potential into progress.
            <br />
            Let&rsquo;s Get Your Tech Where It Belongs, In the Hands of the
            Warfighter
          </p>
        </section>
      </div>
    </main>
  );
}
