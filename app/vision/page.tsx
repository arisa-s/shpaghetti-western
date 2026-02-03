import NavHeader from "@/components/NavHeader";
import SwPageWrapper from "../../components/SwPageWrapper";
import SwHeader from "../../components/SwHeader";
import PageSection from "@/components/PageSection";

export default function Vision() {
  return (
    <>
      <NavHeader />
      <SwPageWrapper>
        <div className="space-y-8 font-sf">
          <SwHeader>The Vision</SwHeader>

          <PageSection title="Pioneering Angels">
            <p>
              Based in Texas, filmed in Texas, this is a story about pioneering
              women funded by pioneering women.
            </p>
            <p>
              Set in Texas, filmed in Texas, we have begun to garner support
              from a network of global female investors. The first stage,
              development, is complete and we are armed with an original script,
              a Texas‑based production strategy, and original music by Grammy
              award‑winning Rhiannon Giddens.
            </p>
          </PageSection>

          <PageSection title="Female Frontier Film Fund">
            <p>
              After the film Spaghetti Western is released, it will not only
              serve an audience hungry for women‑led storytelling but blaze a
              trail. To pay it forward, the Female Frontier Film Fund will be
              created in the wake of Spaghetti Western&apos;s success. It&apos;s
              our Happily Ever After — creating opportunities for more women to
              finance bold, imaginative works and change the world with their
              visions.
            </p>
          </PageSection>

          <PageSection>
            <p>
              Spaghetti Western is an urgent and fresh retelling of the Wild
              West, celebrating trailblazing women and how food and the breaking
              of bread ignited souls and nourished a community in the face of
              adversity.
            </p>
          </PageSection>

          <PageSection>
            <p>
              Spaghetti Western&apos;s strength is its female investors. Whoever
              funds a film decides what stories are worth telling and how they
              are told. This is the ultimate power. Stories are medicine, they
              are hope and they guide our way. For true storytelling liberation,
              women investors need to fund women creators.
            </p>
            <p>
              With this approach, we are taking angel investment back to its
              roots — born on Broadway, when early patrons started supporting
              the arts not just for profit but for possibility — to reclaim the
              power of storytelling.
            </p>
          </PageSection>
        </div>
      </SwPageWrapper>
    </>
  );
}
