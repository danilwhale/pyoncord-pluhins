import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { Forms, General } from "@vendetta/ui/components";
import React from "react";
import { DEFAULT_FORMAT, formatText } from "./utils/formatter";
import { findByProps } from "@vendetta/metro";

const { FormDivider, FormInput, FormRadioRow, FormRow } = Forms;
const { ScrollView } = General;
const { TableRowGroup } = findByProps("TableRow")

export default () => {
    useProxy(storage)

    return (
        <ScrollView style={{ margin: 20 }}>
            <TableRowGroup title="Configuration">
                <FormRow 
                    label="Watermark format"
                    subLabel="$1 will be replaced with your message!" />
                <FormInput
                    multiline
                    placeholder={"ex. " + DEFAULT_FORMAT}
                    onChange={(text: string) => storage.watermark = text}
                    value={storage.watermark} 
                    style={{ marginLeft: 10, marginRight: 10 }}/>

            </TableRowGroup>

            <TableRowGroup title="Preview">
                <FormRow
                    label={formatText("meow")}/>
            </TableRowGroup>
        </ScrollView>
    )
}