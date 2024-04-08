import { storage } from "@vendetta/plugin";
import { Message } from "./def";

export const DEFAULT_WATERMARK = "Sent from Pyoncord"

export function getWatermark(): string {
    return storage.watermark.length < 1
        ? DEFAULT_WATERMARK
        : storage.watermark
}

export function insertWatermarkInMessage(message: Message): void {
    message.content = insertWatermarkInText(message.content)
}

export function insertWatermarkInText(text: string): string {
    if (storage.insertAfter)
        return text + "\n" + getWatermark()
    else
        return getWatermark() + "\n" + text
}