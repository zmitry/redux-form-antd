# redux-form-antd
This is antd bindings for redux form and redux form antd.
This library should be compatible for both redux-form and react-final-form.
Stories for final form are welocome.

[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-antd.svg?style=flat)](https://www.npmjs.com/package/redux-form-antd)
---
[`redux-form-antd`](https://github.com/zhdmitry/redux-form-antd) is a set of
wrappers to facilitate the use of antd components with
[`redux-form`](https://github.com/erikras/redux-form).

---

## [Live Demo](http://zhdmitry.github.io/redux-form-antd) :eyes:

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
        <Field name="username" component={TextField} hintText="Street"/>
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

---
inspired by redux-form-material-ui by [ericas](https://github.com/erikras/redux-form-material-ui)
