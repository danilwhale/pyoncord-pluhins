import { storage } from "@vendetta/plugin";
import { Message } from "./def";

export const DEFAULT_FORMAT = "> Sent from Pyoncord\n$1"

export function getFormat(): string {
    return storage.watermark.length < 1
        ? DEFAULT_FORMAT
        : storage.watermark
}

export function insertWatermarkInMessage(message: Message): void {
    message.content = formatText(message.content)
}

export function formatText(text: string): string {
    return getFormat().replaceAll("$1", text)
}