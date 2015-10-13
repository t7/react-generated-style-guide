import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import '../source/css/reset.css'
import '../source/css/global.css'

import DataTable from '../source/components/data_table/template.js'
import Button from '../source/components/form_button/template.js'
import CheckboxListInline from '../source/components/form_checkbox_list_inline/template.js'
import CheckboxList from '../source/components/form_checkbox_list/template.js'
import Checkbox from '../source/components/form_checkbox/template.js'
import Input from '../source/components/form_input/template.js'
import RadioListInline from '../source/components/form_radio_list_inline/template.js'
import RadioList from '../source/components/form_radio_list/template.js'
import Radio from '../source/components/form_radio/template.js'
import Select from '../source/components/form_select/template.js'
import Textarea from '../source/components/form_textarea/template.js'
import TextDiv from '../source/components/form_textdiv/template.js'
import ImageFigure from '../source/components/image_figure/template.js'
import Image from '../source/components/image/template.js'
import Tabs from '../source/components/tabs/template.js'

ReactDOM.render(React.createElement(DataTable), document.getElementById('data_table_template'))
ReactDOM.render(React.createElement(Button), document.getElementById('form_button_template'))
ReactDOM.render(React.createElement(CheckboxListInline), document.getElementById('form_checkbox_list_inline_template'))
ReactDOM.render(React.createElement(CheckboxList), document.getElementById('form_checkbox_list_template'))
ReactDOM.render(React.createElement(Checkbox), document.getElementById('form_checkbox_template'))
ReactDOM.render(React.createElement(Input), document.getElementById('form_input_template'))
ReactDOM.render(React.createElement(RadioListInline), document.getElementById('form_radio_list_inline_template'))
ReactDOM.render(React.createElement(RadioList), document.getElementById('form_radio_list_template'))
ReactDOM.render(React.createElement(Radio), document.getElementById('form_radio_template'))
ReactDOM.render(React.createElement(Select), document.getElementById('form_select_template'))
ReactDOM.render(React.createElement(Textarea), document.getElementById('form_textarea_template'))
ReactDOM.render(React.createElement(TextDiv), document.getElementById('form_textdiv_template'))
ReactDOM.render(React.createElement(ImageFigure), document.getElementById('image_figure_template'))
ReactDOM.render(React.createElement(Image), document.getElementById('image_template'))
ReactDOM.render(React.createElement(Tabs), document.getElementById('tabs_template'))
