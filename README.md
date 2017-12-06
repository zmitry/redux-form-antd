# react-final-form-antd
[![NPM Downloads](https://img.shields.io/npm/dm/react-final-form-antd.svg?style=flat)](https://www.npmjs.com/package/react-final-form-antd)
---
[`react-final-form-antd`](https://github.com/sophilabs-forks/react-final-form-antd) is a set of
wrappers to facilitate the use of antd components with
[`react-final-form`](https://github.com/final-form/react-final-form).

---

## [Live Demo](http://sophilabs-forks.github.io/react-final-form-antd/index.html) :eyes:

## Installation

Using yarn:

```bash
  $ yarn add react-final-form-antd
```

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save react-final-form-antd
```

## Available Components

- Select
- Radio Buttons
- DatePicker
- MonthPicker
- NumberField
- TextField

## Usage

Rather than import your component class from `antd`, import it from `react-final-form-antd`
and then pass the component class directly to the `component` prop of `Field`.

```js
import { Form, Field } from 'react-final-form'
import {
  SelectField,
  TextField,
} from 'react-final-form-antd'

class MyForm extends Component {
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form>
            <Field name="username" component={TextField} hintText="Street"/>
          </form>
        )}
      />
    );
  }
}

export default MyForm
```
or you can check stories code [click](https://github.com/sophilabs-forks/react-final-form-antd/blob/master/stories/TextInput.js)

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

Inspired by redux-form-material-ui by [ericas](https://github.com/erikras/redux-form-material-ui)

Forked from redux-form-antd by [zherebko dmitry](https://github.com/zhDmitry/redux-form-antd)
