# How to use elements

**This is a set of instructions on how to properly use element components in this directory for reusability purposes. Please make sure you understand each component API before implementing.**

**Please make sure you keep this documentation up to date with any adjustments, enhancements or additions of new elements to avoid any misuse.**

## TextField

Input field components, consisting of an input label and a field.

**Required properties:**

| Property          |   Type    | Required | Description                                                                                                                                   |
| :---------------- | :-------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputLabel`      | `string`  | &#10003; | The label of the input                                                                                                                        |
| `inputType`       | `string`  | &#10003; | Type of the input, must be a valid [HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) |
| `isPasswordField` | `boolean` |          | If used, input will be password type which is masked and has icon elements                                                                    |

**Visuals:**

![TextField examples](https://user-images.githubusercontent.com/49572628/71326746-7a7b0680-24cd-11ea-9966-319be0b1f832.png)
