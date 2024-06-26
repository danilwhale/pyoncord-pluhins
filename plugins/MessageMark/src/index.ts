import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";
import { DEFAULT_FORMAT, insertWatermarkInMessage } from "./utils/formatter";
import { before, unpatchAll } from "./utils/patching_shit";

if (!storage.watermark) storage.watermark = DEFAULT_FORMAT

before("sendMessage", findByProps("sendMessage", "receiveMessage"), (args) => insertWatermarkInMessage(args[1]))
before("uploadLocalFiles", findByProps("uploadLocalFiles"), (args) => insertWatermarkInMessage(args[0].parsedMessage))

export const onUnload = () => unpatchAll()

export { default as settings } from "./Settings"