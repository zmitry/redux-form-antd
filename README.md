# redux-form-antd
This is  bindings for redux form and redux form antd.
This library should be compatible for both redux-form and react-final-form.
Stories for final form are welcome.

[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-antd.svg?style=flat)](https://www.npmjs.com/package/redux-form-antd)
---
[`redux-form-antd`](https://github.com/zhdmitry/redux-form-antd) is a set of
wrappers to facilitate the use of antd components with
[`redux-form`](https://github.com/erikras/redux-form).

---

## [Live Demo](http://zmitry.github.io/redux-form-antd) :eyes:

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save redux-form-antd
```

## Available Components

- Select
- Radio Buttons
- DatePicker
- MonthPicker
- NumberField
- TextField
## Usage

Rather than import your component class from `antd`, import it from `redux-form-antd`
and then pass the component class directly to the `component` prop of `Field`.

```js
import { reduxForm, Field } from 'redux-form'
import {
  SelectField,
  TextField,
} from 'redux-form-antd'

class MyForm extends Component {
  render() {
    return (
      <form>
        <Field name="username" component={TextField} placeholder="Street"/>
      </form>
    )
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: 'myForm'
})(MyForm)

export default MyForm
```
or you can check stories code [click](https://github.com/zhDmitry/redux-form-antd/blob/master/stories/TextInput.js)
## Instance API

#### `getRenderedComponent()`

Returns a reference to the UI component that has been rendered. This is useful for
calling instance methods on the UI components. For example, if you wanted to focus on
the `username` element when your form mounts, you could do:

```js
componentWillMount() {
  this.refs.firstField    
    .getRenderedComponent() 
    .focus()                
}
```

as long as you specified a `ref` and `withRef` on your `Field` component.

```js
render() {
  return (
    <form>
      ...
      <Field name="username" component={TextField} withRef ref={r=>(this.textField = r)}/>
      ...
    </form>
  )
}
```

## Custom component wrapper
You can use `createComponent` and `customMap` functions to wrap your custom component. 
Usage example:

```js
import { createComponent, customMap } from 'redux-form-antd';
import { InputPasswordViewableComponent } from './components/InputPasswordViewableComponent'; // Your custom component

function mapFunction(mapProps, { input: { onChange } }) {
  return {
    ...mapProps,
    onChange: event => onChange(event.nativeEvent.target.value)
  };
}
const textFieldMap = customMap(mapFunction);

export const InputPasswordViewable = createComponent(InputPasswordViewableComponent, textFieldMap);
```

* `createComponent` creates FormItem wrapper and attaches validate status handler.
* `customMap` maps redux-form [Field props](https://redux-form.com/7.2.3/docs/api/field.md/#props) 
to ant.design [form fields props](https://ant.design/components/form/#components-form-demo-validate-static).
You can omit customMap's attribute, in such case default mapping will be applied. 
If you specify a map function, then it should return an object with required 
properties for ant's FormItem and your component. The signature of map function 
is `(mapProps, props) => ({...mapProps})`, where `mapProps` - default mapping 
properties, `props` - redux-form's Field properties.

---
inspired by redux-form-material-ui by [erikras](https://github.com/erikras/redux-form-material-ui)
