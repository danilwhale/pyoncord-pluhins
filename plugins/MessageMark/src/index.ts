import { storage } from "@vendetta/plugin";
import { before, unpatchAll } from "./whatthefuckisthis";
import { findByProps } from "@vendetta/metro";
import { Message } from "./def";
import { insertWatermarkInMessage } from "./watermarker";

if (!storage.watermark) storage.watermark = "Sent from Pyoncord"
if (!storage.insertAfter) storage.insertAfter = true

before("sendMessage", findByProps("sendMessage", "receiveMessage"), (args) => insertWatermarkInMessage(args[1]))
before("uploadLocalFiles", findByProps("uploadLocalFiles"), (args) => insertWatermarkInMessage(args[0].parsedMessage))

export const onUnload = () => unpatchAll()

export { default as settings } from "./Settings"