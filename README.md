# electronvuetodoapp

### Prerequisites
Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

### Install dependencies
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run electron:serve
```
## Built With
Vue.js 3
Electron

## Project Structure


```
your-project/
├── /src/                   # Vue.js source code
│   ├── /assets/            # Vue.js assets (images, styles, etc.)
│   ├── /components/        # Vue.js components
│   ├── /views/             # Vue.js views or pages
│   ├── background.js       # Electron main process entry point
│   ├── preload.js          # Electron preload script
│   ├── App.vue             # Vue.js main component
│   └── main.js             # Vue.js entry point
├── /public/                # Public assets (static files)
├── /dist/                  # Vue.js build output
├── /dist_electron/         # Electron build output
├── package.json            # Node.js project configuration
├── README.md               # Project documentation (you are here)
└── ...                     # Other project files and folders

```

## Electron Builder
This project uses Electron Builder for packaging and distributing your Electron app.

```bash
npm run electron:build

```
The packaged app will be available in the dist/ directory.

## Author

Nancy Solanki ([nancy.solanki@simformsolutions.com](mailto:nancy.solanki@simformsolutions.com))

