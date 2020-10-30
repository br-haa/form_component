# Form Controller

plug in for the full form

## Example

<Demo componentName="examples-form-controller-doc" />

## Source Code
 
<SourceCode>
<<< @/src/components/0_form_controller/FormController.vue
</SourceCode>


## props
loadForm: Boolean - controls a v-if of the entire controller for multi form situations.
`:load-form='true'`

FormType: Number - switches from type.
`:form-type='1'`
 
FormReactor: String - The CTM Form reactor string.
 `:form-reactor="'string in here'"`
 
Bjn: String - The CTM Form BJN.
 `:bnj="'12345678'"`
 
AddFields: Array - The way to add custom  fields.
`:add-fields='[{placeholder: 'address', id: 'address', NotRequired: true,}]'`

AddDropdowns: Array - The way to add custom dropdowns.
`:add-dropdowns="[ placeholder: 'test', options:[{name:'1'},{name:'2'},{name:'3'}], id:'DropDownExample'}]"`
 
ButtonText: String - Change Button Text.
`:button-text="'Click ME'"`
 
CtaText: String - Add Text above the form. Usually helpful in modal situations.
`:cta-text="'Contact Us Now!'"`
 
ClientLink: String - the link displayed in the thank-you page.
 `:client-link="'test.com'"`
 
IsModal: Boolean - Controls if form is a modal or not. 
 `:is-modal="true"`
 
PostValues: Array - Adds objects from array to the values posted by form. 

consent: Boolean - Controls weather the consent box is shown.
`:consent="false"` 

inline: Boolean - By passes form grid to make it all inline.
`:inline="true"`

ZapPost: String - Takes Zappier webhook string and posts values there as well.
 
FormTest: Boolean - Will stop form from posting.
`:form-test="true"`

Hsla: Object - will change color of form parts with color.
`:hsla='{hue: 220, saturation: 100, lightness: 50, alpha: 1}'` *pending change to abbreviations*

accentSkew: Number - Will multiply the number you give with the hue value of hsla.
`:accent-skew="1.85"`
