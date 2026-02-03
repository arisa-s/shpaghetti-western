import NavHeader from "@/components/NavHeader";
import SwPageWrapper from "../../components/SwPageWrapper";
import SwHeader from "../../components/SwHeader";
import PageSection from "@/components/PageSection";
import QuoteBlock from "@/components/QuoteBlock";

export default function Investment() {
  return (
    <>
      <NavHeader />
      <SwPageWrapper>
        <div className="space-y-8 font-sf">
          <SwHeader>Spaghetti Western Investment Opportunity</SwHeader>

          <PageSection>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              The Journey
            </p>
            <QuoteBlock author="Calamity Jane">
              “I figure if a girl wants to be a legend, she should just go ahead
              and be one.”
            </QuoteBlock>
          </PageSection>

          <PageSection title="Where We Are">
            <p>
              Now, we need investment to greenlight the production and, as of
              the new year, we are already{" "}
              <span className="font-semibold text-maroon">
                one third of the way there
              </span>
              .
            </p>
            <p className="font-bold">
              It only takes a handful of pioneering women to make things happen
              and break the status quo wide open.
            </p>
          </PageSection>

          <PageSection title="The Ask">
            <p>
              We are asking female investors to jump on the wagon with us,
              blazing a new trail to create a feminist, foodie film, Spaghetti
              Western.
            </p>
          </PageSection>

          <PageSection title="What You Get">
            <p>
              As a patron, you&apos;ll have a{" "}
              <span className="font-semibold">front-row seat</span> throughout
              the creative, financing, and production process — and in some
              cases a chance to appear in the actual film.
            </p>
            <p>
              More powerfully, you&apos;ll be part of a{" "}
              <span className="font-semibold text-maroon">
                cinematic revolution
              </span>{" "}
              — one led by women, changing the way stories are funded, made, and
              told. In turn, our film benefits from the insights and expertise
              of our investors along the way.
            </p>
          </PageSection>

          <PageSection title="For First-Time Film Investors">
            <p>
              For many this may be a first experience as film investors, and it
              is important to us that it is a positive one: a chance for women
              to gain knowledge about the film industry and feel empowered to
              pave the way for more women to step into this space. Again, and
              again.
            </p>
            <p className="font-bold">
              We want to create a strong community around this intimate group of
              pioneering angels.
            </p>
          </PageSection>

          <PageSection title="Get In Touch" className="pt-4">
            <p>
              To understand more about the process, we welcome you to schedule a
              Zoom meeting with our producers:
            </p>
            <a
              href="mailto:DianaPhillips@rimsky.uk.com"
              className=" text-maroon underline decoration-2 underline-offset-4"
            >
              DianaPhillips@rimsky.uk.com
            </a>
          </PageSection>
        </div>
      </SwPageWrapper>
    </>
  );
}
