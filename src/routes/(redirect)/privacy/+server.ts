import { redirect } from "@sveltejs/kit";

export const GET = (): Response => {
  throw redirect(302, "https://discord.com/channels/1076863331517874240/1109481213502173295/1109483032185929890");
};