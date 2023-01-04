<div align="center">
  <br>
  <img alt="BlogHive" src="./apps/client/public/logo-text-black-1.png" width="300px">
  <h2>Where Bloggers Grow Together</h2>
  <strong>A community-driven platform for bloggers to improve their skills and connect with like-minded individuals</strong>
</div>

---

## :vertical_traffic_light: Status

🚧 **In Development** 🚧

BlogHive is currently _early_ in the development cycle. This app is
not yet functional but is being actively developed. Please "watch" the project and leave a star and help us build this platform.

## :bulb: Features

- Article review: Allow users to submit their articles for feedback from the community.
- Writing prompts: Provide users with inspiration and motivation to write by offering a selection of writing prompts.
- Community chat: Enable users to connect and communicate with each other through a community chat feature.
- Blogging resources: Offer a library of resources for bloggers, such as tips on writing, editing, and publishing.
- Blogging goals: Allow users to set and track their blogging goals, and offer support and encouragement to help them achieve their objectives.

---

<details>
  <summary><h2 style="display:inline;"> Project Structure</h2></summary>

```bash
.
├── apps
│   ├── client
│   │   ├── next.config.js
│   │   ├── next-env.d.ts
│   │   ├── package.json
│   │   ├── postcss.config.js
│   │   ├── public
│   │   │   ├── community.png
│   │   │   ├── logo-text-black-1.png
│   │   │   ├── logo-text-black.png
│   │   │   ├── logo-text-blue-1.png
│   │   │   └── logo-text-blue.png
│   │   ├── README.md
│   │   ├── src
│   │   │   ├── components
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Header.tsx
│   │   │   ├── pages
│   │   │   │   ├── _app.tsx
│   │   │   │   └── index.tsx
│   │   │   └── styles
│   │   │       └── global.css
│   │   ├── tailwind.config.js
│   │   └── tsconfig.json
│   └── server
│       ├── nest-cli.json
│       ├── package.json
│       ├── README.md
│       ├── src
│       │   ├── app.controller.spec.ts
│       │   ├── app.controller.ts
│       │   ├── app.module.ts
│       │   ├── app.service.ts
│       │   └── main.ts
│       ├── test
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       ├── tsconfig.build.json
│       └── tsconfig.json
├── CODE_OF_CONDUCT.md
├── commitlint.config.js
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── packages
│   ├── atoms
│   │   ├── Button.tsx
│   │   ├── index.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── eslint-config-custom
│   │   ├── eslint-next.js
│   │   ├── eslint-server.js
│   │   ├── index.js
│   │   └── package.json
│   ├── prettier-config-custom
│   │   ├── index.js
│   │   └── package.json
│   └── tsconfig
│       ├── base.json
│       ├── nextjs.json
│       ├── server.json
│       ├── package.json
│       └── README.md
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── SECURITY.md
└── turbo.json
```

</details>

---

## :desktop_computer: Local development

We are using pnpm monorepo to manage our packages.
> **Note:** This is not a definitive folder structure, it's just a starting point. The app can be break down into multi repos if needed.
>

To install the application:

```bash
pnpm install
```

To start the app on port `8080`:

```shell
pnpm dev
```

By doing so, both the client and server will be started in development mode.
To only start the client, you can run:

```shell
pnpm --filter bloghive-client dev
```

## :handshake: Contributing

We welcome contributions of all sizes, from small bug fixes to new features. Just check out the open issues and pull requests to see where you can make an impact.
Don't forget to read our [Contributing Guide](CONTRIBUTING.md) to learn how you can get involved.

## :balance_scale: LICENSE

The scripts and documentation in this project are released under the [Apache-2.0 LICENSE](LICENSE)

## :pray: Support

This project needs a star from you ⭐. Don't forget to leave a star if you like this project :wink:

## 📫 Contact

Find out more about how to reach me at [takanomedev221@gmail.com](mailto:takanomedev221@gmail.com)
