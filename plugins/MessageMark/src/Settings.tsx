import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { Forms, General } from "@vendetta/ui/components";
import React from "react";
import { DEFAULT_WATERMARK, insertWatermarkInText } from "./watermarker";
import { useThemedColor } from "./whatthefuckisthis";
import { findByProps } from "@vendetta/metro";

const { FormDivider, FormInput, FormRadioRow, FormRow } = Forms;
const { ScrollView } = General;
const { TableRowGroup } = findByProps("TableRow")

export default () => {
    useProxy(storage)

    return (
        <ScrollView style={{ margin: 20 }}>
            <TableRowGroup title="Configuration">
                <FormRow label="Watermark text" />
                <FormInput
                    multiline
                    placeholder={DEFAULT_WATERMARK}
                    onChange={(text: string) => storage.watermark = text}
                    value={storage.watermark} 
                    style={{ marginLeft: 10, marginRight: 10 }}/>
                
                <FormDivider/>

                <FormRow label="Watermark position" />

                <FormRadioRow 
                    label="Before message content"
                    selected={!storage.insertAfter}
                    onPress={() => storage.insertAfter = false}/>
                
                <FormRadioRow 
                    label="After message content"
                    selected={storage.insertAfter}
                    onPress={() => storage.insertAfter = true}/>

            </TableRowGroup>

            <TableRowGroup title="Preview">
                <FormRow
                    style={{
                        margin: 10,
                        padding: 15,
                        borderRadius: 20,
                        backgroundColor: useThemedColor("BACKGROUND_MESSAGE_HOVER")
                    }} 
                    label={insertWatermarkInText("meow")}/>
            </TableRowGroup>
        </ScrollView>
    )
}