// Import individual files.
import alphanumeric from './_alphanumeric'
import convertContentEditable from './_convert_content_editable'
import convertContentFocus from './_convert_content_focus'
import convertOnPaste from './_convert_on_paste'
import convertToMarkup from './_convert_to_markup'
import convertToText from './_convert_to_text'
import exists from './_exists'
import log from './_log'
import markdown from './_markdown'
import navigate from './_navigate'
import parseFormData from './_parse_form_data'
import placeholder from './_placeholder'
import regex from './_regex'
import save from './_save'
import stop from './_stop'
import storage from './_storage'
import title from './_title'
import today from './_today'
import trim from './_trim'
import unique from './_unique'

// Bundle up methods.
const utils = {
  alphanumeric: alphanumeric,
  convertContentEditable: convertContentEditable,
  convertContentFocus: convertContentFocus,
  convertOnPaste: convertOnPaste,
  convertToMarkup: convertToMarkup,
  convertToText: convertToText,
  exists: exists,
  log: log,
  markdown: markdown,
  navigate: navigate,
  parseFormData: parseFormData,
  placeholder: placeholder,
  regex: regex,
  save: save,
  stop: stop,
  storage: storage,
  title: title,
  today: today,
  trim: trim,
  unique: unique
}

// Expose object.
export default utils
