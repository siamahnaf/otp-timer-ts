# otp-timer-ts

A simple and customizable react otp timer component with typescript support. very simple and more customizable design and smallest bundle size about 13kb. You can use this component into any react and nextjs projects.

[![npm downloads](https://cdn.jsdelivr.net/gh/siamahnaf198/react-simple-phone-input@main/assets/downloads.svg)](https://www.npmjs.com/package/otp-timer-ts)
[![PRs Welcome](https://cdn.jsdelivr.net/gh/siamahnaf198/react-simple-phone-input@main/assets/prs-welcome.svg)](https://github.com/siamahnaf198/otp-timer-ts)
[![MIT licensed](https://cdn.jsdelivr.net/gh/siamahnaf198/react-simple-phone-input@main/assets/license.svg)](https://github.com/siamahnaf198/otp-timer-ts/blob/main/LICENSE)

- SSR Friendly
- Customizable
- Smallest Bundle Size(About 13kb)


## Installation

```shell-script
$ npm i otp-timer-ts --save
```

## Demo

<img src="https://res.cloudinary.com/dub0dpenl/image/upload/v1672334376/otp-timer-ts_f8ebe8.gif" alt="Girl in a jacket" width="250">

## Usage?

```
import { Otptimer } from "otp-timer-ts";

const Home = () => {
  const handleResend = () => {
    //desired function to be performed on clicking resend button
  }
  return (
    <div>
      <Otptimer minutes={0} seconds={5} onResend={handleResend} />
    </div>
  );
};

export default Home;


```

## Options

| name       |                           Description                           |  Default Value  |
| :--------- | :-------------------------------------------------------------: |  :-----------:  |
| seconds    |          number of seconds for which timer must be set          |       30        |
| minutes    |        number of minutes for which the timer must be set        |        0        |
| onResend     | function that would get triggered on clicking the resend button |       n/a       |
| text       |                content that you want to put down                |  Resend otp in  |
| ButtonText |                            button text                          |     Resend      |

## Styling

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerClass </td>
    <td> string </td>
    <td> timer Container class name </td>
  </tr>
  <tr>
    <td> textClass </td>
    <td> string </td>
    <td> text class name </td>
  </tr>
  <tr>
    <td> timerClass </td>
    <td> string </td>
    <td> timer class name </td>
  </tr>
  <tr>
    <td> buttonContainerClass </td>
    <td> string </td>
    <td> button container class </td>
  </tr>
  <tr>
    <td> buttonStyle </td>
    <td> CSSProperties </td>
    <td> styles for resend button </td>
  </tr>
  <tr>
    <td> buttonContainerStyle </td>
    <td> CSSProperties </td>
    <td> styles for resend button container </td>
  </tr>
  <tr>
    <td> textStyle </td>
    <td> CSSProperties </td>
    <td> styles for timer text </td>
  </tr>
</table>

## Issues

You are welcome to create an issue.

## Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Twitter - [https://twitter.com/siamahnaf198](https://twitter.com/siamahnaf198)
- Github - [https://github.com/siamahnaf198](https://github.com/siamahnaf198)

## License
otp-timer-ts is [MIT licensed](https://github.com/siamahnaf198/otp-timer-ts/blob/main/LICENSE).