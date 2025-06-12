import FormAsyncSelect from './FormAsyncSelect';
import { FormBody } from './FormBody';
import { FormCheckbox } from './FormCheckbox';
import { FormControl } from './FormControl';
import { FormDateInput } from './FormDateInput';
import { FormError } from './FormError';
import { FormFieldset } from './FormFieldset';
import { FormFooter } from './FormFooter';
import { FormFooterSection } from './FormFooterSection';
import { FormInputPassword } from './FormInputPassword';
import { FormInputTelefone } from './FormInputTelefone';
import { FormInputText } from './FormInputText';
import { FormMaskInput } from './FormMaskInput';
import { FormRoot } from './FormRoot';
import { FormSelect } from './FormSelect';
import { FormSeparator } from './FormSeparator';
import { FormSubmitButton } from './FormSubmitButton';
import { FormTextarea } from './FormTextarea';

export const Form = {
  Root: FormRoot,
  Body: FormBody,
  Footer: FormFooter,
  FooterSection: FormFooterSection,
  Fieldset: FormFieldset,
  Control: FormControl,
  Error: FormError,
  Separator: FormSeparator,

  InputText: FormInputText,
  InputPassword: FormInputPassword,
  Select: FormSelect,
  AsyncSelect: FormAsyncSelect,
  MaskInput: FormMaskInput,
  DateInput: FormDateInput,
  TelefoneInput: FormInputTelefone,
  Checkbox: FormCheckbox,
  Textarea: FormTextarea,

  Submit: FormSubmitButton,
};
