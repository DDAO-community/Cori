import { Event } from "../structures/Event";
import { client } from "..";
import { logger } from "ethers";

export default new Event("ready", async () => {
    logger.info(`🎉 Ready! Logged in as ${client.user.tag}.`);
});
