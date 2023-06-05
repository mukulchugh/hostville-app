import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Script from "next/script";

export const dynamic = "force-dynamic";

const Home = async ({ searchParams }) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Script src="//code.tidio.co/khswrpsfp6chjnwxb0wvlbybfjzgezjs.js" async />
      <Container>
        <section>
          <h1 className="font-bold text-2xl py-6 mt-12">Stays</h1>
          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
          >
            {listings.map((listing) => {
              if (listing.category !== "Experiences") {
                return (
                  <ListingCard
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                  />
                );
              }
              return null; // Skip rendering for listings with the category "Experiences"
            })}
          </div>
        </section>
        <section>
          <h1 className="font-bold text-2xl py-6 mt-12">Experiences</h1>
          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
          >
            {listings
              .filter((listing) => listing.category === "Experiences")
              .map((listing) => (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              ))}
          </div>
        </section>
      </Container>
    </ClientOnly>
  );
};

export default Home;
