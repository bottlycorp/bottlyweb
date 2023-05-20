import { redirect } from "@sveltejs/kit";

export const GET = (): Response => {
  throw redirect(302, "https://buy.stripe.com/cN228B0tr6ru5zifYY");
};