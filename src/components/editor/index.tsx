/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react'
import EditorJs, { OutputData } from '@editorjs/editorjs'
import { Button, Card } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

const Table = require('@editorjs/table')
const Paragraph = require('@editorjs/paragraph')
const List = require('@editorjs/list')
const Warning = require('@editorjs/warning')
const Code = require('@editorjs/code')
const LinkTool = require('@editorjs/link')
const Image = require('@editorjs/image')
const Raw = require('@editorjs/raw')
const Header = require('@editorjs/header')
const Quote = require('@editorjs/quote')
const Marker = require('@editorjs/marker')
const CheckList = require('@editorjs/checklist')
const Delimiter = require('@editorjs/delimiter')
const InlineCode = require('@editorjs/inline-code')
const SimpleImage = require('@editorjs/simple-image')
const Embed = require('@editorjs/embed')

export const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}

export const Editor: React.FC = () => {
  const [editorData, setEditorData] = useState<OutputData>()
  const holder = 'editor-js'
  const editorjs = new EditorJs({ tools, holder })
  const onSave = () => {
    editorjs.save().then(value => {
      setEditorData(value)
    })
  }
  return (
    <>
      <Card title="エディタ">
        <div id={holder} />
        <Button type="primary" onClick={onSave}>
          save
        </Button>
      </Card>
      <Card title="JSONデータ">
        <TextArea rows={14} value={JSON.stringify(editorData?.blocks)} />
      </Card>
    </>
  )
}
