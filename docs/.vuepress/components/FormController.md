# Form Controller

plug in for the full form

## Example

<Demo componentName="examples-form-controller-doc" />

## Source Code
 
<SourceCode>
<<< @/src/components/0_form_controller/FormController.vue
</SourceCode>


## props
loadForm: Boolean - controls a v-if of the entire controller for multi form situations

FormType: Number - switches from type
 
FormReactor: String - The CTM Form reactor string
 
Bjn: String - The CTM Form BJN 
 
AddFields: Object - The way to add custom  fields EXAMPLE `[{placeholder: 'address', id: 'address', NotRequired: true,}]`
 
ButtonText: String - Change Button Text
 
CtaText: String - Add Text above the form. Usually helpful in modal situations.
 
ClientLink: String - the link displayed in the thank-you page.
 
IsModal: Boolean - Controls if form is a modal or not.
 
PostValues: Replaces Vuex store as the object that populates the extra post values.

consent: Boolean - Controls weather the consent box is shown.
 
inline: Boolean - By passes form grid to make it all inline.

ZapPost: String - Takes Zappier webhook string and posts values there as well.
 
FormTest: Boolean AND BROKEN FOR SOME REASON- __Should__ make the form not post when active but idk why its not working rn.