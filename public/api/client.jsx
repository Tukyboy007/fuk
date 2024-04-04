import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "pr9z5y3j",
  dataset: "production",
  useCdn: false,
});

export default client;
