# Zap

<p align='center'>
  <a href='https://zap.jackmallers.com'>
    <img src='https://imgur.com/svn8Jrw.jpg' alt='screenshot' />
  </a>
</p>

> Lightning wallet focused on user experience and ease of use ⚡️

[![dependencies Status](https://david-dm.org/LN-Zap/zap-desktop/status.svg)](https://david-dm.org/LN-Zap/zap-desktop)
[![Build Status](https://travis-ci.org/LN-Zap/zap-desktop.svg?branch=master)](https://travis-ci.org/LN-Zap/zap-desktop)
[![Coverage Status](https://coveralls.io/repos/github/LN-Zap/zap-desktop/badge.svg?branch=master)](https://coveralls.io/github/LN-Zap/zap-desktop?branch=master)
[![GitHub license](https://img.shields.io/github/license/LN-Zap/zap-desktop.svg)](LICENSE)

Zap is a free Lightning Network wallet focused on user experience and ease of use, with the overall goal of helping the cryptocurrency community scale Bitcoin and other cryptocurrencies.

The UI for Zap is created using
[Electron](https://electron.atom.io/) + [React](https://facebook.github.io/react/) + [Redux](https://github.com/reactjs/redux/tree/master/docs).

We have an active [slack][slack] channel where you can join the discussion on development, design and product.

## Table of Contents

- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Advanced Usage](#advanced-usage)
- [Get Help](#get-help)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Security

If you discover or learn about a potential error, weakness, or threat that can compromise the security of Zap, we ask you to keep it confidential and [submit your concern directly to the Zap security team](mailto:jimmymowschess@gmail.com?subject=[GitHub]%20Zap%20Security).

## Install

Download the [latest release][releases] for your appropriate OS and follow the instructions below.

### macOS

Once you have the .tar.gz file downloaded, simply **double click** on the file to unzip.

Navigate to the newly extracted folder, then drag-and-drop the `Zap.app` file to the `Applications` folder.

Unmount the image and navigate to `Applications` folder.

Finally, **double click** on the `Zap.app` file.

### Windows

Once you have the .exe file downloaded, simply **double click** on the file.

### Linux

Once you have the .zip file downloaded, simply **double click** the file to unzip or run the following command:

```bash
unzip file.zip
```

You have the option to either install Zap through the [.deb](#.deb-file) or [.AppImage](#.appimage-file) files.

#### .deb File

Once you have the .deb file extracted, you can install Zap by **double clicking** on the file or through the `dpkg` command:

```bash
sudo dpkg -i file.deb
```

If this is your first time installing zap, you may have some unmet dependencies. This can be resolved with the following command:

```bash
sudo apt-get -f install
```

To run Zap you can either navigate through the GUI or run the following command:

```bash
zap-desktop
```

#### .AppImage File

Once you have the .AppImage file extracted, you can either **double click** the file or by running in the cli:

```bash
./file.AppImage
```

## Advanced Usage

If you would like to install from source, run a full bitcoin node, or connect to a custom lnd instance please see the [advanced usage](ADVANCED.md) page.

## Get Help

If you are having problems with Zap, please report the issue in [GitHub][issues] or on [slack][slack] with screenshots and/or how to reproduce the bug/error.

A good product not only has good software tests but also checks the quality of the UX/UI. Putting ourselves in the shoes of a user is a very important design principle of Zap.

## Maintainers

- [Jack Mallers (@JimmyMow)](https://github.com/JimmyMow)
- [Ben Woosley (@Empact)](https://github.com/Empact)

## Contribute

Hey! Do you like Zap? Awesome! We could actually really use your help!

Open source isn't just writing code. Zap could use your help with any of the following:

- Finding (and reporting!) bugs
- New feature suggestions
- Answering questions on issues
- Documentation improvements
- Reviewing pull requests
- Helping to manage issue priorities
- Fixing bugs/new features

If any of that sounds cool to you, feel free to dive in! [Open an issue][issues] or submit a pull request.

If you would like to help contribute to the project, please see the [Contributing Guide](CONTRIBUTING.md)

This project exists thanks to all the people who contribute.

[<img alt="JimmyMow" src="https://avatars2.githubusercontent.com/u/4040039?v=4&s=64" width="64">](https://github.com/JimmyMow)[<img alt="Empact" src="https://avatars2.githubusercontent.com/u/5470?v=4&s=64" width="64">](https://github.com/Empact)[<img alt="jackmallers" src="https://avatars3.githubusercontent.com/u/30220954?v=4&s=64" width="64">](https://github.com/jackmallers)[<img alt="mrfelton" src="https://avatars0.githubusercontent.com/u/200251?v=4&s=64" width="64">](https://github.com/mrfelton)[<img alt="VonIobro" src="https://avatars2.githubusercontent.com/u/61939?v=4&s=64" width="64">](https://github.com/VonIobro)[<img alt="joaodealmeida" src="https://avatars3.githubusercontent.com/u/5623455?v=4&s=64" width="64">](https://github.com/joaodealmeida)[<img alt="helgabutters" src="https://avatars2.githubusercontent.com/u/8001978?v=4&s=64" width="64">](https://github.com/helgabutters)[<img alt="odb366" src="https://avatars3.githubusercontent.com/u/14116101?v=4&s=64" width="64">](https://github.com/odb366)[<img alt="pajasevi" src="https://avatars3.githubusercontent.com/u/2407408?v=4&s=64" width="64">](https://github.com/pajasevi)[<img alt="jimpo" src="https://avatars3.githubusercontent.com/u/881253?v=4&s=64" width="64">](https://github.com/jimpo)[<img alt="NahomAgidew" src="https://avatars2.githubusercontent.com/u/11695305?v=4&s=64" width="64">](https://github.com/NahomAgidew)[<img alt="DataCourier" src="https://avatars1.githubusercontent.com/u/35670446?v=4&s=64" width="64">](https://github.com/DataCourier)[<img alt="tbloncar" src="https://avatars1.githubusercontent.com/u/2092395?v=4&s=64" width="64">](https://github.com/tbloncar)[<img alt="waseem999" src="https://avatars3.githubusercontent.com/u/17360809?v=4&s=64" width="64">](https://github.com/waseem999)[<img alt="dfattlar" src="https://avatars3.githubusercontent.com/u/4843270?v=4&s=64" width="64">](https://github.com/dfattlar)[<img alt="jtarre" src="https://avatars1.githubusercontent.com/u/1143894?v=4&s=64" width="64">](https://github.com/jtarre)[<img alt="dimitris-t" src="https://avatars1.githubusercontent.com/u/8949706?v=4&s=64" width="64">](https://github.com/dimitris-t)[<img alt="thinkjanis" src="https://avatars1.githubusercontent.com/u/31632325?v=4&s=64" width="64">](https://github.com/thinkjanis)[<img alt="fresheneesz" src="https://avatars3.githubusercontent.com/u/149531?v=4&s=64" width="64">](https://github.com/fresheneesz)[<img alt="funyug" src="https://avatars2.githubusercontent.com/u/8094201?v=4&s=64" width="64">](https://github.com/funyug)

## License

This project is open source under the MIT license, which means you have full access to the source code and can modify it to fit your own needs. See [LICENSE](LICENSE) for more information.

[MIT](LICENSE) © Jack Mallers

[issues]: https://github.com/LN-Zap/zap-desktop/issues
[releases]: https://github.com/LN-Zap/zap-desktop/releases
[slack]: https://join.slack.com/t/zaphq/shared_invite/enQtMzgyNDA2NDI2Nzg0LTQwZWQ2ZWEzOWFhMjRiNWZkZWMwYTA4MzA5NzhjMDNhNTM5YzliNDA4MmZkZWZkZTFmODM4ODJkYzU3YmI3ZmI
